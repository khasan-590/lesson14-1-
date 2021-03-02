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
  if (this.selector[0] === '.') {
  let divItem =  document.createElement('div');
  document.body.append(divItem);
  
  divItem.style.cssText = ` height: ${this.height};
  width: ${this.width};
  background: ${this.bg};
  font-size: ${this.fontSize}; `;

} else if (this.selector[0] === '#') {
  let pItem = document.createElement('p');
  document.body.append(pItem);
  pItem.style.cssText = ` height: ${this.height};
  width: ${this.width};  
  background: ${this.bg};
  font-size: ${this.fontSize}; `;
}
};

let str1 = new DomElement(asking , '50px' , '60px', 'black', '40px');
let str2 = new DomElement(asking , '50px' , '60px', 'black', '40px');

str1.strElements();
str2.strElements();
console.log(str1);
console.log(str2);