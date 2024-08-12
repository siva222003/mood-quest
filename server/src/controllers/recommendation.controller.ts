import { STATUS_CODES } from "../helpers/constants";
import { Recommendation } from "../models/recommendations.model";
import { ApiError } from "../utils/api-error";
import { ApiResponse } from "../utils/api-response";
import { asyncHandler } from "../utils/async-handler";

export const getRecommendations = asyncHandler(async (req, res) => {
  const { tags } = req.body;

  if (!Array.isArray(tags) || tags.length === 0) {
    throw new ApiError(STATUS_CODES.BAD_REQUEST, "Tags must be a non-empty array");
  }

  const recommendations = await Recommendation.find({ tags: { $in: tags } });

  res.json(
    new ApiResponse(STATUS_CODES.OK, "Recommendations fetched successfully", recommendations)
  );
});

export const createRecommendation = asyncHandler(async (req, res) => {
  const { title, description, type, url, thumbnailUrl, tags } = req.body;

  if (!title || !description || !type || !url || !thumbnailUrl || !tags) {
    throw new ApiError(STATUS_CODES.BAD_REQUEST, "Please provide all required fields");
  }

  if (!["article", "video", "podcast"].includes(type)) {
    throw new ApiError(STATUS_CODES.BAD_REQUEST, "Invalid recommendation type");
  }

  if (!Array.isArray(tags)) {
    throw new ApiError(STATUS_CODES.BAD_REQUEST, "Tags must be an array");
  }

  if (tags.length < 1) {
    throw new ApiError(STATUS_CODES.BAD_REQUEST, "Please provide at least one tag");
  }

  const recommendation = await Recommendation.create(req.body);

  res.json(
    new ApiResponse(STATUS_CODES.CREATED, "Recommendation created successfully", recommendation)
  );
});

export const createManyRecommendations = asyncHandler(async (req, res) => {
  const recommendations = req.body;

  if (!Array.isArray(recommendations)) {
    throw new ApiError(
      STATUS_CODES.BAD_REQUEST,
      "Request body must be an array of recommendations"
    );
  }

  const createdRecommendations = [];

  for (const recommendationData of recommendations) {
    const { title, description, type, url, thumbnailUrl, tags } = recommendationData;

    if (!title || !description || !type || !url || !thumbnailUrl || !tags) {
      throw new ApiError(STATUS_CODES.BAD_REQUEST, "Please provide all required fields");
    }

    if (!["blog", "video", "podcast"].includes(type)) {
      throw new ApiError(STATUS_CODES.BAD_REQUEST, "Invalid recommendation type");
    }

    if (!Array.isArray(tags)) {
      throw new ApiError(STATUS_CODES.BAD_REQUEST, "Tags must be an array");
    }

    if (tags.length < 1) {
      throw new ApiError(STATUS_CODES.BAD_REQUEST, "Please provide at least one tag");
    }

    const recommendation = await Recommendation.create(recommendationData);
    createdRecommendations.push(recommendation);
  }

  res.json(
    new ApiResponse(
      STATUS_CODES.CREATED,
      "Recommendations created successfully",
      createdRecommendations
    )
  );
});
