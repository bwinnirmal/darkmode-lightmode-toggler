let togglerDiv = document.getElementById("toggleButton");
let navbar = document.getElementById("nav");
let currentMode = document.getElementById("currentMode");

togglerDiv.addEventListener('click', function(){
    if(togglerDiv.className=="moon"){
        togglerDiv.className="sun";
        document.body.style.backgroundColor= "#141D26"
        document.body.style.color="#fff"
        navbar.classList.remove("navbar-dark");
        navbar.classList.remove("bg-primary")
        navbar.classList.add("navbar-dark");
        navbar.classList.add("bg-dark");
        currentMode.innerText="Dark"
    }
    else{
        togglerDiv.className="moon";
        document.body.style.backgroundColor="#fff";
        document.body.style.color="#000"
        navbar.classList.remove("bg-dark");
        navbar.classList.add("bg-primary");
        currentMode.innerText="Light"
    }
})
