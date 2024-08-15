import { questionnaireService, sectionService } from "../config/injection";
import { STATUS_CODES } from "../helpers/constants";
import { ApiError } from "../utils/api-error";
import { ApiResponse } from "../utils/api-response";
import { asyncHandler } from "../utils/async-handler";

export const getAllSections = asyncHandler(async (req, res) => {
  const sections = await sectionService.getAll();

  // for (let user of sections) {
  //   user.createdAt = user._id.getTimestamp();
  //   await user.save();
  // }

  res.json(new ApiResponse(STATUS_CODES.OK, "Successfully retrieved sections", sections));
});

export const getSection = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    throw ApiError.badRequest("Section ID is required");
  }

  const section = await sectionService.getById(req.params.id);

  res.json(new ApiResponse(STATUS_CODES.OK, "Successfully retrieved section", section));
});

export const getSectionsByQuestionnaireId = asyncHandler(async (req, res) => {
  if (!req.params.questionnaireId) {
    throw ApiError.badRequest("Questionnaire ID is required");  
  }

  const sections = await questionnaireService.getSectionsByQuestionnaireId(
    req.params.questionnaireId
  );

  res.json(new ApiResponse(STATUS_CODES.OK, "Successfully retrieved sections", sections));
});

export const createSection = asyncHandler(async (req, res) => {
  if (!req.params.questionnaireId) {
    throw ApiError.badRequest("Questionnaire ID is required");
  }

  if (!req.body.name) {
    throw ApiError.badRequest("Section name is required");
  }

  const section = await sectionService.create(req.body, req.params.questionnaireId);

  res.json(new ApiResponse(STATUS_CODES.CREATED, "Section created successfully", section));
});

export const updateSection = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    throw ApiError.badRequest("Section ID is required");
  }

  if (!req.body.name) {
    throw ApiError.badRequest("Section name is required");
  }

  const section = await sectionService.update(req.params.id, req.body);

  res.json(new ApiResponse(STATUS_CODES.OK, "Section updated successfully", section));
});

export const deleteSection = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    throw ApiError.badRequest("Section ID is required");
  }

  if (!req.body.questionnaireId) {
    throw ApiError.badRequest("Questionnaire ID is required");
  }

  const section = await sectionService.delete(req.params.id, req.body.questionnaireId);

  res.json(new ApiResponse(STATUS_CODES.OK, "Section deleted successfully", section));
});
