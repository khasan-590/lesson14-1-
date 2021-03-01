"use strict";

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
  console.log('blocks');
} else if (this.selector[0] === '#') {
  let pItem = document.createElement('p');
  document.body.append(pItem);
  
}
};


let str1 = new DomElement('.simple' , '50px' , '60px', 'black', 'Sans-serif');



console.log(str1);