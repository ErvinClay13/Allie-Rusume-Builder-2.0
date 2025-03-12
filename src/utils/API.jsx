import axios from "axios";

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export const generateContent = async (prompt) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a helpful assistant. Provide only the requested information without any introductions, explanations, or labels like 'Generated Job Skills:'. Respond concisely with only the raw list.",
          },
          { role: "user", content: `Provide a list without any title or introduction: ${prompt}` },
        ],
        max_tokens: 40,
      },
      {
        headers: { Authorization: `Bearer ${API_KEY}` },
      }
    );

    // Extract the response text
    let result = response.data.choices[0].message.content.trim();

    // Remove the header "Generated Job Skills:" and any trailing hyphen/whitespace
    result = result.replace(/^Generated Job Skills:\s*-?\s*/i, "");

    return result;
  } catch (error) {
    console.error("Error generating content:", error);
    return "Error generating content";
  }
};

