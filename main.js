let currentOption = 'notes'
let userDetails = {
    name: 'Iron Man',
    imageIcon: './images/iron_man.png'
}

function initApp() {
    feather.replace();
    document.getElementById(currentOption).classList.add("selected-option");
    let profile = document.getElementById("profile");
    let name = document.getElementById("name");
    name.innerText = userDetails.name;
    profile.src = userDetails.imageIcon;
    profile.onmouseover = () => {name.style.display = 'block'};
    profile.onmouseout = () => {name.style.display = 'none'}
}

function changeOption(id) {
    console.log(id);
    document.getElementById(currentOption).classList.remove("selected-option");
    currentOption = id;
    document.getElementById(id).classList.add("selected-option")
}


initApp();