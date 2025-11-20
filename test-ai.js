// This imports the package
import { GoogleGenerativeAI } from "@google/genai";
// This loads your .env file
import 'dotenv/config'; 

// --- 1. Initialization ---
// Check if the API key is loaded
if (!process.env.GOOGLE_API_KEY) {
  console.error("ERROR: GOOGLE_API_KEY is not set in your .env file.");
  process.exit(1); // Exit the script
}

// Initialize with the API key
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

async function runTest() {
  console.log("Test script running...");
  try {
    // --- 2. Model Selection ---
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // --- 3. Simple Prompt ---
    const prompt = "Explain what a syntax error is in one sentence.";

    // --- 4. API Call ---
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // --- 5. Show Result ---
    console.log("-------------------------");
    console.log("✅ TEST SUCCEEDED!");
    console.log("API Response:", text);
    console.log("-------------------------");

  } catch (error) {
    // --- 6. Show Error ---
    console.log("-------------------------");
    console.error("❌ TEST FAILED!");
    console.error("Error details:", error.message);
    console.log("-------------------------");
  }
}

// Run the test
runTest();