import { questionnaireService, questionService, sectionService } from "../config/injection";
import { STATUS_CODES } from "../helpers/constants";
import { validateQuestion } from "../helpers/validate";
import { ApiError } from "../utils/api-error";
import { ApiResponse } from "../utils/api-response";
import { asyncHandler } from "../utils/async-handler";

export const getQuestionsByQuestionnaireId = asyncHandler(async (req, res) => {
  const { questionnaireId } = req.params;

  if (!questionnaireId) {
    throw ApiError.badRequest("Questionnaire ID is required");
  }
  const questionnaire = await questionnaireService.getQuestionsByQuestionnaireId(questionnaireId);

  res.json(
    new ApiResponse(
      STATUS_CODES.OK,
      "Successfully retrieved questions by questionnaire ID",
      questionnaire
    )
  );
});

export const getQuestionsBySectionId = asyncHandler(async (req, res) => {
  if (!req.params.sectionId) {
    throw ApiError.badRequest("Section id is required  ");
  }

  const questions = await sectionService.getQuestionsBySectionId(req.params.sectionId);

  res.send(new ApiResponse(STATUS_CODES.OK, "Successfully retrieved questions", questions));
});

export const createQuestion = asyncHandler(async (req, res) => {
  if (!req.body.sectionId) {
    throw ApiError.badRequest("Section id is required");
  }

  if (!req.body.question) {
    throw ApiError.badRequest("Question is required");
  }

  const errors = validateQuestion(req.body.question);

  console.log(errors);

  if (errors.length) {
    throw ApiError.badRequest(errors[0]);
  }

  const question = await questionService.create(req.body.question, req.body.sectionId);

  res.send(new ApiResponse(STATUS_CODES.CREATED, "Successfully created question", question));
});

export const updateQuestion = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    throw ApiError.badRequest("Question id is required");
  }

  if (!req.body.question) {
    throw ApiError.badRequest("Question is required");
  }

  const question = await questionService.update(req.params.id, req.body.question);

  res.send(new ApiResponse(STATUS_CODES.OK, "Successfully updated question", question));
});

export const deleteQuestion = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    throw ApiError.badRequest("Question id is required");
  }

  if (!req.body.sectionId) {
    throw ApiError.badRequest("Section id is required");
  }

  const question = await questionService.delete(req.params.id, req.body.sectionId);

  res.send(new ApiResponse(STATUS_CODES.OK, "Successfully deleted question", question));
});
