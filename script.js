function onButtonClicked() {
    const multBy = document.getElementById("maxNum").value == "" ? 
        10 : document.getElementById("maxNum").value

    const randomNum = Math.floor(Math.random() * multBy + 1)
    const out = document.getElementById("out")
    const generated = document.getElementById("generated")
    const input = document.getElementById("inputnum").value

    if(input > randomNum) out.innerHTML = "Your answer is bigger"
        else if(input < randomNum) out.innerHTML = "Your answer is smaller"
        else out.innerHTML = "Your answer is right"

    generated.innerHTML = `The hidden number: ${randomNum}`
}