window.addEventListener('DOMContentLoaded', function () {

let div = document.createElement('div');
div.classList.add('header-container');
let h1 = document.createElement('h1');
h1.appendChild(document.createTextNode('This is an h1'));


let h2 = document.createElement('h2');
h2.appendChild(document.createTextNode('This is an h2'));

let h3 = document.createElement('h3');
h3.appendChild(document.createTextNode('This is an h3'));

let h4 = document.createElement('h4');
h4.appendChild(document.createTextNode('This is an h4'));
let h5 = document.createElement('h5');
h5.appendChild(document.createTextNode('This is an h5'));
let h6 = document.createElement('h6');
h6.appendChild(document.createTextNode('This is an h6'));

h1.classList.add('h1')
h2.classList.add('h2')
h3.classList.add('h3')
h4.classList.add('h4')
h5.classList.add('h5')
h6.classList.add('h6')

div.appendChild(h1);
div.appendChild(h2);
div.appendChild(h3);
div.appendChild(h4);
div.appendChild(h5);
div.appendChild(h6);



document.body.appendChild(div);
});





