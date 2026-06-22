import os
from flask import Flask, render_template, request, jsonify
from supabase import create_client, Client
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Flask app
app = Flask(
    __name__,
    template_folder="templates",
    static_folder="static"
)

# Supabase setup
SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_KEY = os.environ.get("SUPABASE_KEY")

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# -----------------------------
# Page Routes
# -----------------------------

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/signup")
def signup_page():
    return render_template("login.html")


# -----------------------------
# Authentication APIs
# -----------------------------

@app.route("/signup", methods=["POST"])
def signup():
    try:
        data = request.get_json()

        response = supabase.auth.sign_up(
            {
                "email": data["email"],
                "password": data["password"]
            }
        )

        message = (
            "Check your email for confirmation"
            if response.user
            else "Sign up successful"
        )

        return jsonify({"message": message}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 400


@app.route("/login", methods=["POST"])
def login():
    try:
        data = request.get_json()

        response = supabase.auth.sign_in_with_password(
            {
                "email": data["email"],
                "password": data["password"]
            }
        )

        return jsonify(
            {
                "token": response.session.access_token,
                "user": response.user.email
            }
        ), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 400


# -----------------------------
# Character API
# -----------------------------

@app.route("/api/get_character/<char_key>")
def get_character(char_key):
    try:
        response = (
            supabase
            .table("characters")
            .select("*")
            .eq("char_key", char_key)
            .execute()
        )

        return jsonify(response.data)

    except Exception as e:
        return jsonify({"error": str(e)}), 400


# -----------------------------
# User Profile API
# -----------------------------

@app.route("/profile", methods=["GET"])
def get_profile():
    try:
        # 1. Safely get the Authorization header
        auth_header = request.headers.get("Authorization")
        if not auth_header or not auth_header.startswith("Bearer "):
            return jsonify({"error": "No token provided"}), 401

        # 2. Extract just the token part
        token = auth_header.split(" ")[1]

        # 3. Ask Supabase to verify the token and get the user
        user_response = supabase.auth.get_user(token)
        if not user_response or not user_response.user:
            return jsonify({"error": "Invalid token"}), 401
            
        user_id = user_response.user.id

        # 4. Look up their profile in the database
        profile = (
            supabase
            .table("profiles")
            .select("username")
            .eq("id", user_id)
            .execute()
        )

        # 5. Return the username (or a default name if they haven't set one yet)
        if profile.data and len(profile.data) > 0:
            username = profile.data[0].get("username")
            if not username:
                username = "HERO" # Fallback if username column is empty
            return jsonify({"username": username}), 200
        else:
            return jsonify({"username": "HERO"}), 200

    except Exception as e:
        return jsonify({"error": "Unauthorized or Token Expired"}), 401


# -----------------------------
# Health Check
# -----------------------------

@app.route("/health")
def health():
    return jsonify({"status": "ok"}), 200


# -----------------------------
# Run App
# -----------------------------

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)