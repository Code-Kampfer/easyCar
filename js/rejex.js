function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
  }
  
  function validateName(name) {
    if (name == "" || name == null) {
      printError("nameErr", "Veuillez entrer votre nom.");
      return false;
    } else {
      var regex = /^[a-zA-Z]+$/;
      if (!regex.test(name)) {
        printError("nameErr", "Veuillez entrer un nom valide.");
        return false;
      } else {
        printError("nameErr", "");
        return true;
      }
    }
  }

  function validateEmail(email) {
    if (email== "" || email == null) {
      printError("emailErr", "Veuillez entrer votre email.");
      return false;
    } else {
      var regex = /^[a-zA-Z0-9]+@[a-z]+\.[a-zA-Z]{2,3}$/;
      if (!regex.test(email)) {
        printError("emailErr", "Veuillez entrer un email valide (example@gmail.com)");
        return false;
      } else {
        printError("emailErr", "");
        return true;
      }
    }
  }
  // phone
  function validatePhone(phone) {
    if (phone== "" || phone == null) {
      printError("phoneErr", "Veuillez entrer votre numéro.");
      return false;
    } else {
      var regex =/^0[5-7][0-9]{8}$/;
      if (!regex.test(phone)) {
        printError("phoneErr", "Veuillez entrer un numéro valide (06-XX-XX-XX-XX");
        return false;
      } else {
        printError("phoneErr", "");
        return true;
      }
    }
  }
    // message
    function validateMessage(message) {
        if (message== "" || message == null) {
          printError("messageErr", "Veuillez entrer votre message.");
          return false;
        } else {
            printError("messageErr", "");
            return true;
          
        }
      }



  function initValidation() {
    var nameInput = document.getElementById("name");
  
    nameInput.addEventListener("blur", function () {
      validateName(nameInput.value);
    });
  }

  function initValidation2() {
    var emailInput = document.getElementById("email");
  
    emailInput.addEventListener("blur", function () {
      validateEmail(emailInput.value);
    });
  }
  function initValidation3() {
    var phoneInput = document.getElementById("phone");
  
    phoneInput.addEventListener("blur", function () {
      validatePhone(phoneInput.value);
    });
  }
  function initValidation4() {
    var messageInput = document.getElementById("message");
  
    messageInput.addEventListener("blur", function () {
      validateMessage(messageInput.value);
    });
  }
  
  function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    var nameErr = validateName(name);
    var emailErr = validateEmail(email);
    var phoneErr = validatePhone(phone);
    var messageErr = validateMessage(message);

  
    // Add similar validation logic for other fields (lastname, email, number, cin)
  
    if (!nameErr || !emailErr || !phoneErr || !messageErr) {
      return false; // Prevent form submission
    }
    return true;
  }
  
  initValidation();
  initValidation2();
  initValidation3();
  initValidation4();
  