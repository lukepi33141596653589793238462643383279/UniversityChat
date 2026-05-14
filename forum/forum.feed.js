import { ForumDB } from "./forum.db.js";

const feed = document.getElementById("postFeed");

async function loadPosts() {
  const snapshot = await ForumDB.getPosts();

  snapshot.forEach(doc => {
    const post = doc.data();

    const el = document.createElement("div");
    el.className = "post";

    el.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
      <div class="meta">
        ⭐ score: ${post.score || 0}
      </div>
      <button onclick="openPost('${doc.id}')">Open</button>
    `;

    feed.appendChild(el);
  });
}

window.openPost = (id) => {
  window.location.href = "forum.post.html?id=" + id;
};

loadPosts();
