const likes = require("express").Router()

const { getAllLikes, getLike, createLike, deleteLike }  = require("../Queries/likesQueries")

//likes Routes
likes.delete("/:user/:filmId", deleteLike)
likes.get("/:id", getLike)
likes.get("/", getAllLikes)
likes.post("/", createLike)

module.exports = likes;