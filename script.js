// script.js

function check() {
    // Get the input values
    var name = document.getElementById("s_name").value;
    var vehicle = document.getElementById("s_password").value;
    var licence = document.getElementById("confirm_password").value;
  
    // Check if any of the fields is empty
    if (name === "" || vehicle === "" || licence === "") {
      alert("Enter all details!");
    } else {
      window.location.href = "maps.html";
    }
  }
  
  
      function myFunction(x) {
          x.style.background = "pink";
        }
    