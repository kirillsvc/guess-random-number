function onButtonClicked() {
    const multBy = getById("maxNum").value == "" ? 
        10 : get("maxNum").value

    const randomNum = Math.floor(Math.random() * multBy + 1)
    const out = getById("out")
    const generated = getById("generated")
    const input = getById("inputnum").value

    if(input == "" ) {
        out.innerHTML = "You haven't entered an answer"
        generated.innerHTML = `Last hidden number: ${randomNum}`
        return
    }

    if(input > randomNum) out.innerHTML = "Your answer is bigger"
        else if(input < randomNum) out.innerHTML = "Your answer is smaller"
        else out.innerHTML = "Your answer is right"

    generated.innerHTML = `The hidden number: ${randomNum}`
}

const getById = (id) => document.getElementById(id)
const checkIfEnter = (event) => event.keyCode === 13 

getById("inputnum").addEventListener("keypress", event => {
    const checkbtn = getById("checkbtn")
    if(checkIfEnter(event)) checkbtn.click()
})

getById("maxNum").addEventListener("keypress", event => {
    const inputnum = getById("inputnum")
    if(checkIfEnter(event)) inputnum.focus()
})