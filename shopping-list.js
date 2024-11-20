const list = document.querySelector("ul")
let input = document.querySelector("#item")
const btn = document.querySelector("button")

function buttonPress(){
    //get current input and set input value to none 
    let currentInput = input.value
    input.value = ''
    
    // create dom elements for the new entry
    const newItem = document.createElement('li')
    const span = document.createElement('span')
    const deleteBtn = document.createElement('button')

    // append elements to the list
    newItem.appendChild(span)
    newItem.appendChild(deleteBtn)

    //set text content on the list entry to user input 
    span.textContent = currentInput
    // set delete button text
    deleteBtn.textContent = "Delete"

    //add child to existing list
    list.appendChild(newItem)

    //event listener to delete entry
    deleteBtn.addEventListener('click', () => {
        newItem.remove()
    })

    //focuses the input element so user doesnt have to c
    input.focus()
}

btn.addEventListener('click', buttonPress)
// add event listener for entering items if enter key in pressed 
document.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        buttonPress()
    }
})

