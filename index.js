const piatraChoose = document.getElementById("piatra")
const hartieChoose = document.getElementById("hartie")
const foarfecaChoose = document.getElementById("foarfeca")
const start = document.getElementById("start")
const resetBtn = document.getElementById("reset")
const introPhoto = document.getElementById("introphoto")
const introText = document.getElementById("introtext")
const buttonContainer = document.getElementById("buttons")

myScore = 0
botScore = 0

let myScoreTable = document.getElementById("eu")
let botScoreTable = document.getElementById("bot")
let scoreTable = document.getElementById("score")

botChoose = document.getElementById("botchoose")
stats = document.getElementById("status")
mySign = document.getElementById("mychoose")

myScoreTable.innerHTML = "<p>" + `${myScore}` + "</p>"
botScoreTable.innerHTML = "<p>" + `${botScore}` + "</p>"

resetBtn.addEventListener("click", reset)

function reset() {
    window.location.reload();
}

start.addEventListener("click", game)
let myChoose
function game() {

    introPhoto.style.display = "none"
    introText.style.display = "none"
    start.style.display = "none"

    resetBtn.style.display = "inherit"
    buttonContainer.style.display = "inherit"
    scoreTable.style.display = "block"
    stats.style.display = "inherit"

    piatraChoose.addEventListener("click", choose1)
    function choose1() {
        mySign.innerHTML = '<p class="mysignp"> <img class="mysign" src="piatra.png" alt="" /></p>'
        myChoose = 1;
        rndInt = Math.floor(Math.random() * (3 - 1 + 1) + 1)
        console.log(rndInt)
        switch (rndInt) {
            case 1: stats.innerHTML = "<p>Egal</p>"

                botChoose.innerHTML = '<div class="botsignp"> <img class="botsign" src="piatra.png" alt="" /> </div>'
                break;
            case 2: stats.innerHTML = "<p>Ai pierdut</p>"
                botChoose.innerHTML = '<p class="botsignp"> <img class="botsign" src= "hartie.png" alt="" /></p>'
                botScoreTable.innerHTML = "<p>" + `${botScore = botScore + 1}` + "</p>"
                break;
            case 3: stats.innerHTML = "<p>Ai castigat</p>"
                botChoose.innerHTML = '<p class="botsignp"> <img class="botsign" src="foarfeca.png" alt="" /></p>'
                myScoreTable.innerHTML = "<p>" + `${myScore = myScore + 1}` + "</p>"
                break;
        }
    }
    hartieChoose.addEventListener("click", choose2)
    function choose2() {
        mySign.innerHTML = '<p class="mysignp"> <img class="mysign" src="hartie.png" alt="" /></p>'
        myChoose = 2;
        rndInt = Math.floor(Math.random() * (3 - 1 + 1) + 1)
        console.log(rndInt)
        switch (rndInt) {
            case 1: botChoose.innerHTML = '<div class="botsignp"> <img class="botsign" src="piatra.png" alt="" /> </div>'
                stats.innerHTML = "<p>Ai castigat</p>"
                myScoreTable.innerHTML = "<p>" + `${myScore = myScore + 1}` + "</p>"
                break;
            case 2: stats.innerHTML = "<p>Egal</p>"
                botChoose.innerHTML = '<p class="botsignp"> <img class="botsign" src="hartie.png" alt="" /></p>'
                break;
            case 3: stats.innerHTML = "<p>Ai pierdut</p>"
                botChoose.innerHTML = '<p class="botsignp"> <img class="botsign" src="foarfeca.png" alt="" /></p>'
                botScoreTable.innerHTML = "<p>" + `${botScore = botScore + 1}` + "</p>"
                break;
        }
    }
    foarfecaChoose.addEventListener("click", choose3)
    function choose3() {
        mySign.innerHTML = '<p class="mysignp"> <img class="mysign" src="foarfeca.png" alt="" /></p>'
        myChoose = 3;
        rndInt = Math.floor(Math.random() * (3 - 1 + 1) + 1)
        console.log(rndInt)
        switch (rndInt) {
            case 1: botChoose.innerHTML = '<div class="botsignp"> <img class="botsign" src="piatra.png" alt="" /> </div>'
                stats.innerHTML = "<p>Ai pierdut</p>"
                botScoreTable.innerHTML = "<p>" + `${botScore = botScore + 1}` + "</p>"
                break;
            case 2: stats.innerHTML = "<p>Ai castigat</p>"
                botChoose.innerHTML = '<p class="botsignp"> <img class="botsign" src="hartie.png" alt="" /></p>'
                myScoreTable.innerHTML = "<p>" + `${myScore = myScore + 1}` + "</p>"
                break;
            case 3: stats.innerHTML = "<p>Egal</p>"
                botChoose.innerHTML = '<p class="botsignp"> <img class="botsign" src="foarfeca.png" alt="" /></p>'
                break;
        }
    }
}