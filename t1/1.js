const target = document.getElementById('target');

const li =
            `<li>First item</li>
            <li>Second item</li>
            <li>Third item</li>`;

target.innerHTML = li;
target.setAttribute('class', 'my-list');