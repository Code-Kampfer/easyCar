function printError(Id, Msg) {
  document.getElementById(Id).innerHTML = Msg;
}

function validateName(name) {
  if (name == "" || name == null) {
    printError("nameERR", "Please enter your name");
    document.getElementById('nameBorder').classList.add('border-red-600');
    return false;
  } else {
    var regex = /^[a-zA-Z]+$/;
    if (!regex.test(name)) {
      printError("nameERR", "Please enter a valid name");
      document.getElementById('nameBorder').classList.add('border-red-600');
      return false;
    } else {
      printError("nameERR", "");
      document.getElementById('nameBorder').classList.remove('border-red-600');
      return true;
    }
  }
}

function validateCardnumber(cardnumber) {
    if (cardnumber == "" || cardnumber == null) {
      printError("cardnumberERR", "Please enter your card number");
      document.getElementById('cardnumberBorder').classList.add('border-red-600');
      return false;
    } else {
      var regex = /^[0-9]{16}$/;
      if (!regex.test(cardnumber)) {
        printError("cardnumberERR", "Please enter a valid card number");
        document.getElementById('cardnumberBorder').classList.add('border-red-600');
        return false;
      } else {
        printError("cardnumberERR", "");
        document.getElementById('cardnumberBorder').classList.remove('border-red-600');
        return true;
      }
    }
  } 

  function validateMonth(month) {
    if (month == "" || month == null) {
      printError("cardexpERR", "Please enter your card's expiration month");
      document.getElementById('cardexpBorder').classList.add('border-red-600');
      return false;
    } else {
        printError("cardexpERR", "");
        document.getElementById('cardexpBorder').classList.remove('border-red-600');
        return true;
      
    }
  } 

  function validateYear(year) {
    if (year == "" || year == null) {
      printError("cardexpERR", "Please enter your card's expiration year");
      document.getElementById('cardexpBorder').classList.add('border-red-600');
      return false;
    } else {
        printError("cardexpERR", "");
        document.getElementById('cardexpBorder').classList.remove('border-red-600');
        return true;
    }
  } 

  function validateSecurity(security) {
    if (security == "" || security == null) {
      printError("securityERR", "Please enter your card security code");
      document.getElementById('securityBorder').classList.add('border-red-600');
      return false;
    } else {
      var regex = /^\d{3,4}$/;
      if (!regex.test(security)) {
        printError("securityERR", "Please enter a valid card security code");
        document.getElementById('securityBorder').classList.add('border-red-600');
        return false;
      } else {
        printError("securityERR", "");
        document.getElementById('securityBorder').classList.remove('border-red-600');
        return true;
      }
    }
  } 

  function validateCountry(country) {
    if (country == "" || country == null) {
      printError("countryERR", "Please enter your country");
      document.getElementById('countryBorder').classList.add('border-red-600');
      return false;
    } else {
        printError("countryERR", "");
        document.getElementById('countryBorder').classList.remove('border-red-600');
        return true;
    }
  } 

  function validateAdress(adress) {
    if (adress == "" || adress == null) {
      printError("adressERR", "Please enter your adress");
      document.getElementById('adressBorder').classList.add('border-red-600');
      return false;
    } else {
      var regex =/^[\w\d\s.,-]+$/;
      if (!regex.test(adress)) {
        printError("adressERR", "Please enter a valid adress");
        document.getElementById('adressBorder').classList.add('border-red-600');
        return false;
      } else {
        printError("adressERR", "");
        document.getElementById('adressBorder').classList.remove('border-red-600');
        return true;
      }
    }
  } 

  function validateCity(city) {
    if (city == "" || city == null) {
      printError("cityERR", "Please enter your city");
      document.getElementById('cityBorder').classList.add('border-red-600');
      return false;
    } else {
      var regex =/^[A-Za-z\s\-']+$/;
      if (!regex.test(city)) {
        printError("cityERR", "Please enter a valid city");
        document.getElementById('cityBorder').classList.add('border-red-600');
        return false;
      } else {
        printError("cityERR", "");
        document.getElementById('cityBorder').classList.remove('border-red-600');
        return true;
      }
    }
  } 

  function validateState(state) {
    if (state == "" || state == null) {
      printError("stateERR", "Please enter your state");
      document.getElementById('stateBorder').classList.add('border-red-600');
      return false;
    } else {
      var regex =/^[A-Za-z\s\-']+$/;
      if (!regex.test(state)) {
        printError("stateERR", "Please enter a valid state");
        document.getElementById('stateBorder').classList.add('border-red-600');
        return false;
      } else {
        printError("stateERR", "");
        document.getElementById('stateBorder').classList.remove('border-red-600');
        return true;
      }
    }
  } 

  function validateZip(zip) {
    if (zip == "" || zip == null) {
      printError("zipERR", "Please enter your zip");
      document.getElementById('zipBorder').classList.add('border-red-600');
      return false;
    } else {
      var regex =/^\d{5}$/;
      if (!regex.test(zip)) {
        printError("zipERR", "Please enter a valid zip (86150)");
        document.getElementById('zipBorder').classList.add('border-red-600');
        return false;
      } else {
        printError("zipERR", "");
        document.getElementById('zipBorder').classList.remove('border-red-600');
        return true;
      }
    }
  } 

  function validateEmail(email) {
    if (state == "" || state == null) {
      printError("emailERR", "Please enter your state");
      document.getElementById('emailBorder').classList.add('border-red-600');
      return false;
    } else {
      var regex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
      if (!regex.test(state)) {
        printError("emailERR", "Please enter a valid email (example@exmpl.net");
        document.getElementById('emailBorder').classList.add('border-red-600');
        return false;
      } else {
        printError("emailERR", "");
        document.getElementById('emailBorder').classList.remove('border-red-600');
        return true;
      }
    }
  } 

  function validatePhone(phone) {
    if (phone == "" || phone == null) {
      printError("phoneERR", "Please enter your phone number");
      document.getElementById('phoneBorder').classList.add('border-red-600');
      return false;
    } else {
      var regex =/^[0][5-7][0-9]{6}$/;
      if (!regex.test(phone)) {
        printError("phoneERR", "Please enter a valid phone number (06-XX-XX-XX-XX)");
        document.getElementById('phoneBorder').classList.add('border-red-600');
        return false;
      } else {
        printError("phoneERR", "");
        document.getElementById('phoneBorder').classList.remove('border-red-600');
        return true;
      }
    }
  } 

function initValidation() {
  var nameInput = document.getElementById("name");

  nameInput.addEventListener("blur", function () {
    validateName(nameInput.value);
  });
}

function initValidation2() {
  var cardnumberInput = document.getElementById("cardnumber");

  cardnumberInput.addEventListener("blur", function () {
    validateCardnumber(cardnumberInput.value);
  });
}
function initValidation3() {
  var monthInput = document.getElementById("month");

  monthInput.addEventListener("blur", function () {
    validateMonth(monthInput.value);
  });
}
function initValidation4() {
  var yearInput = document.getElementById("year");

  yearInput.addEventListener("blur", function () {
    validateYear(yearInput.value);
  });
}
function initValidation5() {
  var securityInput = document.getElementById("security");

  securityInput.addEventListener("blur", function () {
    validateSecurity(securityInput.value);
  });
}
function initValidation6() {
  var countryInput = document.getElementById("country");

  countryInput.addEventListener("blur", function () {
    validateCountry(countryInput.value);
  });
}
function initValidation7() {
  var adressInput = document.getElementById("adress");

  adressInput.addEventListener("blur", function () {
    validateAdress(adressInput.value);
  });
}
function initValidation8() {
  var cityInput = document.getElementById("city");

  cityInput.addEventListener("blur", function () {
    validateCity(cityInput.value);
  });
}
function initValidation9() {
  var stateInput = document.getElementById("state");

  stateInput.addEventListener("blur", function () {
    validateState(stateInput.value);
  });
}
function initValidation10() {
  var zipInput = document.getElementById("zip");

  zipInput.addEventListener("blur", function () {
    validateZip(zipInput.value);
  });
}
function initValidation11() {
  var emailInput = document.getElementById("email");

  emailInput.addEventListener("blur", function () {
    validateEmail(emailInput.value);
  });
}
function initValidation12() {
  var phoneInput = document.getElementById("phone");

  phoneInput.addEventListener("blur", function () {
    validatePhone(phoneInput.value);
  });
}

function validateForm() {
  var name = document.getElementById("name").value;
  var cardnumber = document.getElementById("cardnumber").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;
  var security = document.getElementById("security").value;
  var country = document.getElementById("country").value;
  var adress = document.getElementById("adress").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var zip = document.getElementById("zip").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  var nameErr = validateName(name);
  var cardnumberErr = validateCardnumber(cardnumber);
  var monthErr = validateMonth(month);
  var yearErr = validateYear(year);
  var securityErr = validateSecurity(security);
  var countryErr = validateCountry(country);
  var adressErr = validateAdress(adress);
  var cityErr = validateCity(city);
  var stateErr = validateState(state);   
  var zipErr = validateZip(zip);
  var emailErr = validateEmail(email);
  var phoneErr = validatePhone(phone);

  // Add similar validation logic for other fields (lastname, email, number, cin)

//   if (!nameErr || !cardnumberErr) {
//     return false; // Prevent form submission
//   }
//   return true;

  if (
    !nameErr ||
    !cardnumberErr ||
    !monthErr ||
    !yearErr ||
    !securityErr ||
    !countryErr ||
    !adressErr ||
    !cityErr ||
    !stateErr ||
    !zipErr ||
    !emailErr ||
    !phoneErr
  ) {
    return false; // Prevent form submission
  }
  return true;
}

initValidation();
initValidation2();
initValidation3();
initValidation4();
initValidation5();
initValidation6();
initValidation7();
initValidation8();
initValidation9();
initValidation10();
initValidation11();
initValidation12();

