// import axios from "axios";

// const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
// console.log("API Key:", API_KEY);

// export const generateContent = async (prompt) => {
//   try {
//     const response = await axios.post(
//       "https://api.openai.com/v1/chat/completions",
//       {
//         model: "gpt-3.5-turbo",
//         messages: [
//           {
//             role: "system",
//             content:
//               "You are a helpful assistant. Provide only the requested information without any introductions, explanations, or labels like 'Generated Job Skills:'. Respond concisely with only the raw list.",
//           },
//           { role: "user", content: `Provide a list without any title or introduction: ${prompt}` },
//         ],
//         max_tokens: 40,
//       },
//       {
//         headers: { Authorization: `Bearer ${API_KEY}` },
//       }
//     );

//     // Extract the response text
//     let result = response.data.choices[0].message.content.trim();

//     // Remove the header "Generated Job Skills:" and any trailing hyphen/whitespace
//     result = result.replace(/^Generated Job Skills:\s*-?\s*/i, "");

//     return result;
//   } catch (error) {
//     console.error("Error generating content:", error);
//     return "Error generating content";
//   }
// };










import axios from "axios";

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY; 
console.log("Loaded API Key:", API_KEY);  //  Check if the key is being loaded

export const generateContent = async (prompt) => {
  //  Check if the API Key is missing
  if (!API_KEY) {
    console.error(" API Key is missing! Check environment variables.");
    return "Error: API Key is missing";
  }

  try {
    console.log(" Sending API request to OpenAI...");
    
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant. Provide concise responses only.",
          },
          { role: "user", content: prompt },
        ],
        max_tokens: 40,
      },
      {
        headers: { Authorization: `Bearer ${API_KEY}` },
      }
    );

    console.log(" OpenAI API Response:", response.data); //  Log the API response

    let result = response.data.choices[0].message.content.trim();
    return result;
  } catch (error) {
    console.error(" Error generating content:", error.response ? error.response.data : error);
    return "Error generating content";
  }
};




