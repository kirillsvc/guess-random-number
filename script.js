function onButtonClicked() {
    const randomNum = Math.floor(Math.random() * 10 + 1)
    const out = document.getElementById("out")
    const generated = document.getElementById("generated")
    const input = document.getElementById("inputnum").value

    if(input > randomNum) out.innerHTML = "Ваш ответ больше"
        else if(input < randomNum) out.innerHTML = "Ваш ответ меньше"
        else out.innerHTML = "Ваш ответ верен"

    generated.innerHTML = `Загаданное число: ${randomNum}`
}