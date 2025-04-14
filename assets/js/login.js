import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

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
const auth = getAuth(app);

document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "admin.html";
    })
    .catch((error) => {
      document.getElementById("error-message").innerText = error.message;
    });
});
