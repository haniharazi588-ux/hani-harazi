document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");

  form.addEventListener("submit", function (e) {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || !email.includes("@")) {
      alert("Please enter a valid email.");
      e.preventDefault();
      return;
    }

    if (password === "" || password.length < 6) {
      alert("كلمة السر لازم ان تكون اكثر من 6 خانات");
      e.preventDefault();
      return;
    }

    alert("Form submitted successfully ✅");
  });
});