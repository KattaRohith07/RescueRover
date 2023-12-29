console.clear();

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import {
  getDatabase,
  ref,
  set,
  update,
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBhd9Q2uwNtNrbovMN9HlaZ5o_cQLzvUrw",
  authDomain: "rescuerover-login.firebaseapp.com",
  databaseURL: "https://rescuerover-login-default-rtdb.firebaseio.com",
  projectId: "rescuerover-login",
  storageBucket: "rescuerover-login.appspot.com",
  messagingSenderId: "58668279522",
  appId: "1:58668279522:web:7a9caf84ff99666a5320bb",
  measurementId: "G-MHRF2Y4DB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize variables

const auth = getAuth(app);
const database = getDatabase();

const loginBtn = document.getElementById("login");
const signupBtn = document.getElementById("signup");
const sign_up = document.getElementById("s-button");
const log_in = document.getElementById("l-button");
const s_button = document.getElementById("s-button");
const l_button = document.getElementById("l-button");

loginBtn.addEventListener("click", (e) => {
  let parent = e.target.parentNode.parentNode;
  Array.from(e.target.parentNode.parentNode.classList).find((element) => {
    if (element !== "slide-up") {
      parent.classList.add("slide-up");
    } else {
      signupBtn.parentNode.classList.add("slide-up");
      parent.classList.remove("slide-up");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  let parent = e.target.parentNode;
  Array.from(e.target.parentNode.classList).find((element) => {
    if (element !== "slide-up") {
      parent.classList.add("slide-up");
    } else {
      loginBtn.parentNode.parentNode.classList.add("slide-up");
      parent.classList.remove("slide-up");
    }
  });
});

sign_up.addEventListener("click", sign_up_f, false);
log_in.addEventListener("click", log_in_f, false);

function sign_up_f() {
  // Get field data
  const name_s = document.getElementById("s_name").value;
  const email = document.getElementById("s_email").value;
  const licence = document.getElementById("s_password").value;

  // Validations
  if (
    validate_email(email) == false ||
    validate_password(licence) == false ||
    validate_field(name_s) == false
  ) {
    alert("Please enter valid details");
    return;
  }

  createUserWithEmailAndPassword(auth, name_s, name_s)
    .then(function () {
      var user = auth.currentUser;
      alert("  User Created  ");

      var user_data = {
        email: name_s,
        name_s: email,
        last_login: Date.now(),
        licence:licence,
      };

      set(ref(database, "users/" + user.uid), user_data);
    })
    .catch(function (err) {
      var error_code = err.code;
      var error_msg = err.message;

      alert(error_msg);
    });
} 
// if(user=auth.currentUser){
//   window.location.href = "maps.html"
// }
// function log_in_f() {
//   //Get Data fields
//   const email = document.getElementById("l_email").value;
//   const password = document.getElementById("l_password").value;

//   //validates
//   if (validate_email(email) == false || validate_password(licence) == false) {
//     alert("Please enter valid details");
//     return;
//   }

//   signInWithEmailAndPassword(auth, name_s, password)
//     .then(function () {
//       var user = auth.currentUser;
//       alert("  User Logged In");

//       var user_data = {
//         last_login: Date.now(),
//       };

//       update(ref(database, "users/" + user.uid), user_data);
//     })
//     .catch(function (err) {
//       var error_code = err.code;
//       var error_msg = err.message;

//       alert(error_msg);
//     });
// }

function validate_email(email) {
  const expression = /^[A-Z0-9]+$/;
  if (expression.test(email) == true) {
    return true;
  } else {
    return false;
  }
}

function validate_password(licence) {
  if (licence < 6) {
    return false;
  } else {
    return true;
  }
}

function validate_field(field) {
  if (field == null) {
    return false;
  }

  if (field.length <= 0) {
    return false;
  } else {
    return true;
  }
}