function myFunction() {
  let i = 0;
  while (i < 10) {
    console.log(i);
    i++;
    if (i === 5) {
      break; // Exit the loop when i is 5
    }
  }
}

myFunction(); //This will print 0,1,2,3,4

function myFunction2(){
    let i = 0;
    while(i<10){
        if(i===5){
            continue; //Skip the iteration when i is 5
        }
        console.log(i);
        i++;
    }
}
myFunction2();//This will print 0,1,2,3,4,6,7,8,9