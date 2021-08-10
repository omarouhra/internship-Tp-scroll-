const links = document.querySelectorAll(".navigation a");
const sections = document.querySelectorAll('[id*="section"]');
const threshold = 0.3;

// links.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     link.parentNode
//       .querySelector(".active-link")
//       .classList.remove("active-link");
//     link.classList.add("active-link");
//   });
// });

const activate = (link) => {
  const id = link.getAttribute("id");
  const anchor = document.querySelector(`a[href="#${id}"]`);
  if (anchor === null) {
    return;
  }
  anchor.parentNode
    .querySelector(".active-link")
    .classList.remove("active-link");
  anchor.classList.add("active-link");
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > threshold) {
      activate(entry.target);
    }
  });
};

const observer = new IntersectionObserver(callback, {
    threshold:threshold
});

sections.forEach((section) => {
  observer.observe(section);
});
