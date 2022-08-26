const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();
    
const height = parseInt(document.getElementById('height').value)
const weight = parseInt(document.getElementById('weight').value)
const result = document.getElementById('result')

if((height==='')||(height < 0)||(isNaN(height))){
    result.innerText = "apaan sih anjing !"
}
else if ((weight==='')||(weight<0)||(isNaN(weight))){
    result.innerText = "Ngelunjak ni anjing !"
}
else{
    let bmi = (weight/((height*height)/10000)).toFixed(2)
    // bmi = Math.ceil(bmi)
    result.innerText = 'Your Result : ' + bmi
}
});