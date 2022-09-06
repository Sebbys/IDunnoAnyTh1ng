const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(storyText){
    const random = Math.floor(Math.random()*storyText.length);
    return storyText[random];
}

const x = ['Willy the Goblin','Big Daddy','Father Christmas']
const y = ['the soup kitchen','Disneyland','the White House']
const z = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away']

randomize.addEventListener('click', result);

function result() {
let weight = 300 + ' pounds';
let temperature = 94 + ' fahrenheit';

  if(customName.value !== '') {
    let name = customName.value;
    
  if(document.getElementById("uk").checked) {
    weight = (Math.round(300)/14).toFixed(0) + ' stones';
    temperature = ((Math.round(94)-32)*(5/9)).toFixed(0) + ' centigrade';
  }
  let storyText = [`It was ${temperature} outside, so ${x1=randomValueFromArray(x)} went for a walk. When they got to ${randomValueFromArray(y)}, they stared in horror for a few moments, then ${randomValueFromArray(z)}. ${name} saw the whole thing, but was not surprised — ${x1} weighs ${weight}, and it was a hot day.`]
  story.textContent = storyText;
  story.style.visibility = 'visible';
}}
