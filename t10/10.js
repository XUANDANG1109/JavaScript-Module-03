document.addEventListener("submit", (e) => {
    e.preventDefault();

    const fname = document.querySelector("input[name='firstname']").value;
    const lname = document.querySelector("input[name='lastname']").value;
    
    document.getElementById("target").innerHTML = `Your name is ${fname} ${lname}`;
});
