import { OpenAI } from "openai";

const configuration = {
  apiKey: process.env.OPENAI_API_KEY,
};
const openai = new OpenAI(configuration);

export async function analyzeMood(answers: any) {
  try {
    const formattedAnswers = answers
      .map((answer: any) => `**Question:** ${answer.question}\n**Answer:** ${answer.answer}`)
      .join("\n\n");

    const temp = `You are provided with a set of questions and answers that reflect the user's current emotional state. Your task is to analyze the responses and determine which moods from the following array best match the user's state. Please select 2 or 3 of the most appropriate moods based on the given answers.

**Mood Array:**
[
  "Happy",
  "Anxious",
  "Sad",
  "Overwhelmed",
  "Stressed",
  "Content",
  "Frustrated",
  "Depressed",
  "Calm",
  "Motivated",
  "Indifferent",
  "Excited",
  "Irritated",
  "Energized",
  "Confident",
  "Disheartened",
  "Optimistic",
  "Exhausted",
  "Satisfied",
  "Nervous"
]

**User Responses:**
${formattedAnswers}

Based on these responses, please analyze the user's mood and return 2 or 3 of the best-matched moods from the array above and just give only the array of moods and not even a single character extra.
`;

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: temp,
        },
      ],
      model: "gpt-4o-mini",
    });

    const analyzedMoods = completion.choices[0].message.content;

    const parsedMoods = JSON.parse(analyzedMoods ?? "[]");

    console.log(parsedMoods);

    return parsedMoods;
  } catch (error) {
    throw error;
  }
}
