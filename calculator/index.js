let x = 2
let y = 9

document.getElementById('num1').textContent = x
document.getElementById('num2').textContent = y
let cout = document.getElementById('result') 

function add(){
    res = x + y
    cout.textContent = "Sum : " + res 
}
function sub() {
    res = x-y
    cout.textContent = "Sum : " + res
    console.log(res);
}
function div(){
    res = x/y
    cout.textContent = "Sum : " + res
    console.log(res);
}
function mult(){
    res = x*y
    cout.textContent = "Sum : " + res
    console.log(res);
}