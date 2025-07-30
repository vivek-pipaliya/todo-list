// store value from inputbox in array
const datainput = document.getElementById("datainput");  //take value form user in input field
const show = document.getElementById("show");  // display input
const addbutton = document.getElementById("addbutton");  //when user click the button it will add value in array
let checks = document.querySelectorAll('.delete-button');
let editvalue = document.querySelectorAll('.edit-button');
// let emptyarray = document.getElementById('emptyarray');

let myarray = []; // created array for storing input
let editIndex = null;
const valueBack = localStorage.getItem("myarray");  //taking values from local storage 

// load when page is run or open
window.onload = function () {
    const valueBack = localStorage.getItem("myarray");  //taking values from local storage 
    if (valueBack) {
        myarray = JSON.parse(valueBack); // converting the string into array
        document.getElementById("todolist").innerHTML = "";
        for (let x = 0; x < myarray.length; x++) {
            let listHtml = ` <div class="form">
                        <label class="radio">${myarray[x]}
                            <input class="input edit-button" type="checkbox"  id="${x}" name="radio">
                            <span class="checkmark"></span>
                        </label>
                        <button class="button delete-button">
                            <img src="./images/delete.svg" alt="delete" id="${x}">
                        </button>
                    </div> `
            document.getElementById("todolist").innerHTML += listHtml; //it will print the value which is stored in myarray var
        }
    }

    // for delete button
    checks = document.querySelectorAll('.delete-button');
    checks.forEach(function (check) {
        check.addEventListener('click', checkIndex);
    })

    // for edit value
    editvalue = document.querySelectorAll(".edit-button");
    editvalue.forEach(function (check) {
        check.addEventListener("click", edit);
    });

    // for clear all items
    remove = document.querySelectorAll(".remove");
    remove.forEach(function (remove) {
        remove.addEventListener("click", emptyarray)
    })
}

// Add value function
addbutton.addEventListener('click', function () {
    const valuetoadd = datainput.value; //created variable to store input 
    if (valuetoadd) {
        if (editIndex !== null) {
            myarray[editIndex] = valuetoadd;
            editIndex = null;
            addbutton.innerHTML = "ADD"; // when value is changed the button will converted back from edit to add
        }
        else {
            myarray.push(valuetoadd); //it will add array to valuetoadd var
        }
        datainput.value = "";  //it will clear the input field after addiing value
        localStorage.setItem("myarray", JSON.stringify(myarray));
        document.getElementById("todolist").innerHTML = "";
        for (let x = 0; x < myarray.length; x++) {
            let listHtml = `<div class="form">
                <label class="radio">${myarray[x]}
                    <input class="input edit-button" type="checkbox" id="${x}" name="radio">
                    <span class="checkmark"></span>
                </label>
                <button class="button delete-button">
                    <img src="./images/delete.svg" alt="delete" id="${x}">
                </button>
            </div>`;
            document.getElementById("todolist").innerHTML += listHtml;
        }

        // for delete button
        checks = document.querySelectorAll('.delete-button');
        checks.forEach(function (check) {
            check.addEventListener('click', checkIndex);
        })

        // for edit value
        editvalue = document.querySelectorAll(".edit-button");
        editvalue.forEach(function (check) {
            check.addEventListener("click", edit);
        });

        // for clear all items
        remove = document.querySelectorAll(".remove");
        remove.forEach(function (remove) {
            remove.addEventListener("click", emptyarray)
        })
    }
    // storing the array in local storage
    const string = JSON.stringify(myarray);  // convert array in string
    localStorage.setItem("myarray", string);   // storing the array/value in local storage
});


// Delete Function
function checkIndex(event) {
    //console.log(event.target.id);
    const index = event.target.id;  // get index from button id
    myarray.splice(index, 1)
    localStorage.setItem("myarray", JSON.stringify(myarray));  // update storage
    document.getElementById("todolist").innerHTML = "";
    for (let x = 0; x < myarray.length; x++) {
        let listHtml = ` <div class="form">
                        <label class="radio">${myarray[x]}
                            <input class="input edit-button" type="checkbox" id="${x}" name="radio">
                            <span class="checkmark"></span>
                        </label>
                        <button class="button delete-button">
                            <img src="./images/delete.svg" alt="delete" id="${x}">
                        </button>
                    </div> `
        document.getElementById("todolist").innerHTML += listHtml; //it will print the value which is stored in myarray var
    }
    // for delete button
    checks = document.querySelectorAll(".delete-button");
    checks.forEach(function (check) {
        check.addEventListener("click", checkIndex);
    });

    // for edit value
    editvalue = document.querySelectorAll(".edit-button");
    editvalue.forEach(function (check) {
        check.addEventListener("click", edit);
    });

    // for clear all items
    remove = document.querySelectorAll(".remove");
    remove.forEach(function (remove) {
        remove.addEventListener("click", emptyarray)
    })
}

function edit(event) {
    const index = event.target.id;  // get index from button id
    // console.log('hii', index)
    datainput.value = myarray[index]; // takes value from array of specified index and puts inside input box
    // console.log('hello', datainput.value)
    editIndex = index;  // stores the index of the value that you are editing
    // console.log('hello', editIndex)
    addbutton.innerText = "EDIT";  // change ADD button to EDIT button when user try to edit value
    document.getElementById("todolist").innerHTML = "";
    for (let x = 0; x < myarray.length; x++) {
        let listHtml = ` <div class="form">
                        <label class="radio">${myarray[x]}
                            <input class="input edit-button" type="checkbox" id="${x}" name="radio">
                            <span class="checkmark"></span>
                        </label>
                        <button class="button delete-button">
                            <img src="./images/delete.svg" alt="delete" id="${x}">
                        </button>
                    </div> `
        document.getElementById("todolist").innerHTML += listHtml; //it will print the value which is stored in myarray var
    }

    //for edit button
    editvalue = document.querySelectorAll(".edit-button");
    editvalue.forEach(function (check) {
        check.addEventListener("click", edit);
    });

    // for delete button
    checks = document.querySelectorAll(".delete-button");
    checks.forEach(function (check) {
        check.addEventListener("click", checkIndex);
    });

    // for clear all items
    remove = document.querySelectorAll(".remove");
    remove.forEach(function (remove) {
        remove.addEventListener("click", emptyarray)
    })
}

function emptyarray() {
    myarray.length = 0; // clear all item of array
    // console.log(myarray)
    localStorage.removeItem("myarray"); // for clear all items from local storage
    document.getElementById("todolist").innerHTML = "";

    remove = document.querySelectorAll(".remove");
    remove.forEach(function (remove) {
        remove.addEventListener("click", emptyarray)
    })
}

