// Petite interaction sur le formulaire de contact
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      formMessage.textContent = "Merci pour ton message, Emma te répondra bientôt !";
      formMessage.style.color = "#ae7ffb";
      form.reset();
    });
  }
});
