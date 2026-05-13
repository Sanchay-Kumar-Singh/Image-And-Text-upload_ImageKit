const express = require("express");
const multer = require("multer");

const {
  uploadPost,
  getPosts,
} = require("../controllers/postController");

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/upload", upload.single("image"), uploadPost);
router.get("/feed", getPosts);

module.exports = router;
