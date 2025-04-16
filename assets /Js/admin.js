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
document.getElementById("courseForm").onsubmit = e => {
  e.preventDefault();
  const data = {
    title: courseTitle.value,
    description: courseDescription.value,
    type: courseType.value,
    price: coursePrice.value
  };
  push(ref(db, "courses"), data).then(() => alert("Course added!"));
  e.target.reset();
};
document.getElementById("videoForm").onsubmit = e => {
  e.preventDefault();
  const data = {
    title: videoTitle.value,
    url: videoURL.value
  };
  push(ref(db, "videos"), data).then(() => alert("Video added!"));
  e.target.reset();
};
document.getElementById("blogForm").onsubmit = e => {
  e.preventDefault();
  const data = {
    title: blogTitle.value,
    content: blogContent.value
  };
  push(ref(db, "blogs"), data).then(() => alert("Blog added!"));
  e.target.reset();
};
