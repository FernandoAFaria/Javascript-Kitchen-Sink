window.addEventListener('DOMContentLoaded', function(){
//Global Variables//
    let numOfSquares = 0;
    let button = document.createElement('button');
    
//Adding button to Body//
    button.appendChild(document.createTextNode('Add Square'));
    button.classList.add('btn');
    document.body.appendChild(button);
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
    //Clicking will change colors
    blackbox[numOfSquares].addEventListener('click', changeColor);

    //Double clicking event//
    blackbox[numOfSquares].addEventListener('dblclick', removeSquare);

    //Incrimenting the ID # //

    numOfSquares++;
}


function removeSquare(){
    
    if(this.id == 0){
        alert('nothing before this');
        return;
    }
  
    if(this.id % 2 === 0){
        try{
        this.nextSibling.remove();
        }
        catch(error) {
            alert('No squares next this this');
        }
    
    }    else {
        try{
        this.previousSibling.remove()
        }
        catch(error){
            alert('no squares before this ')
        }
    }




}
  
function changeColor(){
    let colors = ['pink', 'blue', 'yellow', 'purple', 'coral', 'aqua', 'red', 'green'];
    let x = Math.floor(Math.random() * 8);
    this.style.background = colors[x];



}
    
    
function displayId(){

    this.innerHTML = this.id;
    this.addEventListener('mouseout', function(){
        this.innerHTML = "";
    })
 
}

    
    









})