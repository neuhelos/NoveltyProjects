const dislikes = require("express").Router()

const { getAllDislikes, getDislike, createDislike, deleteDislike }  = require("../Queries/dislikesQueries")

//dislikes Routes
dislikes.get("/", getAllDislikes)
dislikes.get("/:id", getDislike)
dislikes.post("/", createDislike)
dislikes.delete("/:userId/:filmId", deleteDislike)

module.exports = dislikes;