// JavaScript for simple animations or form submission handling
document.addEventListener("DOMContentLoaded", () => {
    const ctaButton = document.querySelector(".cta-button");
    ctaButton.addEventListener("click", () => {
        alert("Thank you for your interest! We're excited to have you onboard.");
    });

    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Thank you for reaching out. We will get back to you shortly!");
        contactForm.reset();
    });
});
