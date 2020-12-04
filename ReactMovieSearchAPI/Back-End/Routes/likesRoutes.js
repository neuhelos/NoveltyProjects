const likes = require("express").Router()

const { getAllLikes, getLike, createLike, deleteLike }  = require("../Queries/likesQueries")

//likes Routes
likes.get("/", getAllLikes)
likes.get("/:id", getLike)
likes.post("/", createLike)
likes.delete("/:id", deleteLike)

module.exports = likes;