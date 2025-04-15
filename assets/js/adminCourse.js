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

document.getElementById("courseForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const title = document.getElementById("courseTitle").value.trim();
  const description = document.getElementById("courseDescription").value.trim();
  const type = document.getElementById("courseType").value;
  const price = document.getElementById("coursePrice").value.trim();

  if (!title || !description || !type || !price) {
    alert("Please fill all fields.");
    return;
  }

  push(ref(db, "courses"), { title, description, type, price })
    .then(() => {
      alert("Course added successfully!");
      e.target.reset();
    })
    .catch((error) => {
      console.error("Error adding course:", error);
      alert("Something went wrong. Try again.");
    });
});
