const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

const nav = document.querySelector(".nav");
nav.addEventListener("click", (e) => {
  document.body.classList.toggle("menu-open");
});

const img = document.querySelectorAll(".img");
console.log(img);
const project = document.querySelectorAll(".menu-item__project li");
const imgArray = [0];
project.forEach((project) => {
  project.addEventListener("mouseenter", () => {
    if (project.dataset.project - 1 != imgArray[0]) {
      console.log(project.dataset.project);
      const currentImage = project.dataset.project - 1;
      img[currentImage].classList.remove("hidden");
      img[imgArray[0]].classList.add("hidden");
      imgArray[0] = currentImage;
    } else {
    }
  });
});
