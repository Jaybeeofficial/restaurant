function loadPage(page) {
      fetch(page)
        .then(res => {
          if (!res.ok) throw new Error("Failed to load " + page);
          return res.text();
        })
        .then(html => {
          document.getElementById("content").innerHTML = html;
          window.scrollTo(0, 0); // Optional: scroll to top after loading
        })
        .catch(err => {
          document.getElementById("content").innerHTML = "<div class='alert alert-danger'>Error loading content.</div>";
          console.error(err);
        });
    }


ScrollReveal().reveal('.scroll-reveal', {
    duration: 1000,         // Animation duration: 1s
    delay: 500,            // Delay before animation starts: 1s
    distance: '150px',      // Increased distance: farther movement
    origin: 'bottom',       // Animate from bottom
    easing: 'ease-in-out',
    interval: 100,          // Delay between items (only applies to multiple)
    reset: false     // Do not reset animation on scroll back
  });

  document.getElementById("backToTopBtn").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});