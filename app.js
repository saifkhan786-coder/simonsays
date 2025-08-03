let gameSeq = [];
let userSeq = [];  

let btns = ["red", "green", "orange", "blue"]

let started = false;  
let level = 0;

let h2 = document.querySelector("h2")

document.addEventListener("keypress", function(){
    if(started == false) {
        console.log("game started");
        started = true;
        levelUp();
    
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 280);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash")
    }, 280);
}
 
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randidx = Math.floor(Math.random() * 3);
    let randcolor = btns[randidx];
    let randBtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor)
    console.log(gameSeq)
    gameFlash(randBtn); 
} 

function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else{
        h2.innerHTML = `game over! Your score was <br>${level}</br>press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 180)
        reset();
    }
}

function btnPress(){
    console.log(this)
    let btn = this;
    userFlash(btn)

    userColor = btn.getAttribute("id");
    userSeq.push(userColor) 

    checkAns(userSeq.length-1); 
}

let allBtns = document.querySelectorAll(".btn")
for(btn of allBtns) {
    btn.addEventListener("click", btnPress)
}  

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}