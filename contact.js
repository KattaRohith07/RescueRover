
    //   copy your firebase config informations
    const firebaseConfig = {
        apiKey: "AIzaSyBI5y_SQCR7ixHYX1sQqez-g3Kcor1Krvc",
        authDomain: "rescuerover-contact.firebaseapp.com",
        databaseURL: "https://rescuerover-contact-default-rtdb.firebaseio.com",
        projectId: "rescuerover-contact",
        storageBucket: "rescuerover-contact.appspot.com",
        messagingSenderId: "1005142735777",
        appId: "1:1005142735777:web:d7c0890078d3386063e9e0",
        measurementId: "G-6THCM065JK"
      };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };