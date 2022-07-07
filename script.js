function onButtonClicked() {
    const multBy = document.getElementById("maxNum").value == "" ? 
        10 : document.getElementById("maxNum").value

    const randomNum = Math.floor(Math.random() * multBy + 1)
    const out = document.getElementById("out")
    const generated = document.getElementById("generated")
    const input = document.getElementById("inputnum").value

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

let checkIfEnter = (event) => event.keyCode === 13 

document.getElementById("inputnum").addEventListener("keypress", event => {
    const checkbtn = document.getElementById("checkbtn")
    if(checkIfEnter(event)) checkbtn.click()
})

document.getElementById("maxNum").addEventListener("keypress", event => {
    const inputnum = document.getElementById("inputnum")
    if(checkIfEnter(event)) inputnum.focus()
})