
const notesContainer = document.querySelector(".notes-container");
const addbtn = document.querySelector(".add");

function shownotes() {
    notesContainer.innerHTML = localStorage.getItem("notes")
}

shownotes()

function storage(){
    localStorage.setItem("notes", notesContainer.innerHTML)
}

addbtn.addEventListener("click", () => {
    let p = document.createElement("p");
    p.classList.add("input");
    p.setAttribute("contenteditable", "true");
    let img = document.createElement("img");
    img.src = "assets/delet.png";
    img.classList.add("delete")
    notesContainer.appendChild(p).appendChild(img)
    storage()
})

notesContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove()
        storage()
    }
    else if (e.target.tagName === "P"){
        notes = document.querySelectorAll(".input")
        notes.forEach(nots => {
            nots.onkeyup = function () {
                storage()
            }
        })
    }
})


document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})