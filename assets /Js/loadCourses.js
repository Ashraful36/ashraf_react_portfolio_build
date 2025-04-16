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
const courseList = document.getElementById("course-list");
onValue(ref(db, "courses"), (snapshot) => {
  const data = snapshot.val();
  courseList.innerHTML = "";
  if (!data) {
    courseList.innerHTML = "<p>No courses found.</p>";
    return;
  }
  Object.entries(data).forEach(([id, course]) => {
    const card = document.createElement("div");
    card.className = "course-card";
    card.innerHTML = `<h3>${course.title}</h3><p>${course.description}</p><p><strong>${course.type}</strong> | ${course.price}</p>`;
    courseList.appendChild(card);
  });
});
