const form = document.querySelector('form');
const smallError = form.querySelector("small.error");
const smallDone = form.querySelector("small.valide");
const input = form.querySelector("input");
const errorIcon = form.querySelector(".error-icon")


let done = document.createElement("p");


form.addEventListener("submit", e => {
    e.preventDefault();
    const email = input.value;
    if (validateEmail(email)) {
        smallDone.style.display = 'block';
        smallError.style.display = 'none';
        errorIcon.style.display = 'none';
        input.style.border='hsl(0, 36%, 70%) 0.1px solid';

    } else {
        smallDone.style.display = 'none';
        smallError.style.display = 'block';
        errorIcon.style.display = 'block';
        input.style.border='hsl(0, 93%, 68%) 2px solid';

    }
})


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}