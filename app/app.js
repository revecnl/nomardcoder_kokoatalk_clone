const loginform = document.querySelector("#login-form")
const loginput = document.querySelector("#login-form input")

function onloginsumit(event){
    event.preventDefault();
    const username = loginput.value;
    console.log(username)
    location="friends.html"
}

loginform.addEventListener("submit", onloginsumit);