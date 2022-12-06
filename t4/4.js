'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const select = document.getElementById("target");

for (let i = 0; i < students.length; i++) {
    var option = document.createElement("option");

    option.innerText = students[i].name;
    option.value = students[i].id;

    select.appendChild(option);
}

