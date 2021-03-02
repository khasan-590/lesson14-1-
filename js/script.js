"use strict";

const asking = prompt('Пожалйста введите . или #');

function DomElement   (selector, height,  width, bg, fontSize ) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

DomElement.prototype.strElements = function (){
  
  if (asking.this.selector[0] === '.') {
  let divItem =  document.createElement('div');
  document.body.append(divItem);
  // divItem.classList.add(selector.slice(1));
  divItem.style.cssText `selector: ${this.selector};
  height: ${this.height};
  width: ${this.width};
  background: ${this.bg};
  font-size: ${this.fontSize}; `;

  console.log('blocks');
} else if (asking.this.selector[0] === '#') {
  let pItem = document.createElement('p');
  
  document.body.append(pItem);
  pItem.style.cssText `selector: ${this.selector};
  height: ${this.height};
  width: ${this.width};  
  background: ${this.bg};
  font-size: ${this.fontSize}; `;
}
};

let str1 = new DomElement('.simple' , '50px' , '60px', 'black', 'Sans-serif');
let str2 = new DomElement('#simple' , '50px' , '60px', 'black', 'Sans-serif');


console.log(str1);
console.log(str2);