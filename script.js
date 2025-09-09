// Simple interactivity: Smooth scroll to sections when clicked (optional future feature)

document.querySelectorAll("a[href^='#']").forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({

      behavior: "smooth"

    });

  });

});

// Example popup for contact info

document.addEventListener("DOMContentLoaded", () => {

  const emailLink = document.querySelector("a[href^='mailto']");

  emailLink.addEventListener("click", () => {

    alert("Opening email client to contact Healthy Eats!");

  });

});