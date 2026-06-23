import os
from flask import Flask, render_template, request, jsonify, redirect, url_for
from supabase import create_client, Client
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Flask app setup
app = Flask(
    __name__,
    template_folder="templates",
    static_folder="static"
)

# Supabase setup
SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_KEY = os.environ.get("SUPABASE_KEY")

if not SUPABASE_URL or not SUPABASE_KEY:
    print("WARNING: Supabase credentials are missing from your .env file!")

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# -----------------------------
# Page Routes & Standard Auth
# -----------------------------

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/signup", methods=["GET", "POST"])
def signup():
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")
        name = request.form.get("name") # Included from your new UI
        
        try:
            # Note: Storing 'name' requires setting up user metadata in Supabase, 
            # but this handles the core email/password creation perfectly.
            response = supabase.auth.sign_up({
                "email": email,
                "password": password
            })
            return redirect(url_for("login"))
            
        except Exception as e:
            return render_template("signup.html", error=str(e))

    return render_template("signup.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")
        
        try:
            response = supabase.auth.sign_in_with_password({
                "email": email,
                "password": password
            })
            token = response.session.access_token
            
            # Save token to localStorage and redirect home
            return f"""
            <script>
                localStorage.setItem('token', '{token}');
                window.location.href = '/';
            </script>
            """
        except Exception as e:
            return render_template("login.html", error=str(e))

    return render_template("login.html")

# -----------------------------
# Social Login (OAuth) Routes
# -----------------------------

@app.route('/login/oauth/<provider>')
def oauth_login(provider):
    try:
        response = supabase.auth.sign_in_with_oauth({
            "provider": provider,
            "options": {
                "redirect_to": "http://127.0.0.1:5000/auth/callback" 
            }
        })
        return redirect(response.url)
    except Exception as e:
        return f"OAuth Routing Error: {str(e)}"

@app.route('/auth/callback')
def auth_callback():
    code = request.args.get('code')
    if code:
        try:
            response = supabase.auth.exchange_code_for_session({"auth_code": code})
            token = response.session.access_token
            
            return f"""
            <script>
                localStorage.setItem('token', '{token}');
                window.location.href = '/';
            </script>
            """
        except Exception as e:
            return f"Authentication Failed: {str(e)}"
            
    return "Error: No authorization code received.", 400

# -----------------------------
# Core APIs
# -----------------------------

@app.route("/profile", methods=["GET"])
def get_profile():
    try:
        auth_header = request.headers.get("Authorization")
        if not auth_header or not auth_header.startswith("Bearer "):
            return jsonify({"error": "No token provided"}), 401

        token = auth_header.split(" ")[1]
        user_response = supabase.auth.get_user(token)
        
        if not user_response or not user_response.user:
            return jsonify({"error": "Invalid token"}), 401
            
        user_id = user_response.user.id

        profile = supabase.table("profiles").select("username").eq("id", user_id).execute()

        if profile.data and len(profile.data) > 0:
            username = profile.data[0].get("username")
            return jsonify({"username": username if username else "HERO"}), 200
        else:
            return jsonify({"username": "HERO"}), 200

    except Exception as e:
        return jsonify({"error": "Unauthorized or Token Expired"}), 401

@app.route("/api/get_character/<char_key>")
def get_character(char_key):
    try:
        response = supabase.table("characters").select("*").eq("char_key", char_key).execute()
        return jsonify(response.data)
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@app.route("/health")
def health():
    return jsonify({"status": "ok"}), 200

# -----------------------------
# Run App
# -----------------------------

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)