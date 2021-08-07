feather.replace();
currentOption = 'notes'
document.getElementById(currentOption).classList.add("selected-option");

function changeOption(id) {
    console.log(id);
    document.getElementById(currentOption).classList.remove("selected-option");
    currentOption = id;
    document.getElementById(id).classList.add("selected-option")
}