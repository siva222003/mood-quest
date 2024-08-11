import { questionnaireService } from "../config/injection";
import { STATUS_CODES } from "../helpers/constants";
import { ApiError } from "../utils/api-error";
import { ApiResponse } from "../utils/api-response";
import { asyncHandler } from "../utils/async-handler";

export const getAllQuestionnaires = asyncHandler(async (req, res) => {
  const questionnaires = await questionnaireService.getAll();

  if (!questionnaires) {
    throw ApiError.badRequest("No questionnaires found");
  }

  res.json(
    new ApiResponse(STATUS_CODES.OK, "Successfully retrieved questionnaires", questionnaires)
  );
});

export const getQuestionnaire = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    throw ApiError.badRequest("Questionnaire ID is required");
  }

  const questionnaire = await questionnaireService.getById(id);

  res.json(new ApiResponse(STATUS_CODES.OK, "Successfully retrieved questionnaire", questionnaire));
});


export const createQuestionnaire = asyncHandler(async (req, res) => {
  const { title } = req.body;

  if (!title) {
    throw ApiError.badRequest("Title is required");
  }

  const questionnaire = await questionnaireService.create({ title });

  res.json(
    new ApiResponse(STATUS_CODES.CREATED, "Successfully created questionnaire", questionnaire)
  );
});

export const updateQuestionnaire = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  if (!id) {
    throw ApiError.badRequest("Questionnaire ID is required");
  }

  if (!title) {
    throw ApiError.badRequest("Title is required");
  }

  const questionnaire = await questionnaireService.update(id, { title });

  res.json(new ApiResponse(STATUS_CODES.OK, "Successfully updated questionnaire", questionnaire));
});

export const deleteQuestionnaire = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    throw ApiError.badRequest("Questionnaire ID is required");
  }

  const questionnaire = await questionnaireService.delete(id);

  res.json(new ApiResponse(STATUS_CODES.OK, "Successfully deleted questionnaire", questionnaire));
});
