const items = [
  "img/01.jpg",
  "img/02.jpg",
  "img/03.jpg",
  "img/04.jpg",
  "img/05.jpg",
];

const title = ["Svezia", "Svizzera", "Gran Bretagna", "Germania", "Paradise"];

const text = [
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
  "Lorem ipsum",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
  "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
];

const selected = document.querySelector(".selected");
const thumbnails = document.querySelector(".thumbnails");
const btnPrevious = document.querySelector(".previous");
const btnNext = document.querySelector(".next");
const activeClass = "active";

let selectedIndex = 0;

for (let i = 0; i < items.length; i++) {
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  let thumbnailContainer = document.createElement("div");
  thumbnailContainer.classList.add("thumbnail-container");
  let img = document.createElement("img");
  let thumbnail = document.createElement("img");
  img.src = items[i];
  thumbnail.src = items[i];

  if (i === selectedIndex) {
    imgContainer.classList.add(activeClass);
    thumbnailContainer.classList.add(activeClass);
  }

  let section = document.createElement("section");
  section.classList.add("image-description");
  let h2 = document.createElement("h2");
  h2.textContent = title[i];
  let p = document.createElement("p");
  p.textContent = text[i];

  section.append(h2);
  section.append(p);
  imgContainer.append(section);
  imgContainer.append(img);

  thumbnailContainer.append(thumbnail);
  selected.append(imgContainer);
  thumbnails.append(thumbnailContainer);
}

btnPrevious.addEventListener("click", function () {
  selectedIndex--;
  if (selectedIndex === -1) {
    selectedIndex = items.length - 1;
  }
  const active = document.querySelectorAll(`.${activeClass}`);
  active.forEach((el) => el.classList.remove(activeClass));

  const imgs = document.querySelectorAll(".img-container");
  const thumbnailContainers = document.querySelectorAll(".thumbnail-container");

  imgs[selectedIndex].classList.add(activeClass);
  thumbnailContainers[selectedIndex].classList.add(activeClass);
});

btnNext.addEventListener("click", function () {
  selectedIndex++;

  if (selectedIndex === items.length) {
    selectedIndex = 0;
  }

  const active = document.querySelectorAll(`.${activeClass}`);
  active.forEach((el) => el.classList.remove(activeClass));

  const imgs = document.querySelectorAll(".img-container");
  const thumbnailContainers = document.querySelectorAll(".thumbnail-container");

  imgs[selectedIndex].classList.add(activeClass);
  thumbnailContainers[selectedIndex].classList.add(activeClass);
});
