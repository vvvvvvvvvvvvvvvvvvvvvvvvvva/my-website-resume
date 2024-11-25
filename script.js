// A simple example of adding interactivity using JavaScript
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      alert("Navigating to " + e.target.textContent);
    });
  });
});
