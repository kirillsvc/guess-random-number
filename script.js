function onButtonClicked() {
    const randomNum = Math.floor(Math.random() * 10 + 1)
    const out = document.getElementById("out")
    const generated = document.getElementById("generated")
    const input = document.getElementById("inputnum").value

    if(input > randomNum) out.innerHTML = "Your answer is bigger"
        else if(input < randomNum) out.innerHTML = "Your answer is smaller"
        else out.innerHTML = "Your answer is right"

    generated.innerHTML = `The hidden number: ${randomNum}`
}