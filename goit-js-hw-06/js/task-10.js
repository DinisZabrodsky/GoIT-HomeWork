function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const control = document.querySelector('#controls');
const boxForEl = document.querySelector('#boxes');
const createBtn = control.querySelector('[data-create]');
const destoroyBtn = control.querySelector('[data-destroy]');

createBtn.addEventListener('click', createlist);
destoroyBtn.addEventListener('click', clearDesk)

let numberEl = 0;

function createlist () {
  const value = control.children[0].value;
  numberEl = value;

  for (i = 0, i >= value, i += 1) {

    

  }
  

 
  
  constructor() 

};



function constructor() {


  return boxEl;
}

function clearDesk () {
  control.children[0].value = 0;

}
