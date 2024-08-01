// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-BOmQY6gzwyGTnFufB1d7DUkztekOjcs",
    authDomain: "login-ede24.firebaseapp.com",
    projectId: "login-ede24",
    storageBucket: "login-ede24.appspot.com",
    messagingSenderId: "611623246489",
    appId: "1:611623246489:web:8d5cb814c257e0794df608"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Get references to the form and input elements
  const loginForm = document.getElementById('login-form');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  
  // Listen for form submission
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const email = usernameInput.value;
    const password = passwordInput.value;
  
    // Sign in with Firebase Authentication
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert('Login successful!');
        // Redirect or perform further actions
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error: ${errorMessage}`);
      });
  });
  