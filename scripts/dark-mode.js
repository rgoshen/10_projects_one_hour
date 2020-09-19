const toggleNavBar = document.getElementById("nav-bar");

toggleNavBar.addEventListener("click", (e) => {
  if (e.target.id === "navbarNav") {
    document.body.classList.toggle("dark", e.target.checked);
  }
});
