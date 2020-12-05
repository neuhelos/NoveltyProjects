const db = require("../Database/database");

const createLike = async (req, res) => {
    try {
        let newLike = await db.one(
        "INSERT INTO film_likes (film_id, user_id) VALUES($1, $2) RETURNING id",
        [req.body.film_id, req.body.user_id]
        );
        res.status(200).json({
        status: "Success",
        message: "Movie Liked",
        payload: newLike
        });
    } catch (err) {
        res.status(404).json({
        status: err,
        message: "Movie Sad, Not Liked",
        });
    }
    };

const getLike = async (req, res, next) => {
    try {
        let like = await db.one(
        "SELECT * FROM film_likes WHERE film_id = $1 AND user_id = $2",
        [req.body.film_id, req.body.user_id]
        );
        res.status(200).json({
        status: "Success",
        message: "Like Retrieved",
        payload: like
        });
    } catch (error) {
        res.status(404).json({
        status: error,
        message: "No Likes Given",
        });
    }
    };


const getAllLikes = async (req, res, next) => {
    try {
        let allLikes = await db.any(
        "SELECT COUNT(film_id) FROM film_likes WHERE film_id = $1 ) AS likes_count", req.body.film_id
        );
        res.status(200).json({
        status: "Success",
        message: "All Likes Retrieved",
        payload: allLikes
        });
    } catch (error) {
        res.status(404).json({
        status: error,
        message: "No Likes Found",
        });
    }
};

const deleteLike = async (req, res, next) => {
    try {
        await db.none("DELETE FROM film_likes WHERE user_id = $1 film_id = $2",
        [req.params.user_id, req.params.film_id]
        );
        res.status(200).json({
        status: "Success",
        message: "Like Removed"
        });
    } catch (error) {
        res.status(404).json({
        status: error,
        message: "Like Removal Failure"
        });
    }
};

module.exports = {
    createLike,
    getLike,
    getAllLikes,
    deleteLike
}
