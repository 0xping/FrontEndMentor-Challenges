const small = document.querySelector('.contactus .container div small ');
const form = document.querySelector('form');

form.addEventListener("submit", e => {
    e.preventDefault();
    const email = form.querySelector("input").value;
    console.log(email);

    if (!validateEmail(email)) small.style.display='block';
    else small.style.display='none';



})


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}