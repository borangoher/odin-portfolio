const scrollButton = document.getElementById("scroller");

scrollButton.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: window.innerHeight * 1.045,
    behavior: "smooth",
  });
});
