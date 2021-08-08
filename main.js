let currentOption = 'notes'
let userDetails = {
    name: 'Iron Man',
    imageIcon: './images/iron_man.png'
}
let labels = [];
let notes = [];

function initApp() {
    feather.replace();
    document.getElementById(currentOption).classList.add("selected-option");
    let user = getUserData();
    let profile = document.getElementById("profile");
    let name = document.getElementById("name");
    name.innerText = user.name;
    profile.src = user.imageIcon;
    profile.onmouseover = () => {name.style.display = 'block'};
    profile.onmouseout = () => {name.style.display = 'none'}
    //hover functions of edit
    let addLabel = document.getElementById('addLabel');
    let addColor = document.getElementById('addColor');
    let addImage = document.getElementById('addImage');
    addLabel.onmouseover = () => { document.getElementById('addLabelHover').style.display = 'block'}
    addColor.onmouseover = () => { document.getElementById('addColorHover').style.display = 'block'}
    addImage.onmouseover = () => { document.getElementById('addImageHover').style.display = 'block'}
    addLabel.onmouseout = () => { document.getElementById('addLabelHover').style.display = 'none'}
    addColor.onmouseout = () => { document.getElementById('addColorHover').style.display = 'none'}
    addImage.onmouseout = () => { document.getElementById('addImageHover').style.display = 'none'}
}

function changeOption(id) {
    let otherData = document.getElementById('other-data');
    let notesData = document.getElementById('notes-data');
    if(id != 'notes') {
        otherData.style.display = 'block';
        notesData.style.display = 'none';
    } else {
        otherData.style.display = 'none';
        notesData.style.display = 'block';
    }
    document.getElementById(currentOption).classList.remove("selected-option");
    currentOption = id;
    document.getElementById(id).classList.add("selected-option");
    
}

function getUserData() {
    // const response = fetch('http://api/loginRequest/', , {
    // method: 'POST',
    //     body: { username: 'user', password: 'password' }, 
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // });
    // const myJson = response.json();
    return userDetails;
}

function addNote() {
    document.getElementById('searchInput').style.display = 'none';
    document.getElementById('note-options').style.display = 'none';
    document.getElementById('card').style.display = 'block';
}

function clearSearch() {
    document.getElementById('search').value = '';
}

function addLabel() {
    document.getElementById('labelCard').style.display = 'block';
}

function addColor() {
    document.getElementById('colorCard').style.display = 'flex';
}

function labelChange() {
    document.getElementById('addLabelBtn').innerHTML = "Create '<strong>" + document.getElementById('labelNote').value + "</strong>'";
}

function closeLabelCard() {
    document.getElementById('labelCard').style.display = 'none';
    document.getElementById('labelNote').value = '';
    document.getElementById('addLabelBtn').innerHTML = 'Create';
}

function addLabelData() {
    let tag = document.createElement('p');
    tag.classList = ['tagLabel'];
    labels.push(document.getElementById('labelNote').value);
    tag.innerHTML = document.getElementById('labelNote').value;
    document.getElementById('tagDiv').append(tag);
    closeLabelCard();
}

function createNote() {
    note = {
        title: document.getElementById('cardTitle').value,
        data: document.getElementById('cardData').value,
        label: document.getElementById('tagDiv').innerHTML,
        id: Math.random()*100,
        color: document.getElementById('card').style.backgroundColor ? document.getElementById('card').style.backgroundColor : 'white'
    }
    notes.push(note);
    clearNoteCard();
    myNotes(notes);
}

function clearNoteCard() {
    document.getElementById('cardTitle').value = "";
    document.getElementById('cardData').value = ""
    document.getElementById('tagDiv').innerHTML = "";
    document.getElementById('card').style.display = 'none';
    document.getElementById('searchInput').style.display = 'block';
    document.getElementById('note-options').style.display = 'flex';
}

function changeColor(color) {
    document.getElementById('card').style.backgroundColor = color;
    document.getElementById('cardData').style.backgroundColor = color;
    document.getElementById('cardTitle').style.backgroundColor = color;
    document.getElementById('colorCard').style.display = 'none';
}

function myNotes(noteData) {
    document.getElementById('myNotes').innerHTML = ""
    noteData.map((note) => {
        let card = document.createElement('div');
        card.classList = ['myCard'];
        let cardHeadDiv = document.createElement('div');
        let title = document.createElement('p');
        title.innerHTML = note.title;
        let btnDiv = document.createElement('div');
        let deleteBtn = document.createElement('button');
        deleteBtn.classList = ['iconButton'];
        deleteBtn.innerHTML = 'Delete' + '<i data-feather="trash"></i>';
        deleteBtn.onclick = deleteNote;
        let editBtn = document.createElement('button');
        editBtn.classList = ['iconButton'];
        editBtn.innerHTML = 'edit' + '<i data-feather="edit"></i>';
        editBtn.onclick = editNote;
        btnDiv.append(editBtn);
        btnDiv.append(deleteBtn);
        cardHeadDiv.style.padding = '0.5em';
        cardHeadDiv.classList = ['spaceBtwn'];
        cardHeadDiv.append(title);
        cardHeadDiv.append(btnDiv);
        let data = document.createElement('textarea');
        data.style.padding = '0.5em';
        data.style.margin = '0';
        data.innerHTML = note.data;
        data.classList = ['data'];
        data.disabled = true;
        data.id = note.id;
        data.style.background = note.color;
        let label = document.createElement('div');
        label.classList = ['main'];
        label.innerHTML = note.label
        card.append(cardHeadDiv);
        card.append(data);
        card.append(label);
        card.style.background = note.color;
        document.getElementById('myNotes').append(card);
    });
}

function deleteNote() {
    notes = notes.filter(x => x.id != note.id);
    myNotes(notes);
}

function editNote() {
    document.getElementById(note.id).disabled = false;
}

function searchLabels() {
    let val = document.getElementById('searchLabel').value
    noteData = notes.filter(x => x.label.slice(20, x.label.length - 4).includes(val));
    myNotes(noteData)
}

initApp();