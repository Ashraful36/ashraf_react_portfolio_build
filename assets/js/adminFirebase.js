import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

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

// Add video
document.getElementById("videoForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const title = document.getElementById("videoTitle").value;
  const url = document.getElementById("videoURL").value;
  push(ref(db, "videos"), { title, url });
  alert("Video added successfully!");
  e.target.reset();
});

// Add blog
document.getElementById("blogForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const title = document.getElementById("blogTitle").value;
  const content = document.getElementById("blogContent").value;
  push(ref(db, "blogs"), { title, content });
  alert("Blog post added successfully!");
  e.target.reset();
});
