
//Delete button functionality not yet scripted

//************************************************************
//***********************FUNCTIONS****************************
//************************************************************

// Creates Delete Button

function createDeleteButton(){
    let delButton = document.createElement("button");
    delButton.setAttribute("class", "delete btn btn-secondary btn-sm");
    delButton.innerHTML = "Delete";
    return delButton;
}



// Puts text and delete button into an "li" tag
function createListItem (text1){
    let li1 = document.createElement("li");
    let text = document.createTextNode (text1 + ' ');
    li1.appendChild(text);
    li1.appendChild(createDeleteButton());
    return li1;
}



// Appends "li" tag into the "ul" list
function appendToList(text1) {
    let ul1 = document.getElementById("ul1");
    ul1.appendChild(createListItem(text1));
    document.getElementById("text1").value = '';
}


//Adds user's inputted text to the list on mouse click
function addToListMouse() {
    let text1 = document.getElementById("text1").value;
    if (text1.length > 0) {
        appendToList(text1);
    
    }
}

//Adds user's inputted text to the list on keyboard press of "Enter"
function addToListKey(event) {
    let text1 = document.getElementById("text1").value;
    if (text1.length > 0 && event.keyCode === 13) {
        appendToList(text1);
    }
}
//************************************************************
//***********************END FUNCTIONS************************
//************************************************************

//Creates event listeners for user click of "submit" button or 
//pressing "Enter"
document.getElementById("button1").addEventListener("click", addToListMouse);
document.getElementById("text1").addEventListener("keypress", addToListKey);
