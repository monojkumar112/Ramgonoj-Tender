document.querySelector(".header-menu").addEventListener("click", function () {
  document.querySelector(".sidebar").classList.add("active");
});

document
  .querySelector(".sidebar-close-menu")
  .addEventListener("click", function () {
    document.querySelector(".sidebar").classList.remove("active");
  });

// Get the table
var table = document.querySelector(".table");

// Get the rows
var rows = table.querySelectorAll("tbody tr");

// Number of rows per page
var rowsPerPage = 10;

// Calculate total number of pages
var totalPages = Math.ceil(rows.length / rowsPerPage);

// Current page
var currentPage = 1;

// Function to display the current page
function displayPage(page) {
  var startIndex = (page - 1) * rowsPerPage;
  var endIndex = startIndex + rowsPerPage;

  // Hide all rows
  rows.forEach(function (row) {
    row.style.display = "none";
  });

  // Display rows for the current page
  for (var i = startIndex; i < endIndex && i < rows.length; i++) {
    rows[i].style.display = "";
  }

  // Update page numbers
  document.querySelector(".page-numbers").textContent =
    currentPage + " / " + totalPages;

  // Disable previous button if on the first page
  document.querySelector(".prev").disabled = currentPage === 1;

  // Disable next button if on the last page
  document.querySelector(".next").disabled = currentPage === totalPages;
}

// Initial display
displayPage(currentPage);

// Event listener for previous button
document.querySelector(".prev").addEventListener("click", function () {
  if (currentPage > 1) {
    currentPage--;
    displayPage(currentPage);
  }
});

// Event listener for next button
document.querySelector(".next").addEventListener("click", function () {
  if (currentPage < totalPages) {
    currentPage++;
    displayPage(currentPage);
  }
});



document.addEventListener("DOMContentLoaded", function () {
  const sidebarLinks = document.querySelectorAll(".sidebar-link a");

  // Function to set active link
  const setActiveLink = () => {
    const currentPath = window.location.pathname;
    sidebarLinks.forEach((link) => {
      const linkPath = link.getAttribute("href");
      if (currentPath === linkPath) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  };

  // Set active link when the page loads
  setActiveLink();

  // Add click event listener to each sidebar link
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Remove active class from all links
      sidebarLinks.forEach((link) => {
        link.classList.remove("active");
      });

      // Add active class to the clicked link
      link.classList.add("active");
    });
  });
});