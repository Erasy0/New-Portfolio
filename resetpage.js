window.addEventListener("pageshow", function() {
  document.querySelectorAll("img, .Icon-container").forEach(el => {
    el.style.transform = "scale(1)"; // reset to original size
  });
});