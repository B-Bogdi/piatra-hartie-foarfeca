const rollBtn = document.getElementById("roll")
rollBtn.addEventListener("click", play)
function play() {
    let zar1 = Math.floor(Math.random() * 6) + 1
    let zar2 = Math.floor(Math.random() * 6) + 1
    switch (zar1) {
        case 1: dice1.innerHTML = '<img src="images/fataZar1.jpg" />';
            break;
        case 2: dice1.innerHTML = '<img src="images/fataZar2.jpg" />';
            break;
        case 3: dice1.innerHTML = '<img src="images/fataZar3.jpg" />';
            break;
        case 4: dice1.innerHTML = '<img src="images/fataZar4.jpg" />';
            break;
        case 5: dice1.innerHTML = '<img src="images/fataZar5.jpg" />';
            break;
        case 6: dice1.innerHTML = '<img src="images/fataZar6.jpg" />';
            break;
    }
    switch (zar2) {
        case 1: dice2.innerHTML = '<img src="images/fataZar1.jpg" />';
            break;
        case 2: dice2.innerHTML = '<img src="images/fataZar2.jpg" />';
            break;
        case 3: dice2.innerHTML = '<img src="images/fataZar3.jpg" />';
            break;
        case 4: dice2.innerHTML = '<img src="images/fataZar4.jpg" />';
            break;
        case 5: dice2.innerHTML = '<img src="images/fataZar5.jpg" />';
            break;
        case 6: dice2.innerHTML = '<img src="images/fataZar6.jpg" />';
            break;
    }
    let score = zar1 + zar2
    valuebox.innerHTML = score
    list.innerHTML += "<hr><li>" + score + "</li>"
}