// script.js — small interactive helpers
// Keep JS minimal for accessibility and progressive enhancement.

/* Set current year in footer */
document.addEventListener("DOMContentLoaded", function () {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Smooth scroll for internal links (works in modern browsers)
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener("click", function (e) {
            // if link points to the same page
            const href = anchor.getAttribute("href");
            if (href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                    // Collapse mobile navbar if open (Bootstrap-specific)
                    const navbarToggler = document.querySelector(".navbar-toggler");
                    const navbarCollapse = document.querySelector(".navbar-collapse");
                    if (navbarCollapse && navbarCollapse.classList.contains("show") && navbarToggler) {
                        navbarToggler.click();
                    }
                }
            }
        });
    });

    // Simple handler for form submit to show a message (Formspree will still handle real submission)
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            // allow the actual submit to happen (Formspree), but show a small visual confirmation
            // Add a tiny disabled animation to the submit button
            const btn = contactForm.querySelector('button[type="submit"]');
            if (btn) {
                btn.disabled = true;
                const original = btn.textContent;
                btn.textContent = "Sending...";
                setTimeout(() => {
                    btn.disabled = false;
                    btn.textContent = original;
                }, 1500);
            }
        });
    }
});
