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
const videoList = document.getElementById("video-list");
onValue(ref(db, "videos"), (snapshot) => {
  const data = snapshot.val();
  videoList.innerHTML = "";
  if (!data) {
    videoList.innerHTML = "<p>No videos found.</p>";
    return;
  }
  Object.entries(data).forEach(([id, video]) => {
    const div = document.createElement("div");
    div.className = "video-card";
    div.innerHTML = `<h3>${video.title}</h3><iframe width="100%" height="315" src="${video.url}" frameborder="0" allowfullscreen></iframe>`;
    videoList.appendChild(div);
  });
});
