import os
import fitz  # PyMuPDF
from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

# Load API key from environment variables
api_key = "AIzaSyDVtceyk_Cb6Xd50i3EgLFc7jMoUln1h9E"

# Configure API key for Google Gemini
genai.configure(api_key=api_key)
model = genai.GenerativeModel('gemini-1.5-flash')

# Path to the PDF and text files
PDF_FILE = r"C:\Users\Happy yadav\Desktop\Projects\Happy Yadav Portfolio\server\happy.pdf"
TEXT_FILE = r"C:\Users\Happy yadav\Desktop\Projects\Happy Yadav Portfolio\happy.txt"

def extract_text_from_pdf(pdf_file, text_file):
    """Extract text from a PDF file and save it to a text file."""
    text = ""
    try:
        doc = fitz.open(pdf_file)
        for page in doc:
            text += page.get_text()
        doc.close()

        # Write the extracted text to the text file
        with open(text_file, "w") as f:
            f.write(text)
        print("Text extracted and saved to", text_file)
    except Exception as e:
        print(f"Error extracting text from {pdf_file}: {e}")

def get_text_from_txt(text_file):
    """Read text from a text file."""
    try:
        with open(text_file, "r") as file:
            return file.read()
    except Exception as e:
        print(f"Error reading {text_file}: {e}")
        return ""

def ask_aura_question(user_question, txt_file_path):
    """Ask the AI a question based on extracted text."""
    answer = ""
    try:
        # Get the extracted text from the txt file
        extracted_text = get_text_from_txt(txt_file_path)

        if not extracted_text:
            return "Error: Could not retrieve text from file."

        # Use the extracted text and the user's question to prompt Gemini AI
        prompt = f"Answer the following question based on this text: '{extracted_text}'.\nQuestion: {user_question}"
        response = model.generate_content(prompt)
        print("Answer response: ", response.text)  # Debug print for checking the response
        answer = response.text
    except Exception as e:
        print(f"Error while asking Gemini AI: {e}")
        return f"Error: {e}"
    
    return answer

@app.route("/api/chat", methods=["POST"])
def chat():
    # Get the user's message from the request
    user_message = request.json.get("message", "").strip().lower()

    # Check for specific keywords or phrases in the user's message
    keywords = [
        "education", "work experience", "projects", "skills", "achievements",
        "contact", "portfolio", "linkedin", "github", "internship", "technical director","name","happy yadav"
    ]

    # If the message contains any keywords, respond using the extracted text
    if any(keyword in user_message for keyword in keywords):
        answer = ask_aura_question(user_message, TEXT_FILE)
        return jsonify({"reply": answer})

    # Otherwise, handle general queries with the model
    try:
        # Call the Gemini model to generate a response
        bot_reply = model.generate_content(user_message)  
        
        # Extract the text from the bot reply
        reply_text = bot_reply.text if hasattr(bot_reply, 'text') else "I'm not sure how to answer that."
        
        return jsonify({"reply": reply_text})
    except Exception as e:
        print(f"Error fetching response from Gemini: {e}")
        return jsonify({"reply": "I'm currently unable to get a response. Please try again later."})

if __name__ == "__main__":
    # Extract text from the PDF on startup
    extract_text_from_pdf(PDF_FILE, TEXT_FILE)
    app.run(debug=True)
