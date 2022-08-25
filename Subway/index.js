let countEl = document.getElementById('count')
let stringRes = document.getElementById('result')
let count = 0 
function add(){
    count +=1
    countEl.innerText = count
}
function dec(){
    count -=1
    countEl.innerText = count
}
function res(){
    count = count-count
    countEl.innerText = count
    stringRes.innerText = 'Record :'
}

function save() {
    let string = " " + count + " - "
    stringRes.innerText += string
}

