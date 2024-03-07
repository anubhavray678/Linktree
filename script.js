let prevScrollpos = window.scrollY || window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.scrollY || window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-85px";
  }
  prevScrollpos = currentScrollPos;
};

document.getElementById("iconLink").addEventListener("click", function (event) {
  event.preventDefault(); // Prevents the default link behavior

  // Generate the link dynamically
  let link = document.createElement("a");
  link.href = "https://justkills.in"; // Replace with your desired URL
  link.target = "_blank"; // Opens the link in a new tab
  document.body.appendChild(link);

  // Simulate click on the dynamically generated link
  link.click();
});

// email-js

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the user's input from the form
    let formData = {
      name: this.name.value,
      email: this.email.value,
      message: this.message.value,
    };

    // Send the email
    emailjs.send("service_et75iw9", "template_ngcbjol", formData).then(
      function (response) {
        alert("Your message has been sent successfully!");
        // Clear the form fields after successful submission
        document.getElementById("contactForm").reset();
      },
      function (error) {
        console.error("Failed to send email. Error:", error);
        alert("Oops! Something went wrong. Please try again later.");
      }
    );
  });
