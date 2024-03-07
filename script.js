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

//
