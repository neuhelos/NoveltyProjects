const dislikes = require("express").Router()

const { getAllDislikes, getDislike, createDislike, deleteDislike }  = require("../Queries/dislikesQueries")

//dislikes Routes
dislikes.delete("/:userId/:filmId", deleteDislike)
dislikes.get("/:id", getDislike)
dislikes.get("/", getAllDislikes)
dislikes.post("/", createDislike)

module.exports = dislikes;