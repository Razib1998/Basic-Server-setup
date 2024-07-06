import { TMovie } from "./movie.interface";
import { Movie } from "./movie.model";

const createMovie = async (payload: TMovie) => {
  // Manually add slug when create a new Movie

  // const date = format(payload.releaseDate, "yyyy-MM-dd");
  // const slug = slugify(`${payload.title}-${date}}`, {
  //   lower: true,
  // });
  // const result = await Movie.create({ ...payload, slug });
  const result = await Movie.create(payload);
  return result;
};
const getAllMovies = async () => {
  const result = await Movie.find();
  return result;
};

const getMovieById = async (id: string) => {
  const result = await Movie.findById(id);
  return result;
};
const getMovieBySlug = async (slug: string) => {
  const result = await Movie.findOne({ slug: slug });
  return result;
};

export const MovieServices = {
  createMovie,
  getAllMovies,
  getMovieById,
  getMovieBySlug,
};
