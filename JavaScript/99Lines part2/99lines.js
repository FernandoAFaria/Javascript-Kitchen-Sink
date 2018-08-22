window.addEventListener('DOMContentLoaded', function(){

  

  document.getElementById('btn').addEventListener('click', sing)

function sing(){
  let friends = ['tom', 'dick', 'harry', 'bob', 'nick'];
  for (each in friends) {

    let newDiv = document.createElement('div');
    newDiv.classList.add('friend');
    newH3 = document.createElement('h3');
    newH3.innerHTML = friends[each];
    newDiv.appendChild(newH3)
    document.body.appendChild(newDiv);

 
  for (var i = 99; i > 0; i--) {
    newParagraph = document.createElement('p');
    document.body.appendChild(newParagraph);
    newParagraph.innerHTML = i + ` lines of code in the file, ` + i + ` lines of code; ${friends[each]} strikes one out, clears it all out, ` + i + ` lines of code in the fil`;
    // console.log(i + ` lines of code in the file, ` + i + ` lines of code; ${friends[each]} strikes one out, clears it all out, ` + i + ` lines of code in the fil`)
  }


  }






}

})

