let friends = ['tom', 'dick', 'harry', 'bob', 'nick'];

for(each in friends){
  console.log(friends[each].toUpperCase() + " : ")
  for(var i = 99; i > 0; i--){
    console.log(i + ` lines of code in the file, ` + i + ` lines of code; ${friends[each]} strikes one out, clears it all out, ` + i + ` lines of code in the fil` )
  }


}
