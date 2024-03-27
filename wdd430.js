import data from "./json/fullstack/week12.json" assert { type: "json" };

//local ref
// import data from "/json/fullstack/week10.json" assert { type: "json" };

//create a new div element
const newDiv = document.createElement("div");
newDiv.classList.add("group");
//create a new h1 elemnt
const newH2 = document.createElement("h2");
newH2.textContent = "Canvas Week 12";
newDiv.appendChild(newH2);

data.forEach((link) => {
  // create a new a element
  const newLink = document.createElement("a");

  // and give it some content
  newLink.href = link.url;
  newLink.innerText = link.name;
  newLink.target = "_blank";
  newLink.classList.add("orange");

  newDiv.appendChild(newLink);
});

const main = document.querySelector("main");
main.appendChild(newDiv);
