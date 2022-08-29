let count = 0;
let rng = Math.floor(Math.random()*100);
let btn = document.getElementById('btn');
const txt = document.getElementById('output');
let loHi = document.getElementById('loHi');

const res = document.getElementById('res');
const endGame = document.querySelector('guess');

btn.addEventListener('click',function(){
let guess = parseInt(document.getElementById('guess').value)
if(guess === rng){
    loHi.textContent = "Right"
    res.textContent += ' ' + guess 
    loHi.style.color = 'green';
    loHi.style.fontWeight = 'bold';
}
else if(count === 5){
    txt.textContent = "Game OVer"
    txt.style.color = 'red'
    gameOver()
}
else {
    txt.textContent = ' Wrong ! '
    if(guess > rng){
        loHi.textContent = ' Too High'
        res.textContent += ' ' + guess
    }
    else if(guess < rng){
        loHi.textContent = ' Too Low '
        res.textContent += ' ' + guess
    }
}    
count ++;
console.log(count);
console.log(guess);
})

function gameOver(){
    endGame.disable = true;
    btn.style.color = 'red'
    count = 0
}






