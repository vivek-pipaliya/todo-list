const addValue = document.getElementById("datainput"); // accessing input field
const addButton = document.getElementById("addbutton"); // accessing add button
const todo = document.getElementById("todolist"); // access the todolist id which stores the value/html

let array = []; //creating an empty array
let editIndex = null;

addButton.addEventListener("click", () => {  // function for adding value
    const getValue = addValue.value;  //storing input value into variable
    // console.log(getValue)
    if (getValue) {

        array.push(getValue) // add value to array
    }
    addValue.value = ""; // after adding value clearing the input field
    repeate();

})

let repeate = () => {
    todo.innerHTML = ""; // prevent from repeating value while adding new value
    for (let i = 0; i < array.length; i++) {
        let datainput = `<div class="form">
                            <label class="radio">${array[i]}
                                <input class="input edit-button" type="checkbox" name="radio">
                                <span class="checkmark"></span>
                            </label>
                            <div>
                                <button class="button" class="delete" id="del">
                                    <img class="delete-button" src="./images/delete.svg" alt="delete">
                                </button>
                            </div>
                        </div>
                    </span>
                </div>`
        document.getElementById("todolist").innerHTML += datainput; // adding value to container 
    }

    let stringValue = JSON.stringify(array);
    localStorage.setItem("array", stringValue);
    let valueBack = localStorage.getItem("array");
    array = JSON.parse(valueBack);

    const remove = document.querySelectorAll(".remove")
    remove.forEach((remove) => {
        remove.addEventListener("click", removeValue);
    })

    const deleteButton = document.querySelectorAll(".delete-button")
    deleteButton.forEach((deleteButton) => {
        deleteButton.addEventListener("click", deleteValue);
    })

    const editButton = document.querySelectorAll('.edit-button');
    editButton.forEach((editButton) => {
        editButton.addEventListener("click", editValue);
    })
}

const editValue = (event) => {
    index = event.target.value;
    addValue.value = array[index];
    addButton.innerText = "EDIT"    
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


