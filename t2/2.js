const ul = document.getElementById('target');

const line1 = document.createElement("li")
const line2 = document.createElement("li");
const line3 = document.createElement("li");

line1.innerText = "First item";
line2.innerText = "Second item";
line3.innerText = "Third item";

ul.appendChild(line1);
ul.appendChild(line2);
ul.appendChild(line3);


ul.setAttribute('class', 'my-item');