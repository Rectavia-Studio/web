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
          console.log(response);
          document.getElementById("sheetdb-form").reset(); //Clear the form fields
        } else {
          // Error response
          console.log(xhr.status);
          button.disabled = false;
          button.innerText = "Contact Us";
          console.log("Error: Something went wrong."); // Show a generic error message
        }
      }
    };
    xhr.send(new FormData(this));
  });
