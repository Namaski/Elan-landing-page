let position = []

function randomnPosition(el) {

    let x = Math.random() * 100
    let y = Math.random() * 100

    position.X = x
    position.Y = y

    el.style.left = x + "%" 
    el.style.top = y + "%"

    return position
}

function resetPosition() {
    position = []
}

function createStar(){

    const star = document.createElement("div")
    star.classList = "star"

    setInterval(() => {
        let newStar = star.cloneNode()
        randomnPosition(newStar)
        document.body.appendChild(newStar)
        
            setTimeout(function () {
                document.body.removeChild(newStar)
            },25000)
    }, 500);

}

function createShootingStar() {

    const shootingStar = document.createElement("div")
    shootingStar.classList = "shootingStar"
    
    setInterval(() => {

        let newShootingStar = shootingStar.cloneNode()
        randomnPosition(newShootingStar)
        document.body.appendChild(newShootingStar)

        setTimeout(() => {
            newShootingStar.style.width = '100px'
            randomnPosition(newShootingStar)
        },1000)
        console.log(position)
        setTimeout(() => {
            newShootingStar.style.width = '5px'
        },2000)

        setTimeout(() => {
            newShootingStar.style.visibility = "hidden";

        },
        100)

        setTimeout(function () {
            document.body.removeChild(newShootingStar)
        },20000)

    }, 2000);

    resetPosition
}

createShootingStar()
createStar()
