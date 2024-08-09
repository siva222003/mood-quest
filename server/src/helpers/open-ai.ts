import { OpenAI } from "openai";

const configuration = {
    apiKey: process.env.OPENAI_API_KEY,
//   apiKey: "sk-<your-openai-api-key>",
};
const openai = new OpenAI(configuration);

const questionnaireData = {
  questions: [
    { question: "How do you feel today?", answer: "I am very anxious." },
    { question: "Have you had a good day?", answer: "Not really, it's been stressful." },
  ],
};

export async function analyzeMood() {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `Analyze the following responses and determine the mood of the user:\n\n${JSON.stringify(
            questionnaireData
          )}\n\nProvide an array of moods based on the responses.`,
        },
      ],
      model: "gpt-4o-mini",
    });

    const analyzedMoods = completion.choices[0];
    // return JSON.parse(analyzedMoods);

    console.log(analyzedMoods);
  } catch (error) {
    throw error;
  }
}
