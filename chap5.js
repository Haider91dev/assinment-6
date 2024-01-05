chapter5

 Q1
 var num1 = +prompt("Enter the first number");
 var num2 = +prompt("Enter the second number");
 var sum =num1+num2

  

 alert("sum of "+num1+" and "+num2 +"  is " + sum);

//Q 2 a
var num1 = +prompt("Enter the first number");
 var num2 = +prompt("Enter the second number");
 var sub =num1-num2;
 alert("sub of "+num1 +"and"+num2+" is "+ sub)

//Q2 b

var num1 = +prompt("Enter the first number");
  var num2 = +prompt("Enter the second number");
  var mult =num1*num2;

  alert("sub of "+num1 +"and"+num2+" is "+ mult)
 

//Q2 c

var num1 = +prompt("Enter the first number");
var num2 = +prompt("Enter the second number");
var divi =num1/num2;

alert("sub of "+num1 +" and "+num2+" is "+ divi)

 //Q2 d

 var num1 = +prompt("Enter the first number");
 var num2 = +prompt("Enter the second number");
 var modu =num1%num2;
 
 alert("sub of "+num1 +" and "+num2+" is "+ modu)

// Q 3

  var num ;
  alert(" 'Value after variable declaration is: ??'. ")
 
   num =5;
   
   alert("Initial value: 5”. ")
  num =5+1;
  alert("Value after increment is: "+num)
  num = 6+7;

  alert("value after addition is:" +num);

 Q4

 var ticket = 600;
 alert("Total cost to buy 5 ticket to a movie is "+ ticket*5 +"PKR");

 Q5

  alert("Table of 4 is \n 4x1 = 4 \n 4x2  = 8 \n 4x3 =12 \n 4x4 = 16 \n 4x5 =20 \n 4x6 = 24\n 4x7 =28 \n 4x8 = 32 \n 4x9 = 36 \n 4x10 =40")

// Q6 Tempture converter 

  var cecius = +prompt("Enter the value of celcius");
  var fan = +prompt("Enter the value of fahrenheit");
  cecius =((fan-32)*5)/9 ;
  fan = (cecius*9/5) +32 ;
  alert("Your Fahrenheit tempture is: "+fan)
  alert("Your Celcius tempture is: "+cecius)


  Q7
  var priceItem1 = 120;
  var priceItem2 = 100;
  var oderItem1 = 3; 
  var oderItem2 =9;
  var shipChar =100;
  var total = priceItem1*3+priceItem2*9 +shipChar;

  alert("total cost of your order is " +total)

  Q8
  var totalMarks = prompt("Enter the total marks")
  var marksObtained = prompt("Enter the  marks obtained")

  var percentage = (marksObtained*100)/totalMarks;
  alert("Your Totalmarks is: "+totalMarks+" and obtained marks is:  "+marksObtained+" is "+"and percentage "+percentage)

  Q9
  var dollar =prompt("Enter the currancy in US a Dollar")
  var saudi =prompt("Enter the currancy in Saudi Riyal")
  var pkr  = dollar*104.80 + saudi*28;
  alert("Total Currency in PKR IS : "+pkr)

  Q10
  var num = +prompt("Enter the value of a number ");
  num =num+5 +num*10 +num/2 ;
  alert("value after do mathe calculation :" +num);

  Q11

  var birth =+prompt("Enter your birth year");
  var current =+prompt("Enter your current year");
  var year = current-birth;
  alert("Current year: " +current+"\nBirth year :"+birth+"\nYour Age is: "+year);

  Q12
  var radius =+prompt("Enter the value of radius ")
  var circumference = 2*3.14*radius;
  var area = 3.14*radius*radius
  alert("Radius of a circle is: "+radius+"\n The circumference is :"+circumference+"\nThe area is: "+area)











