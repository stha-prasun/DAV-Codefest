export const checkAnswer = async (req, res) => {
  try {
    const { question, description, code } = req.body;

    const aiResponse = await fetch(process.env.AI_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `You are an intelligent productivity assistant. Based on the task description, question and code provided, suggest users about their code. The suggestions should be Simple and clear, Actionable, Relevant to the task, Written in plain, helpful language. Question: ${question}, Task Description: ${description}, Code: ${code} Give your suggestion. The pattern of the reply should be like: "Error in line 5. Suggestion: You wrote System.out.printlm() instead of System.out.println(). Do not r"`,
              },
            ],
          },
        ],
      }),
    });

    const aiData = await aiResponse.json();

    const suggestion =
      aiData?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!suggestion) {
      return res.status(500).json({
        message: "AI did not return suggestions",
        success: false,
      });
    }

    return res.status(200).json({
        message: "Suggestion Generated Successfully",
        success: true,
        suggestion
    })
  } catch (error) {
    console.error("AI Suggestion Error:", error);
    return res.status(500).json({
      message: "Failed to generate AI suggestion",
      success: false,
    });
  }
};
