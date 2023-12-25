// script.js


function check() {
    // Get the input values
    var vehicle = document.getElementById("s_password").value;
    var licence = document.getElementById("confirm_password").value;
  
    // Check if all fields are filled
    if (vehicle === "" || licence==="") {
      alert("Invalid Details!!");
    }
      else{
          window.location.href = "maps.html";
        }

  }
    function myFunction(x) {
        x.style.background = "pink";
      }
  