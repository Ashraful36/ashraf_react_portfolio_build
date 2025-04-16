import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyAtBQMu778If3FHBgGVd2eQf4vY4gHh2VQ",
  authDomain: "ashraf-porportfolio.firebaseapp.com",
  projectId: "ashraf-porportfolio",
  storageBucket: "ashraf-porportfolio.firebasestorage.app",
  messagingSenderId: "494654658505",
  appId: "1:494654658505:web:afebc33185a8ae4a32fa18"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const blogList = document.getElementById("blog-list");
onValue(ref(db, "blogs"), (snapshot) => {
  const data = snapshot.val();
  blogList.innerHTML = "";
  if (!data) {
    blogList.innerHTML = "<p>No blogs found.</p>";
    return;
  }
  Object.entries(data).forEach(([id, blog]) => {
    const div = document.createElement("div");
    div.className = "blog-post";
    div.innerHTML = `<h3>${blog.title}</h3><p>${blog.content}</p>`;
    blogList.appendChild(div);
  });
});
