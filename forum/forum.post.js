import { ForumDB } from "./forum.db.js";

const params = new URLSearchParams(window.location.search);
const postId = params.get("id");

const postContainer = document.getElementById("postContainer");
const commentList = document.getElementById("commentList");

async function loadPost() {
  const doc = await ForumDB.getPostById(postId);
  const post = doc.data();

  postContainer.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.content}</p>
    <hr>
  `;
}

document.getElementById("send").onclick = async () => {
  await ForumDB.addComment({
    postId,
    content: commentText.value,
    authorId: "user_demo"
  });

  commentText.value = "";
  alert("Comment added!");
};

loadPost();
