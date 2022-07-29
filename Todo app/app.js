showNotes();

// if user adds a note , add it to the localstorage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function(e) {

    let addTxt = document.getElementById("addText");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
       obj = [];
    } else {
        obj = JSON.parse(notes);
    }
   obj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(obj));
    addTxt.value = "";
    console.log(obj);
    showNotes();

})
//function to show note
function showNotes(){
    let note = localStorage.getItem("notes");
    console.log(note);
    if (note == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(note);
    }
    let html ="";
    notesObj.forEach(function(element,index) {
        html += `
        <div class="card my-2 mx-2 noteCard" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index +1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deletenote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>
    `
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML=html;
    }else{
        notesElm.innerHTML=`Nothing to show !`;
    }
}
 

//  function to delete note

function deletenote(data) {
    let note = localStorage.getItem("notes");
    if (note == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(note);
    }
    notesObj.splice(data,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById('searchtxt');
search.addEventListener('input', () => {

    let searchval = search.value.toLowerCase();
    let notescards = document.getElementsByClassName('noteCard');
    Array.from(notescards).forEach((element) =>{
        let cardtxt = element.getElementsByTagName("p")[0].innerHTML;
        if(cardtxt.includes(searchval)){
        element.style.display ="block";
    }else{
            element.style.display ="none";
        }
    })

    // console.log(`searchval`);
});
   
