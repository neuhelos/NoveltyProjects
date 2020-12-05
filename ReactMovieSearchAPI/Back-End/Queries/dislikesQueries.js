const db = require("../Database/database");

const createDislike = async (req, res) => {
    try {
        let newDislike = await db.one(
        "INSERT INTO film_dislikes (film_id, user_id) VALUES($1, $2) RETURNING id",
        [req.body.film_id, req.body.user_id]
        );
        res.status(200).json({
        status: "Success",
        message: "Movie Disiked",
        payload: newDislike
        });
    } catch (err) {
        res.status(404).json({
        status: err,
        message: "Movie Happy, Not Disliked",
        });
    }
    };

const getDislike = async (req, res, next) => {
    try {
        let dislike = await db.one(
        "SELECT * FROM film_dislikes WHERE film_id = $1 AND user_id = $2",
        [req.body.film_id, req.body.user_id]
        );
        res.status(200).json({
        status: "Success",
        message: "Dislike Retrieved",
        payload: dislike
        });
    } catch (error) {
        res.status(404).json({
        status: error,
        message: "No dislikes Given",
        });
    }
    };


const getAllDislikes = async (req, res, next) => {
    try {
        let allDislikes = await db.any(
        "SELECT COUNT(film_id) FROM film_dislikes WHERE film_id = $1 ) AS dislikes_count", req.body.film_id
        );
        res.status(200).json({
        status: "Success",
        message: "All Dislikes Retrieved",
        payload: allDislikes
        });
    } catch (error) {
        res.status(404).json({
        status: error,
        message: "No Dislikes Found",
        });
    }
};

const deleteDislike = async (req, res, next) => {
    try {
        await db.none("DELETE FROM film_dislikes WHERE user_id = $1 AND film_id = $2",
        [req.params.user_id, req.params.film_id]
        );
        res.status(200).json({
        status: "Success",
        message: "Dislike Removed"
        });
    } catch (error) {
        res.status(404).json({
        status: error,
        message: "Dislike Removal Failure"
        });
    }
};

module.exports = {
    createDislike,
    getDislike,
    getAllDislikes,
    deleteDislike
}
