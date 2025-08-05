const addValue = document.getElementById("datainput"); // accessing input field
const addButton = document.getElementById("addbutton"); // accessing add button
const todo = document.getElementById("todolist"); // access the todolist id which stores the value/html
const remove = document.querySelectorAll(".remove");

let array = []; //creating an empty array

addButton.addEventListener("click", () => {  // function for adding value
    const getValue = addValue.value;  //storing input value into variable
    // console.log(getValue)
    if (getValue) {
        array.push(getValue) // add value to array
        addValue.value = ""; // after adding value clearing the input field
    }
    repeate();
})


let repeate = () => {
    todo.innerHTML = ""; // prevent from repeating value while adding new value
    for (let i = 0; i < array.length; i++) {
        let datainput = `<div class="form">
                            <label class="radio">${array[i]}
                                <input class="input" type="checkbox" name="radio">
                                <span class="checkmark"></span>
                            </label>
                            <div>
                                <button class="button" class="delete" id="del">
                                    <img src="./images/delete.svg" alt="delete">
                                </button>
                            </div>
                        </div>
                    </span>
                </div>`
        document.getElementById("todolist").innerHTML += datainput; // adding value to container 
    }

    const remove = document.querySelectorAll(".remove");
    remove.forEach((remove) => {
        remove.addEventListener("click", removeValue);
    })

}

let removeValue = () => {
    array = [];
    todo.innerHTML = "";
}