import { Request, Response } from "express";
import { MovieServices } from "./movie.service";
// Create new Movie..

const createMovie = async (req: Request, res: Response) => {
  const movieData = req.body;
  const result = await MovieServices.createMovie(movieData);
  res.json({
    success: true,
    message: "Movie Created Successfully",
    data: result,
  });
};
// Get all Movies..

const getAllMovies = async (req: Request, res: Response) => {
  try {
    const result = await MovieServices.getAllMovies();
    res.json({
      success: true,
      message: "get All Movies find Successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Could not fetch the data",
      error: err,
    });
  }
};

//  Get single Movie...
const getMovieById = async (req: Request, res: Response) => {
  try {
    const { movieId } = req.params;
    const result = await MovieServices.getMovieById(movieId);
    res.json({
      success: true,
      message: "get  Movie by Id find Successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Could not fetch the data",
      error: err,
    });
  }
};

export const movieControllers = {
  createMovie,
  getAllMovies,
  getMovieById,
};
