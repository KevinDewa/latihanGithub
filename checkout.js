document.addEventListener("DOMContentLoaded", function() {
  // Fungsi untuk memeriksa apakah input kosong atau tidak
  function validateForm() {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var errorFirstName = document.getElementById("errorFirstName");
    var errorLastName = document.getElementById("errorLastName");
    var username = document.getElementById("username");
    var errorUsername = document.getElementById("errorUsername");
    var address = document.getElementById("address");
    var errorAddress = document.getElementById("errorAddress");
    var city1 = document.getElementById("city1");
    var city2 = document.getElementById("city2");
    var kodepos = document.getElementById("kodepos");
    var errorCity1 = document.getElementById("errorCity1");
    var errorCity2 = document.getElementById("errorCity2");
    var errorKodepos = document.getElementById("errorKodepos");
    var cardHolderName = document.getElementById("cardHolderName");
    var creditCardNumber = document.getElementById("creditCardNumber");
    var errorCardHolderName = document.getElementById("errorCardHolderName");
    var errorCreditCardNumber = document.getElementById("errorCreditCardNumber");
    var expiryDate = document.getElementById("expiryDate");
    var cvvCode = document.getElementById("cvvCode");
    var errorExpiryDate = document.getElementById("errorExpiryDate");
    var errorCvvCode = document.getElementById("errorCvvCode");
    var emailInput = document.getElementById("email");
    var valid = true;

    if (firstName.value.trim() === "") { 
      errorFirstName.innerHTML = "Nama depan harus diisi";
      firstName.classList.add("is-invalid"); 
      valid = false;
    } else {
      errorFirstName.innerHTML = ""; 
      firstName.classList.remove("is-invalid"); 
    }

    if (lastName.value.trim() === "") { 
      errorLastName.innerHTML = "Nama belakang harus diisi";
      lastName.classList.add("is-invalid"); 
      valid = false;
    } else {
      errorLastName.innerHTML = ""; 
      lastName.classList.remove("is-invalid"); 
    }

    if (username.value.trim() === "") { 
      errorUsername.innerHTML = "Username harus diisi";
      username.classList.add("is-invalid"); 
      valid = false;
    } else {
      errorUsername.innerHTML = ""; 
      username.classList.remove("is-invalid"); 
    }

    if (address.value.trim() === "") { 
      errorAddress.innerHTML = "Alamat harus diisi";
      address.classList.add("is-invalid"); 
      valid = false;
    } else {
      errorAddress.innerHTML = ""; 
      address.classList.remove("is-invalid"); 
    }

    if (city1.value === "Pilih...") { 
      errorCity1.innerHTML = "Pilih kota/kabupaten yang sesuai";
      city1.classList.add("is-invalid"); 
      valid = false;
    } else {
      errorCity1.innerHTML = ""; 
      city1.classList.remove("is-invalid"); 
    }
  
    if (city2.value === "Pilih...") { 
      errorCity2.innerHTML = "Pilih provinsi yang sesuai";
      city2.classList.add("is-invalid"); 
      valid = false;
    } else {
      errorCity2.innerHTML = ""; 
      city2.classList.remove("is-invalid"); 
    }
  
    if (kodepos.value.trim() === "") { 
      errorKodepos.innerHTML = "Kode pos harus diisi";
      kodepos.classList.add("is-invalid"); 
      valid = false;
    } else {
      errorKodepos.innerHTML = ""; 
      kodepos.classList.remove("is-invalid"); 
    }

    if (cardHolderName.value.trim() === "") { 
      errorCardHolderName.innerHTML = "Nama lengkap harus sesuai";
      cardHolderName.classList.add("is-invalid"); 
      valid = false;
    } else {
      errorCardHolderName.innerHTML = ""; 
      cardHolderName.classList.remove("is-invalid"); 
    }
  
    if (creditCardNumber.value.trim() === "") { 
      errorCreditCardNumber.innerHTML = "Nomor kartu kredit harus diisi";
      creditCardNumber.classList.add("is-invalid"); 
      valid = false;
    } else {
      errorCreditCardNumber.innerHTML = ""; 
      creditCardNumber.classList.remove("is-invalid"); 
    }

    if (expiryDate.value.trim() === "") { 
      errorExpiryDate.innerHTML = "Masa kadaluarsa wajib diisi";
      expiryDate.classList.add("is-invalid"); 
      valid = false;
    } else {
      errorExpiryDate.innerHTML = ""; 
      expiryDate.classList.remove("is-invalid"); 
    }
  
    if (cvvCode.value.trim() === "") { 
      errorCvvCode.innerHTML = "Kode CVV wajib diisi";
      cvvCode.classList.add("is-invalid"); 
      valid = false;
    } else {
      errorCvvCode.innerHTML = ""; 
      cvvCode.classList.remove("is-invalid"); 
    }

    if (emailInput.value === "") {
      emailInput.classList.add("is-valid");
    } else {
      emailInput.classList.remove("is-valid");
    }
    return valid; 
  }

  document.getElementById("paymentButton").addEventListener("click", function() {
    var checkBoxLabel = document.getElementById("checkBoxLabel");
    var cityLabel = document.getElementById("cityLabel");
    var creditCardLabel = document.getElementById("creditCardLabel");
    var debitCardLabel = document.getElementById("debitCardLabel");
    var paypalLabel = document.getElementById("paypalLabel");
    
    checkBoxLabel.style.color = "green"; 
    cityLabel.style.color = "green"; 
    creditCardLabel.style.color = "green"; 
    debitCardLabel.style.color = "green"; 
    paypalLabel.style.color = "green"; 

    var checkBoxes = document.querySelectorAll(".form-check-input");
    checkBoxes.forEach(function(checkbox) {
      checkbox.style.borderColor = "green";
    });
  });  

  document.getElementById("paymentButton").addEventListener("click", function(event) {
    if (!validateForm()) {
      event.preventDefault(); 
    }
  });
});
