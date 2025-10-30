/**
 * AI Controller
 * Handle AI chatbot requests
 */

const aiService = require("../services/aiService");

exports.askAI = async (req, res) => {
  try {
    const { question } = req.body;

    if (!question || question.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: "Question is required",
      });
    }

    if (question.length > 500) {
      return res.status(400).json({
        success: false,
        message: "Question too long (max 500 characters)",
      });
    }

    const result = await aiService.getHealthRecommendation(question);

    console.log(
      `AI Question from ${req.user?.email || "anonymous"}: "${question}"`
    );

    res.json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to process AI request",
    });
  }
};
