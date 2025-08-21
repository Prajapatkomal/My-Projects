const express = require("express");
const { MovieModel } = require("../model/movie.model");
const { auth } = require("../middleware/auth.mddleware");
const movieRouter = express.Router();


movieRouter.use(auth)

movieRouter.get("/", async (req, res) => {
  try {
    const movies = await MovieModel.find();
    return res.status(200).json(movies);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});


movieRouter.get("/:id", async (req, res) => {
    const {id} = req.params
  try {
    const movie = await MovieModel.findById(id);
    return res.status(200).json(movie);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});


movieRouter.post("/create", async (req, res) => {
  const { title, poster,videoKey, category, type } = req.body;
  try {
    const movies = new MovieModel({
        title,
      poster,
      videoKey,
      category,
      type,
    });
    await movies.save();
    return res.status(200).json({ msg: "new movie added" });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});


module.exports = { movieRouter };
