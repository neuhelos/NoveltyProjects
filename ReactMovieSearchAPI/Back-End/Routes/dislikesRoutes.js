const dislikes = require("express").Router()

const { getAllDislikes, getDislike, createDislike, deleteDislike }  = require("../Queries/dislikesQueries")

//dislikes Routes
dislikes.delete("/:user_id/:film_id", deleteDislike)
dislikes.get("/:id", getDislike)
dislikes.get("/:film_id", getAllDislikes)
dislikes.post("/", createDislike)

module.exports = dislikes;