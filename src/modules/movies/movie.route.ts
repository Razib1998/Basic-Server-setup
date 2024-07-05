import express from "express";
import { movieControllers } from "./movie.controller";

const router = express.Router();

router.post("/", movieControllers.createMovie);
router.get("/", movieControllers.getAllMovies);
router.get("/:movieId", movieControllers.getMovieById);

export const MovieRoutes = router;
