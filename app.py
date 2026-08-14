from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)  # Allows React frontend to connect

JSON_FILE = 'messages.json'

@app.route('/api/contact', methods=['POST'])
def save_message():
    try:
        data = request.get_json()
        
        # Read existing messages
        if os.path.exists(JSON_FILE):
            with open(JSON_FILE, 'r', encoding='utf-8') as file:
                try:
                    messages = json.load(file)
                except json.JSONDecodeError:
                    messages = []
        else:
            messages = []

        # Append new message
        messages.append(data)

        # Save back to JSON file
        with open(JSON_FILE, 'w', encoding='utf-8') as file:
            json.dump(messages, file, indent=4)

        return jsonify({"success": True, "message": "Message saved successfully!"}), 200

    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)