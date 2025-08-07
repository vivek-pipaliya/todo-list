const addValue = document.getElementById("datainput"); // accessing input field
const addButton = document.getElementById("addbutton"); // accessing add button
const todo = document.getElementById("todolist"); // access the todolist id which stores the value/html

let array = []; //creating an empty array
let editIndex = false;

addButton.addEventListener("click", () => {  // function for adding value
    let getValue = addValue.value;  //storing input value into variable
    if (getValue) {
        if (editIndex !== false) {
            array[editIndex] = addValue.value;
            editIndex = false;
            addButton.innerHTML = "ADD"
        } else {
            array.push(getValue) // add value to array
        }
        addValue.value = ""; // after adding value clearing the input field
        repeate();
    }
})

let repeate = () => {
    todo.innerHTML = ""; // prevent from repeating value while adding new value
    for (let i = 0; i < array.length; i++) {
        let datainput = `<div class="form">
                            <label class="radio">${array[i]}
                                <input class="input edit-button" type="checkbox" id="${i}" name="radio">
                                <span class="checkmark"></span>
                            </label>
                            <div>
                                <button class="button" class="delete" id="del">
                                    <img class="delete-button" src="./images/delete.svg" id="${i}" alt="delete">
                                </button>
                            </div>
                        </div>
                    </span>
                </div>`
       todo.innerHTML += datainput; // adding value to container 
    }

    let stringValue = JSON.stringify(array);
    localStorage.setItem("array", stringValue);
    let valueBack = localStorage.getItem("array");
    array = JSON.parse(valueBack);

    const editButton = document.querySelectorAll('.edit-button');
    editButton.forEach((editBtn) => {
        editBtn.addEventListener("click", editValue);
    })

    const remove = document.querySelectorAll(".remove")
    remove.forEach((remove) => {
        remove.addEventListener("click", removeValue);
    })

    const deleteButton = document.querySelectorAll(".delete-button")
    deleteButton.forEach((deleteButton) => {
        deleteButton.addEventListener("click", deleteValue);
    })
}

const editValue = (event) => {
    console.log(event.target)
    const editInd = event.target.id;
    // console.log("ko", editInd);
    addValue.value = array[editInd];
    editIndex = editInd;
    addButton.innerHTML = "EDIT";
}

const removeValue = () => {
    array = [];  // when clear button is clicked it will empty the array
    todo.innerHTML = "";  // it will clear value from todo container
    let stringValue = JSON.stringify(array);
    localStorage.setItem("array", stringValue);
    let valueBack = localStorage.getItem("array");
    localStorage.removeItem(valueBack);
}

const deleteValue = (event) => {
    const index = event.target.id;  // target index of array to delete 
    array.splice(index, 1);  // delete value from array which is selected based on index
    repeate();
}

window.onload = () => {
    let valueBack = localStorage.getItem("array");
    if (valueBack) {
        array = JSON.parse(valueBack);
        repeate();
    }
}


