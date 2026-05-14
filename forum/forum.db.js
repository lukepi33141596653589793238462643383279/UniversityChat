// forum.db.js

import { db } from "../firebase/firebase.js";

export const ForumDB = {
  // POSTS
  async createPost(post) {
    return await db.collection("posts").add({
      ...post,
      createdAt: Date.now(),
      upvotes: 0,
      downvotes: 0,
      score: 0
    });
  },

  async getPosts() {
    return await db.collection("posts")
      .orderBy("createdAt", "desc")
      .get();
  },

  async getPostById(id) {
    return await db.collection("posts").doc(id).get();
  },

  // COMMUNITIES
  async createCommunity(data) {
    return await db.collection("communities").add({
      ...data,
      createdAt: Date.now(),
      members: 0
    });
  },

  async getCommunities() {
    return await db.collection("communities").get();
  },

  // COMMENTS
  async addComment(comment) {
    return await db.collection("comments").add({
      ...comment,
      createdAt: Date.now()
    });
  }
};
