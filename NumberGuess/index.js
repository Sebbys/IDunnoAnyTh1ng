let count = 0;
let rng = Math.floor(Math.random()*100);
const btn = document.querySelector('.btn');
const txt = document.getElementById('output');
let loHi = document.getElementById('loHi');

btn.addEventListener('click',function(){
let guess = parseInt(document.getElementById('guess').value)
document.getElementById('loHi').style.display = 'inline';
if(guess === rng){
    loHi.textContent = "Right"
    res.textContent += ' ' + guess 
    loHi.style.color = 'green';
    loHi.style.fontWeight = 'bold';
}
else if(count === 4){
    txt.textContent = "Game OVer"
    res.textContent += ' ' + guess
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
    document.getElementById('btn').disabled = true; //Finally Working :D
    document.getElementById('guess').disabled = true; //Finally Working :D
    //Still Figuring out how to make a new button appear :'
    const newBtn = document.createElement('button');
    newBtn.textContent = 'Reset Game' 
    newBtn.id = "newBtn"
    // is this the efficient way to do it ? IDK 
    newBtn.onclick = function resetGame(){
        count = 0;
        res.textContent = 'Your Guess : '
        console.log(count)
        txt.textContent = 'Enter a Numba !'
        txt.style.color = 'white'
        document.getElementById('btn').disabled = false; //Finally Working :D
        document.getElementById('guess').disabled = false;
        document.getElementById('newBtn').style.display = 'none';
        document.getElementById('loHi').style.display = 'none';
    }
    document.getElementById('loHi').style.display = 'inline';
    const child = document.getElementById('loHi')
    child.appendChild(newBtn)
}

// function resetGame(){
//     let count = 0;
//     res.textContent = 'Your Guess : '
//     console.log(count)
// }





