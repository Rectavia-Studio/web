// Prevent "Confirm Form Resubmission" dialog
if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}

// Event listener to the form submission
document
  .getElementById("sheetdb-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Change button to the loading mode
    const button = document.getElementById("submit-button");
    button.disabled = true;
    button.innerHTML =
      '<img class="inline mr-3 w-5 h-5 align-text-top text-white animate-spin" src="./public/icons/loading.svg">Submitting...';

    // Getting the result div to show the result message to the user
    const resultDiv = document.getElementById("result");
    resultDiv.innerText = "";

    // Perform an AJAX request to submit the form
    var xhr = new XMLHttpRequest();
    xhr.open("POST", this.action);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 201) {
          // Successful response
          var response = xhr.responseText;
          button.disabled = false;
          button.innerText = "Contact Us";
          resultDiv.innerText =
            "Form submission was successful. Thank you. We will get back to you within 24 hours";
          console.log(response);
          document.getElementById("sheetdb-form").reset();
          // Form submission was successful. Thank you. We will get back to you within 24 hours
        } else {
          // Error response
          button.disabled = false;
          button.innerText = "Contact Us";
          console.log("Error: Something went wrong. Please, try again");
        }
      }
    };
    xhr.send(new FormData(this));
  });
