const menuEl = document.querySelector("#menu");
const navEl = document.querySelector("nav");

menuEl.addEventListener("click", () => {
  if (navEl.classList.contains("hidden")) {
    navEl.classList.remove("hidden");
  } else {
    navEl.classList.add("hidden");
  }
});
