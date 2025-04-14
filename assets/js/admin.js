import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAtBQMu778If3FHBgGVd2eQf4vY4gHh2VQ",
  authDomain: "ashraf-porportfolio.firebaseapp.com",
  projectId: "ashraf-porportfolio",
  storageBucket: "ashraf-porportfolio.firebasestorage.app",
  messagingSenderId: "494654658505",
  appId: "1:494654658505:web:afebc33185a8ae4a32fa18",
  measurementId: "G-5SVHHDN5WB"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
  }
});

document.getElementById("course-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const type = document.getElementById("type").value;
  const price = document.getElementById("price").value;

  const courseRef = ref(db, 'courses');
  push(courseRef, {
    title,
    description,
    type,
    price
  }).then(() => {
    document.getElementById("status-message").innerText = "Course added successfully!";
  });
});
