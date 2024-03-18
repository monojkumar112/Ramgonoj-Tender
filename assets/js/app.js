document.addEventListener("DOMContentLoaded", function () {
  var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    // If you have navigation buttons
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    },
  });
});

var telInput = $("#phone"),
  errorMsg = $("#error-msg"),
  validMsg = $("#valid-msg");

// initialise plugin
telInput.intlTelInput({
  allowExtensions: true,
  formatOnDisplay: true,
  autoFormat: true,
  autoHideDialCode: true,
  autoPlaceholder: true,
  defaultCountry: "auto",
  ipinfoToken: "yolo",

  nationalMode: false,
  numberType: "MOBILE",
  //onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
  preferredCountries: ["sa", "ae", "qa", "om", "bh", "kw", "ma"],
  preventInvalidNumbers: true,
  separateDialCode: true,
  initialCountry: "auto",
  geoIpLookup: function (callback) {
    $.get("http://ipinfo.io", function () {}, "jsonp").always(function (resp) {
      var countryCode = resp && resp.country ? resp.country : "";
      callback(countryCode);
    });
  },
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.9/js/utils.js",
});

var reset = function () {
  telInput.removeClass("error");
  errorMsg.addClass("hide");
  validMsg.addClass("hide");
};

// on blur: validate
telInput.blur(function () {
  reset();
  if ($.trim(telInput.val())) {
    if (telInput.intlTelInput("isValidNumber")) {
      validMsg.removeClass("hide");
    } else {
      telInput.addClass("error");
      errorMsg.removeClass("hide");
    }
  }
});

// on keyup / change flag: reset
telInput.on("keyup change", reset);



function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var togglePassword = document.querySelector(".toggle-password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.style.backgroundImage = "url('assets/img/eye-icon.png')";
  } else {
    passwordInput.type = "password";
    togglePassword.style.backgroundImage = "url('assets/img/eye-close.png')";
  }
}


function toggleConfirmPasswordVisibility() {
  var confirmPasswordInput = document.getElementById("confirm-password");
  var toggleConfirmPassword = document.querySelector(".toggle-confirm-password");

  if (confirmPasswordInput.type === "password") {
    confirmPasswordInput.type = "text";
    toggleConfirmPassword.style.backgroundImage = "url('assets/img/eye-icon.png')";
  } else {
    confirmPasswordInput.type = "password";
    toggleConfirmPassword.style.backgroundImage = "url('assets/img/eye-close.png')";
  }
}
