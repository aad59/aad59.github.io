document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll('[include-html]');
  elements.forEach(async el => {
    const file = el.getAttribute('include-html');
    try {
      const response = await fetch(file);
      const text = await response.text();
      el.innerHTML = text;
    } catch (e) {
      el.innerHTML = "Component not found.";
    }
  });
});