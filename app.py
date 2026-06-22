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

@app.route("/profile")
def get_profile():
    try:
        user_id = request.headers.get("Authorization")

        profile = (
            supabase
            .table("profiles")
            .select("*")
            .eq("id", user_id)
            .execute()
        )

        return jsonify(profile.data)

    except Exception as e:
        return jsonify({"error": str(e)}), 400


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
