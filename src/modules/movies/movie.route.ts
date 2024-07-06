import express from "express";
import { movieControllers } from "./movie.controller";

const router = express.Router();

router.post("/", movieControllers.createMovie);
router.get("/", movieControllers.getAllMovies);
router.get("/:movieId", movieControllers.getMovieById);
router.get("/by/:slug", movieControllers.getMovieBySlug);

export const MovieRoutes = router;
