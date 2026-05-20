function adaptDetails() {
  const details = document.querySelectorAll(".details");
  const isTablet = window.matchMedia("(min-width: 768px)").matches;

  details.forEach((detail) => {
    const summary = detail.querySelector(".card__title");
    if (isTablet) {
      detail.setAttribute("open", "");
      detail.classList.add("always-open");
      summary.setAttribute("tabindex", "-1");
    } else {
      detail.removeAttribute("open");
      detail.classList.remove("always-open");
      summary.removeAttribute("tabindex");
    }
  });
}

window.addEventListener("load", adaptDetails);
window.addEventListener("resize", adaptDetails);
