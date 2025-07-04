document.addEventListener("DOMContentLoaded", () => {
  // Formulaire
  const form = document.getElementById("formulaireContact");
  const message = document.getElementById("messageEnvoye");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    message.textContent = "Merci pour votre message !";
  });

  // Mode sombre
  const btn = document.getElementById("themeToggle");
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btn.textContent = document.body.classList.contains("dark") ? "Mode clair" : "Mode sombre";
  });
});
