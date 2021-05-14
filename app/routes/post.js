const router = require("express").Router()
const { Post } = require("../controllers/")

router.route("/").get(Post.read.all).post(Post.create)
router.route("/:id").get(Post.read.one).put(Post.update).delete(Post.delete)

module.exports = router