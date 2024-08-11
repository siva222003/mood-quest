import { STATUS_CODES } from "../helpers/constants";
import { Recommendation } from "../models/recommendations.model";
import { ApiError } from "../utils/api-error";
import { ApiResponse } from "../utils/api-response";
import { asyncHandler } from "../utils/async-handler";

export const getRecommendations = asyncHandler(async (req, res) => {
  const recommendations = await Recommendation.find();

  res.json(
    new ApiResponse(STATUS_CODES.OK, "Recommendations fetched successfully", recommendations)
  );
});
