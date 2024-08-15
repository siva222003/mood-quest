import { model, Schema, Document } from "mongoose";

// Define types for the content type
type RecommendationsType = "podcast" | "video" | "blog";

export interface IRecommendations extends Document {
  title: string;
  description: string;
  type: RecommendationsType;
  url: string;
  thumbnailUrl: string;
  tags: string[];
  createdAt: Date;
  //   publishDate: Date; // Date when the content was published
  //   author: string; // Author of the content
  //   duration?: number; // Duration of the content in minutes (optional, for podcasts and videos)
  //   transcript?: string; // Optional transcript for podcasts
}

// Define the schema
export const RecommendationSchema: Schema<IRecommendations> = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: {
    type: String,
    enum: ["podcast", "video", "blog"],
    required: true,
  },
  url: { type: String, required: true },
  thumbnailUrl: { type: String },
  tags: [{ type: String }],
  createdAt: { type: Date, default: Date.now },

  //   publishDate: { type: Date, required: true },
  //   author: { type: String, required: true },
  //   duration: { type: Number },
  //   transcript: { type: String },
});

export const Recommendation = model<IRecommendations>("Recommendation", RecommendationSchema);
