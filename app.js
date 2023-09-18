let slides = document.querySelectorAll(".slider")
let prevbtn = document.querySelector(".prev")
let nextbtn = document.querySelector(".next")
let dotted = document.querySelector(".dot-cont")
let dot =dotted .querySelectorAll(".dot")
let createdElems = []


slides.forEach((slider,i) => {
    slider.style.transform=`translate(-${i*100})`
})

let current = 0
 
function moveforward() {
    current += 1
    if (current ===slides.length) {
        current = 0
    }
    slides.forEach((slider) => {
        slider.style.transform=`translateX(-${current*100}%)`
    })
}
// console.log(moveforward);
function movebackward() {
    current -= 1
    if (current === 0) {
        current=0
        
    }
    slides.forEach((slider) => {
        slider.style.transform=`translateX(-${current*100}%)`
    })
    
}
function mapArray() {
    slides.forEach(createDot)
}
mapArray()

function createDot() {
    let element = document.createElement("div")
    element.setAttribute("class", "dot")
    dotted.appendChild(element)
    createdElems.push(element)
}

function buttonnext() {
    moveforward()

        createdElems.forEach((elems,i) => {
            if (current === i) {
                elems.style.backgroundColor="white"
            }
            else {
                elems.style.backgroundColor="black"
            }
        })
}
    
function buttonprev() {
    movebackward()
    createdElems.forEach((elems,i) => {
        if (current === i) {
            elems.style.backgroundColor="white"
        }
        else {
            elems.style.backgroundColor="black"
        }
    })
}

createdElems[0].style.backgroundColor = "white"


prevbtn.addEventListener("click", buttonprev)
nextbtn.addEventListener("click", buttonnext)
setInterval(moveforward, 7000)
// function person (x,y) {
//     this.firstName = x
//     this.lastName=y
// }
// const people = new person("mary", "jane");
// let gate = new person("john", "paul");

// console.log(people);
// console.log(gate);
// console.log(gate instanceof person);

// person.prototype.people = function() {
//     console.log("people")
// }


