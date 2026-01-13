import OpenAI from "openai";
import * as dotenv from "dotenv";

// Load environment variables
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const hubPerformanceData = [
  {
    hubId: "Hub_01",
    deliveryConversion: "65%",
    backlogCount: 120,
    sopCompliance: "Low",
  },
  {
    hubId: "Hub_02",
    deliveryConversion: "92%",
    backlogCount: 15,
    sopCompliance: "High",
  },
  {
    hubId: "Hub_03",
    deliveryConversion: "78%",
    backlogCount: 45,
    sopCompliance: "Medium",
  },
];

async function generateOperationalInsights(data: any[]) {
  console.log("🚀 Initializing AI Analysis for Hub Performance...");

  const prompt = `
    You are an Operational Intelligence Assistant. 
    Analyze the following hub performance data:
    ${JSON.stringify(data)}

    Tasks:
    1. Identify the hub with the highest 'Capital Leakage' risk (Low SOP compliance).
    2. Suggest an action plan to reduce the backlog, similar to improving delivery conversions.
    3. Output a summary for a Quarterly OKR review.
  `;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Or "gpt-4"
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    console.log("\n--- 📊 AI-GENERATED KPI REPORT ---");
    console.log(response.choices[0].message.content);
    console.log("----------------------------------\n");
    console.log("✅ Report generated successfully. Ready for OKR alignment.");
  } catch (error) {
    console.error("❌ Error generating report:", error);
  }
}

// Execute the automation
generateOperationalInsights(hubPerformanceData);
