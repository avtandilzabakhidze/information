const navbarToggler = document.querySelector('.navbar-toggler');
const navbarBrand = document.getElementById('navbarBrand');

// Function to toggle the visibility of #navbarBrand
navbarToggler.addEventListener('click', () => {
  const screenWidth = window.innerWidth;
  
  // Check if we are on mobile screen
  if (screenWidth < 768) {
    // Toggle the display on mobile screens
    navbarBrand.classList.toggle('d-block');  // Show or hide using d-block
    navbarBrand.classList.toggle('d-none');   // Ensure it's hidden on tablet/PC screens
  }
});
