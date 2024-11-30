export const box = document.querySelector('.container');

export const itemOne = document.querySelector('item-one');

export const text = document.querySelector('.Text')

const quote = document.createTextNode(`See you on the other side, where we will discuss Events in Javascript, May the forth be with you.`);

text.appendChild(quote)
itemOne.appendChild(text);
box.appendChild(itemOne);