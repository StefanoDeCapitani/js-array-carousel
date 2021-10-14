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
let selectedIndex = 2;

for (let i = 0; i < items.length; i++) {
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  let img = document.createElement("img");
  let thumbnail = document.createElement("img");
  img.src = items[i];
  thumbnail.src = items[i];
  if (i === selectedIndex) {
    imgContainer.classList.add("active");
    thumbnail.classList.add("active");
  }
  let section = document.createElement("section");
  section.classList.add("image-description");
  let h2 = document.createElement("h2");
  h2.textContent = title[i];
  let p = document.createElement("p");
  p.textContent = text[i];
  section.append(h2);
  section.append(p);
  imgContainer.append(img);
  imgContainer.append(section);
  selected.append(imgContainer);
  thumbnails.append(thumbnail);
}
