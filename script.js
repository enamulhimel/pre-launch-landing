// script.js
// Handle form submission status (if redirected to a success page by Netlify)
// You can also add client-side validation or animations here.

document.addEventListener('DOMContentLoaded', function () {
  // Check if we landed on a success page (Netlify does this by default)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('success')) {
    // Hide the form and show a thank you message
    const form = document.querySelector('.signup-form');
    const section = document.querySelector('.signup-section .container');
    if (form && section) {
      form.style.display = 'none';
      const thankYou = document.createElement('div');
      thankYou.className = 'success-message';
      thankYou.innerHTML =
        "<h3>🎉 You're on the list!</h3><p>We'll be in touch soon. Check your email for confirmation.</p>";
      thankYou.style.padding = '3rem 1rem';
      thankYou.style.textAlign = 'center';
      thankYou.style.background = '#e6f7e6';
      thankYou.style.borderRadius = '40px';
      section.appendChild(thankYou);
    }
  }
});
