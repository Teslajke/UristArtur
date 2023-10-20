// Get all the navlinks and the mobile navbar toggle icon
const navLinks = document.querySelectorAll("#navbar ul li a");
const mobileNavToggle = document.querySelector(".mobile-nav-toggle");

// Add an event listener to each navlink
navLinks.forEach((navlink) => {
  navlink.addEventListener("click", (event) => {
    // Prevent the default click behavior
    event.preventDefault();
    // Check if the mobile navbar toggle icon is displayed
    if (window.getComputedStyle(mobileNavToggle).display !== "none") {
      // Hide the mobile navbar
      mobileNavToggle.click();
    }
    // Get the target section ID from the href attribute
    const targetSectionID = navlink.getAttribute("href");
    // Scroll to the target section
    document
      .querySelector(targetSectionID)
      .scrollIntoView({ behavior: "smooth" });
  });
});
