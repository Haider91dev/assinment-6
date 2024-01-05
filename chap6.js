 // Mathematicall expression

//Q1 
  var num =+prompt("Enter the value of a varible");
  alert("The vlaue of a varible is: "+num);
  alert("The vlaue of ++a varible is: "+ ++num);
  alert("The vlaue of a++ varible is: "+ num++);
  alert("The vlaue of --a varible is: "+ --num);
  alert("The vlaue of a-- varible is: "+ num--);

  ++num;
  num++;
  --num;
  num--;

// Q2
 
 var a = 2, b = 1;
 
 //Explain the output at each stage:
//  --a; -1 
//  --a - --b; -1 - 0 = -1 
//  --a - --b + ++b; -1 -0 + 2 =1
//  --a - --b + ++b + b--; -1 - 0+1 +1 =1

var a =2,b=1;
var result = --a - --b + ++b + b--;
             -1  - 0  + 1  + 1
 

 //Q3 Write a program that takes input a name from user &
 // greet the user.

  var name = prompt("please enter your name");

  alert("Welcome to my website " +name);

//   Q4 Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

   var num = +prompt("enter the number which you want a table");
 if(num>0)
 {
  
  alert(num +" x 1 = " +num*1 
 + "\n" +num +"x 2 = "+num*2+ "\n" + 
        num +" x 3 = " +num*3 +"\n"
       + num +" x 4 = "+num*4 +"\n"
       + num +" x 5 = "+num*5 +"\n"
       + num +" x 6 = "+num*6 +"\n"
       + num +" x 7 = "+num*7 +"\n"
       + num +" x 8 = "+num*8 +"\n"
       + num +" x 9 = "+num*9 +"\n"
       + num +" x 10 = "+num*10 +"\n"
  )


 }

 else{
   alert(5 +" x 1 = " +5*1 + "\n"
         +5 +"x 2 = "+5*2+ "\n"  
        + 5 +" x 3 = " +5*3 +"\n"
        + 5 +" x 4 = "+5*4 +"\n"
        + 5 +" x 5 = "+5*5 +"\n"
        + 5 +" x 6 = "+5*6 +"\n"
        + 5 +" x 7 = "+5*7 +"\n"
        + 5 +" x 8 = "+5*8 +"\n"
        + 5 +" x 9 = "+5*9 +"\n"
        + 5 +" x 10 = "+5*10 +"\n"
   )
 }

// Q6 
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

  var subA = prompt(" first subject");
  var subB = prompt(" second subject");
  var subC = prompt(" third subject");

  var subAob = +prompt("first subject marks");
  var subBob = +prompt("second subject marks");
  var subCob = +prompt("third subject marks");

  var total = +prompt("total marks of each subjeact")

  var obtained = subAob+subBob+subCob;
  var percentage = (obtained*100)/total;

  alert("total marks is : "+ total +"\n"
        +"otained marks is : "+obtained+"\n"
        +"percentage marks is : "+ percentage+"\n"
        +"subject first  : "+ subA+"\n"
        +"subject second  : "+ subB+"\n"
        +"subject third  : "+ subC+"\n"
        
         
  
  )

  

