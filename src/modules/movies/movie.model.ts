import mongoose, { model, Schema } from "mongoose";
import { TMovie, TReview } from "./movie.interface";
import { format } from "date-fns";
import slugify from "slugify";

const reviewSchema = new mongoose.Schema<TReview>({
  email: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const movieSchema = new Schema<TMovie>({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  releaseDate: {
    type: Date,
  },
  genre: {
    type: String,
    required: [true, "Genre is required"],
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  viewCount: {
    type: Number,
    default: 0,
  },
  reviews: {
    type: [reviewSchema],
    required: true,
  },
  slug: {
    type: String,
  },
});

// Using pre hook middleware..
movieSchema.pre("save", async function (next) {
  const date = format(this.releaseDate, "yyyy-MM-dd");
  this.slug = slugify(`${this.title}-${date}}`, {
    lower: true,
  });
  next();
});
export const Movie = model<TMovie>("Movie", movieSchema);
