const likes = require("express").Router()

const { getAllLikes, getLike, createLike, deleteLike }  = require("../Queries/likesQueries")

//likes Routes
likes.delete("/:user_id/:film_id", deleteLike)
likes.get("/:id", getLike)
likes.get("/:film_id", getAllLikes)
likes.post("/", createLike)

module.exports = likes;