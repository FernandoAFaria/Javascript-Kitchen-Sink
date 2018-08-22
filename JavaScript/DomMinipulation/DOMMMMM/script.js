window.addEventListener('DOMContentLoaded', function(){
//Global Variables//
    let numOfSquares = 0;
    let div = document.createElement('div');
    let button = document.createElement('button');
    
//Adding button to Body//
    div.appendChild(button);
    button.appendChild(document.createTextNode('Add Square'));
    button.classList.add('btn');
    document.body.appendChild(div);
//Adding listener if button is clicked//
    button.addEventListener('click', addSquare);


//Functions below//
function addSquare(){
    
    let newDiv = document.createElement('div');
    newDiv.classList.add('blackBox');
    newDiv.id = numOfSquares;
    document.body.appendChild(newDiv);
    
//Mouse hover on black boxes//
    let blackbox = document.getElementsByClassName('blackBox');
    blackbox[numOfSquares].addEventListener('mouseover', displayId);
  
//Incrimenting the ID # //

    numOfSquares++;
}
  
    
    
function displayId(){

    this.innerHTML = this.id;
    console.log(this.id)
    this.addEventListener('mouseout', function(){
        this.innerHTML = "";
    })
 
}

    
    









})