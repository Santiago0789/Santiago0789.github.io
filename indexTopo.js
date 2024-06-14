const hole= document.querySelectorAll('.hole')
const topo= document.querySelectorAll('.topo')
const timeLeft =document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime= timeLeft.textContent

function ramdomhole(){
    hole.forEach(className =>{ 
        className.classList.remove('topo')
    })

    let randomPosition = hole[Math.floor(Math.random()*9)]
    randomPosition.classList.add('topo')

    //asignar la id de la randomPositon a hitPosition 

    hitPosition = randomPosition.id
}

hole.forEach(id =>{
    id.addEventListener('mouseup', () =>{
        if(id.id === hitPosition){
            result= result + 1
            score.textContent = result
        }
    })
})

function moveTopo(){
    let timerId=null
    timerId=setInterval(ramdomhole,1000)
}
function countDown(){
    currentTime--
    timeLeft.textContent= currentTime

    if(currentTime ===0){
        clearInterval(timerId)
        alert('Termino el Tiempo!! tu puntaje es ' + result)
    }
}
let timerId=setInterval(countDown,1000)
moveTopo()