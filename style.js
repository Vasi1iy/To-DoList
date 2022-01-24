const todoItems = document.getElementsByClassName("todoItems")[0];
const input = document.getElementById("input");
const buttonAdd = document.getElementById("button");
const buttonDelite = document.getElementById("delite");

input.addEventListener("keydown", function(event){
    if(event.key === "Enter")
        addItem();
})

function addItem(){
    let divParent = document.createElement("div");
    let divChild = document.createElement("div");
    let delIcon = document.createElement("i");

    divParent.className = "item";
    divParent.innerHTML = '<div>' + input.value + '</div>';

    delIcon.className = "fas fa-trash-alt"; 
    delIcon.style.color = "whitesmoke";
    delIcon.addEventListener("click", function(){
        divParent.remove();
    })

    divChild.appendChild(delIcon);

    divParent.appendChild(divChild);

    todoItems.appendChild(divParent);

    input.value = " ";
};