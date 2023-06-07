import { Router } from "express";
import { chackAuth } from "../utils/checkAuth.js";
import { createPost, getAllPosts } from "../controllers/posts.js";

const router = new Router();

// Create Post
// http://localhost:5000/api/posts
router.post("/", chackAuth, createPost);

// Get Posts
// http://localhost:5000/api/posts
router.get('/posts', getAllPosts)

// // Get Me
// // http://localhost:5000/api/auth/me
// router.get('/me', chackAuth, getme)

export default router;
