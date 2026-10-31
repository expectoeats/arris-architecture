// =====================================
// LOAD COMMON FOOTER
// =====================================

document.addEventListener("DOMContentLoaded", function () {
  const footerPlaceholder = document.getElementById("footer-placeholder");

  if (footerPlaceholder) {
    fetch("footer.html")
      .then(response => {
        if (!response.ok) {
          throw new Error("Footer loading failed");
        }
        return response.text();
      })
      .then(data => {
        footerPlaceholder.innerHTML = data;

        // Initialize Lucide icons inside footer
        if (window.lucide) {
          lucide.createIcons();
        }
      })
      .catch(error => {
        console.error("Footer Error:", error);
      });
  }
});