/* //Chapter # 1 "ALERTS"//

        //(Q1.)//
//alert("Hello People!");
        //(Q2.)//
//alert("Error! Please enter a valid password.");
        //(Q3.)//
//alert("Welcome to JS Land..." +"\n"+ "Happy Coding!"); 
        //(Q4.)//
//alert("Welcome to JS Land...");
//alert("Happy Coding!");
        //(Q5.)//
//console.log("Hello... I can run JS through my web brower's console");

//Chapter # 2 "VARIABLES FOR STRINGS"//

        //(Q1.)//
//var userName;
        //(Q2.)//
//var myName = "Iqra Rasheed";
        //(Q3.)//
//var message;
//alert(message);
       //(Q4.)//
//var name = "John Doe";
//var age = "15 years old";
//var message = "Certified Mobile Application Development";
//alert(name);
//alert(age);
//alert(message);
      //(Q5.)//
var food;
food = "PIZZA";
food1 = "PIZZ";
food2 = "PIZ";
food3 = "PI";
food4 = "P";
alert(food +"\n"+ food1 +"\n"+ food2 +"\n"+ food3 +"\n"+ food4);
      //(Q6.)//
var email = "example@example.com";
alert("My Email Address is " + "example@example.com");    
      //(Q7.)//
var book = "A Smarter Way to Learn JavaScript";
alert("I am trying to learn from the Book " + book);
     //(Q8.)//
document.write("Yah! I can write HTML content through JavaScript");  
     //(Q9.)//
var string = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(string);     

//Chapter # 3 "VARIABLES FOR NUMBERS"//

     //(Q1.)//
var age = 15;
alert("I am "+ age +" "+ "years old");    
     //(Q2.)// 
var visitor = 14;
alert("You have visited this site "+visitor+ " times");
    //(Q3.)//
var birthYear = 1990;
document.write("<p>My Birth Year is 1990</p>");
document.write("<p>Data type of my declared varaible is number</p>");
   //(Q4.)//
var shop = "XYZ Clothing Store";
var visitorsName = "John Doe";
var productTitle = "T-Shirt";
var quantity = 5;
document.write("<b>John Doe</b> ordered <b>5</b> <b>T-Shirt</b>(s) on XYZ Clothing Store");

//Chapter # 4 "VARIABLE NAMES"//
//(Q1.)//
var $hello_John;
//(Q2.)//
var legal = "$Hello_3Person";
alert(legal);
//(Q3.)//
var illegal = "*&%#@";
alert(illegal);
document.write("<h1>Rules For Naming JS Variables</h1>");
document.write("<p>a) Variable names can contain only numbers, $ and _ , For Example : $my_1stVariable.</p>");
document.write("<p>b) Variable must begin with a letter, $ or _ , For Example : $name, _ name or name.</p>");
document.write("<p>c) Variable names are case sensitive.</p>");
document.write("<p>d) Variable names should not be JS keywords.</p>");

//Chapter # 5 "MATHS EXPRESSIONS"//
    //(Q1.)//
//ADD//
var num = 3;
var anotherNum = 5;
var newNum = num + anotherNum;
document.write("<p>Sum of 3 & 5 is 8</p>"); 
   //(Q2.)//
//SUBTRACT//
var num = 3;
var anotherNum = 5;
var newNum = num - anotherNum;
document.write("<p>Subtraction of 3 & 5 is -2</p>"); 
//MULTIPLY//
var num = 3;
var anotherNum = 5;
var newNum = num * anotherNum; 
document.write("<p>Multiplication of 3 & 5 is 15</p>"); 
//MODULUS//
var num = 3;
var anotherNum = 5;
var newNum = num % anotherNum; 
document.write("<p>Modulus of 3 & 5 is 0.6</p>"); 
 //(Q3.)//
var hello = null - hello;
alert(hello);
var num = 5;
var newNum = ++num;
alert(newNum);
var popularNewNum = newNum + 7;
alert(popularNewNum);
var num2 = --popularNewNum;
alert(num2);
var num3 = num2 % 3;
alert(num3);
document.write("<p>Value after variable declaration is undefined</p>");
document.write("<p>Initial Value : 5</p>");
document.write("<p>Value after Increment : 6 </p>");
document.write("<p>Value after addition : 13 </p>");
document.write("<p>Value after decrement : 12</p>");
document.write("<p>The Remainder : 0 </p>");
//  (Q4.) //
var ticket = 600;
var total = 5 * 600;
alert(total);
document.write("<p>Total Cost to buy 5 tickets to a movie is 3000PKR</p>");
//   (Q5.) //
document.write("<h2>Table of 4 <br></h2>"); 
document.write("<h2>4  x  1 = 4 <br></h2>"); 
document.write("<h2>4  x  2 = 8 <br></h2>");
document.write("<h2>4  x  3 = 12 <br></h2>");
document.write("<h2>4  x  4 = 16 <br></h2>");
document.write("<h2>4  x  5 = 20 <br></h2>");
document.write("<h2>4  x  6 = 24 <br></h2>");
document.write("<h2>4  x  7 = 28 <br></h2>");
document.write("<h2>4  x  8 = 32 <br></h2>");
document.write("<h2>4  x  9 = 36 <br></h2>");
document.write("<h2>4  x  10 = 40 <br></h2>"); 
// (Q6.)// 
document.write("<p>25<sup>o</sup>C is 77<sup>o</sup>F</p>"); 
document.write("<p>70<sup>o</sup>F is 21.111111111111<sup>o</sup>C</p>");
//   (Q7.)  //
var price1 = 650;
var price2 = 100;
var item1 = 650 * 3;
var item2 = 100 * 7;
var ship = 100;
alert(item1 + item2 + ship);
document.write("<h1>Shopping Cart</h1>");
document.write("<p>Price of item 1 is 650</p>");
document.write("<p>Quantity of item 1 is 3</p>");
document.write("<p>Price of item 2 is 100</p>");
document.write("<p>Quantity of item 2 is 7</p>");
document.write("<p>Shipping Charges 100</p> <br>");
document.write("<p>Total Cost of your order is 2750</p>");
//   (Q8.) //
var obtainedMarks = 804;
var totalMarks = 980;
var percentage = obtainedMarks/totalMarks * 100;
alert(percentage);
document.write("<h1>Marks Sheet</h1>");
document.write("<p>Total Marks : 980</p>");
document.write("<p>Obtained Marks : 804</p>");
document.write("<p>Percentage: 82.0408163265306</p>");
//  (Q9.)//
var dollars = 10 * 104.80;
var riyals = 25 * 28;
var currency = dollars + riyals;
alert(currency);
document.write("<p>Total Currency in PKR : 1748</p>");
// (Q10.)//
var num = 5 + 5;
var newNum = num * 10;
var anotherNum = newNum / 2;
alert(anotherNum);
// (Q11.)//
var currentYear = 2016;
var birthYear = 1992;
var totalAge = 2016 - 1992;
alert(totalAge);
document.write("<h1>Age Calculator</h1>");
document.write("<p>Current Year : 2016</p>");
document.write("<p>Birth Year : 1992</p>");
document.write("<p>Your Age is : 2016</p>");
// (Q12.)//
var radius = 20;
var pieValue = 2 * 3.142;
var circumferenceOfCircle = pieValue * radius;
alert(circumferenceOfCircle);
var area = pieValue * radius;
alert(area);
//(Q13.)//
var favSnack = "Frech Fries";
var currentAge = 24;
var maxAge = 70;
var amount = 4;
var totalSnacks = maxAge - currentAge;
var favSnacks = totalSnacks * amount;
alert(favSnacks);
document.write("<p>You will need 184 times French Fries to last you until the ripe old age of 70</p>");

//Chapter # 6-9 "MATH EXPRESSIONS"//

//(Q1.)//
var a = 10;
var b = ++a;
var c = a++;
var d = --a;
var e = --a;
alert(e);
//(Q2.)//
var a = 2;
var b = 1;
var x = --a;
var y = --a - --b;
var z = --a - --b + ++b;
var result = --a - --b + ++b + b--;
alert(x);
alert(y);
alert(z);
alert(result);
//(Q3.)//
var user = prompt("Enter your Name");
alert("Hello! " + user);
//(Q5.)//
var input = prompt("Enter Number");
if(input === ""){
        console.log("Print 5 table")      
}        
else{
for (var i = 1; i <= 10; i++){
        console.log(input + "*" + "=" + input * i);
}
}       
//(Q6.)//
var s1 = prompt("Enter Subject Name");
var sub1 =+ prompt("Enter obtained marks");
alert(s1 + "=" + sub1);
var s2 = prompt("Enter Subject Name");
var sub2 =+ prompt("Enter obtained marks");
alert(s2 + "=" + sub2);
var s3 = prompt("Enter Subject Name");
var sub3 =+ prompt("Enter obtained marks");
alert(s3 + "=" + sub3);
var total_Marks = 300;
var obtained_Marks = sub1 + sub2 + sub3;
var percentage = (obtained_Marks/total_Marks)* 100;
alert(percentage + "%");
//Chapter # 9-11 "USER INPUT & CONDITIONAL STATEMENT"//
//(Q1.)//
var city = prompt("Your favourite city");
if (city === "Karachi") {
        alert("Welcome to city of Lights!!!");
}
//(Q2.)//
var user = prompt("Your Gender");
if (user === "Male") {
        alert("Good Morning Sir!!");
}
if (user === "Female") {
        alert("Good Morning Ma'am!!");
}
//(Q3.)//
var signal = prompt("Signal Color");
if (signal === "Red") {
        alert("Must Stop...");
}
if (signal === "Yellow") {
        alert("Ready to Move...");
}
if (signal === "Green") {
        alert("Move Now...");
}
//(Q4.)//
var fuel = prompt("Write the remaining fuel in your car");
if (fuel < 0.25) {
        alert("Please Refill the fuel in your car.");
}
//(Q5.)//
//a.//
var a = 4;
if (++a === 5) {
        alert("Given condition for variable a is true");
}  
//b.//      
var b = 82;
if (b++ === 83) {
        alert("Given condition for variable b is true")      
}
//c.//
var c = 12;
if (c++ === 13) {
        alert("condition 1 is true");
}
if (c === 13) {
        alert("condition 2 is true");
}
if (++c < 14) {
        alert("condition 3 is true");
}
if (c === 14) {
        alert("condition 4 is true");
}
//d.//
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost ===laborCost + materialCost) {
        alert("The cost equals");
}
//e.//
if (totalCost === "True") {
        alert("True")
}
else {
        alert("False")
}
//f.//
if ("car" < "cat") {
        alert("car is smaller than cat");
}
//(Q6.)//
var Science =+ prompt("Write obtained marks");
var Geography =+ prompt("Write obtained marks");
var History =+ prompt("Write obtained marks");
var obtained_marks = Science + Geography + History;
var total_marks = 300;
var percentage = (obtained_marks/total_marks) * 100;
alert(percentage + "%");
var percentage = prompt("Write your percent")
if (percentage >= 80) {
        alert("A-one");  
}
else if (percentage >= 70) {
        alert("A");
}
else if (percentage >= 60) {
        alert("B");
}
else if (percentage < 60) {
        alert("Fail");
}
//(Q7.)//
var num = 7;
var num = prompt("Guess the secret number");
if (num == 7) {
        alert("Bingo!Correct Answer");
}
else {
        num == num + 1;
        alert("Close enough to the correct answer");
}
//(Q8.)//
var num = prompt("Give me a number")
if (num / 3) {
        alert("The number is divisible by 3");
}
else {
        alert("The number is not divisible by 3");
}
//(Q9.)//
var input = prompt("Write a number")
if (input % 2 == 0) {
        alert(input + " is even")
}
else {
        alert(input + " is odd")
}
//(Q10.)//
var temperature = prompt("What is today's temerature in your city?")
if (temperature > 40) {
        alert("It is too hot outside.")
}
else if (temperature > 30) {
        alert("The Weather today is Normal.")
}
else if (temperature > 20) {
        alert("Today's Weather is Cool.")
}
else if (temperature > 10) {
        alert("OMG! Today's Weather is so Cool.")
}
//(Q11.)//
var val1 = prompt("Write your first value")
var sign = prompt("Write your operator")
var val2 = prompt("Write your second value")
if (sign === "+") {
        alert((+val1) + (+val2))
}
else if (sign === "-") {
        alert(val1 - val2)
}
else if (sign === "*") {
        alert(val1 * val2)
}
else if (sign === "/") {
        alert(val1 / val2)
}
else if (sign === "%") {
        alert(val1 / val2 * 100 + "%")
}

//Chapter # 12-13 "IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS//
//(Q1.)//


//(Q2.)//
var input1 = prompt("Write an integer")
var input2 = prompt("Write another integer")
if (input1 > input2) {
        alert("This integer is large");
}
else if (input1 === input2) {
        alert("The integers are equal");
}
//(Q3.)//
var program = prompt("What is the actual number?")
if (program > 1) {
        alert("The number is positive")
}
else if (program > -1) {
        alert("The number is negative")
}
else if (program === 0) {
        alert("The number is Zero")
}
//(Q4.)//
var alpha = prompt("Write an alphabet")
if (alpha === "a||e||i||o||u") {
        alert("True")
}
else {
        alert("False")
}

//(Q5.)//
var password = 12345;
var user = prompt("Please Enter your Password")
if (user === "") {
        alert("Please Enter your Password")
}
else  { 
        user === "password" 
        alert("Correct!")
}
//(Q6.)//
var greeting;
var hour = 13
if (hour < 18) {
        alert("Good Day")
}
else {
        alert("Good Evening")
}
//(Q7.)//

//Chapter # 13-15 "ARRAY"//
//(Q1.)//
var student = [];
alert(student);
//(Q2.)//
var student = new Array();
alert(student);
//(Q3.)//
var mixedArray = [1,"Ali","good sense",true];
alert(mixedArray);
//(Q4.)//
var number = [1,2,3,4,5];
alert(number[0]);
//(Q5.)//
var obj = new Boolean(0);
alert(obj.valueOf());
var obj = new Boolean(1);
alert(obj.valueOf());
//(Q6.)//
var veg = ["carrot", "potato", "onion","turnip"];
alert(veg[3]);
//(Q7.)//
var qualifications = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"];
document.write("<h1>Qualifications</h1>");
document.write("<h2>1) SSC</h2>");
document.write("<h2>2) HSC</h2>");
document.write("<h2>3) BCS</h2>");
document.write("<h2>4) BS</h2>");
document.write("<h2>5) BCOM</h2>");
document.write("<h2>6) MS</h2>");
document.write("<h2>7) M.Phil.</h2>");
document.write("<h2>8) PhD</h2>");
//(Q8.)//
var students = ["John","Austin","Bill"];
students[0] = 325/500 * 100;
students[1] = 285/500 * 100;
students[2] = 456/500 * 100;
document.write("John secured  325 marks and " + students[0] + "%"+ "<br>");
document.write("Austin secured 285 marks and " + students[1] + "%"+ "<br>");
document.write("Bill secured 456 marks and " + students[2] + "%" + "<br>");
//(Q9.)//
//a).
var colors = ["blue","white","pink","purple","black","orange"];
document.write("<p>" + colors + "<br>" + "</p>");
var color = prompt("Which color you want to add at the start?");
colors.unshift(color);
document.write("<p>"+ colors + "<br>" + "</p>");
//b).
var color = prompt("Which color you want to add at the end?");
colors.push(color);
document.write("<p>" + colors + "<br>" + "</p>");
//d).
colors.shift(color);
document.write("<p>" + colors + "<br>" + "</p>");
//e).
colors.pop(color);
document.write("<p>" + colors + "<br>" + "</p>");
//f).
colors.splice(1,1,"peach");
document.write("<p>" + colors + "<br>" + "</p>");
//g).
colors.splice(2,3);
document.write("<p>" + colors + "<br>" + "</p>");
//(Q10.)//
var scores = [320,230,480,120];
scores.sort();
document.write("<p>"+ "The Ordered Scores of Students: " + scores + "<br>" + "</p>");
//(Q11.)//
var cityNames = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
var selectedCities = cityNames.slice(2,4);
document.write("<p>" + "Selected City List: " + selectedCities + "<br>" + "</p>");
//(Q12.)//
var arr = ["This","is","my","cat"];
var str = arr.join();
document.write("<p>" + "Array: "+ arr + "<br>" + "</p>");
var arr1 = ["This is my cat"];
var str1 = arr1.join();
document.write("<p>" +"String: "+ arr1 + "<br>" + "</p>");
//(Q13.)//
var devices = ["Keyboard","Mouse","Printer","Monitor"];
document.write("<p>" +"Devices: "+ "<br>"+ devices + "<br>" + "</p>");
document.write("<p>" + "Out: "+"<br>"+"Keyboard"+ "<br>" + "</p>");
document.write("<p>" + "Out: "+"<br>"+"Mouse"+ "<br>" + "</p>");
document.write("<p>" + "Out: "+"<br>"+"Printer"+ "<br>" + "</p>");
document.write("<p>" + "Out: "+"<br>"+"Monitor"+ "<br>" + "</p>");
//(Q14.)//
var devices1 = ["Keyboard","Mouse","Printer","Monitor"];
document.write("<p>" +"Devices: "+ "<br>"+ devices + "<br>" + "</p>");
document.write("<p>" + "Out: "+"<br>"+"Monitor"+ "<br>" + "</p>");
document.write("<p>" + "Out: "+"<br>"+"Printer"+ "<br>" + "</p>");
document.write("<p>" + "Out: "+"<br>"+"Mouse"+ "<br>" + "</p>");
document.write("<p>" + "Out: "+"<br>"+"Keyboard"+ "<br>" + "</p>");
//(Q15.)//
var arr = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
document.write("<select>")
for (var i = 0; i < arr.length; i++) {
        document.write("<option>"+ arr[i] +  "</option>" + "<br>")
}
document.write("</select>" + "<br>")

//Chapter # 17-20 "ARRAYS AND LOOP"//
//(Q1.)//
var arr = [[],[],[],[],[]];
for (var i=0; i<5; i++) {
     alert(arr);   
}
//(Q2.)//

//(Q3.)//
var x;
for (var x = 1; x <= 10; x++) {
                document.write("<h3>" + x + "<br>" + "</h3>"); 

}
//(Q4.)//
var table  = prompt("Enter a number to show its multiplication table");      
var table1 = prompt("Enter length multiplication table");
for (var i = 0; i <= table.length; i++){
        console.log(table + "*" + i + "=" + table * i + "<br>");
}
//(Q5.)//
var fruits = ["apple","mango","banana","orange","strawberry"]
for (var i = 0; i < 1; i++) {
        document.write( fruits[0] + "<br>")
        document.write( fruits[1] + "<br>")
        document.write( fruits[2] + "<br>")
        document.write( fruits[3] + "<br>")
        document.write( fruits[4] + "<br>")
}
//(Q6.)//
//a).
var b;
document.write("<h1>Counting</h1>")
for (var b = 1; b <= 15; b++) {
        document.write("<h4>"+ b + "</h4>")
}
//b).
var c;
document.write("<h1>Reverse Numbers</h1>")
for (var c = 10; c >= 1; c--) {
        document.write("<h4>"+ c + "</h4>") 
}
//c).
var d;
document.write("<h1>Even Numbers</h1>")
for (var d = 0; d <= 20; d = d+2) {
        document.write("<h4>"+ d + "</h4>")
}
//d).
var e;
document.write("<h1>Odd Numbers</h1>")
for (var e = 1; e <= 19; e = e+2) {
        document.write("<h4>"+ e + "</h4>")
} 
//e).
var f;
document.write("<h1>Series</h1>")
for (var d = 2; d <= 20; d = d+2) {
        document.write("<h4>"+ d + "k" + "</h4>")
}
//(Q7.)//

//(Q8.)//
var num = [24,53,78,91,12];
num = Math.max(24,53,78,91,12);
document.write("<h1>"+ "The Largest number is "+num + "</h1>");
//(Q9.)//
var num1 = [24,53,78,91,12];
num1 = Math.min(24,53,78,91,12);
document.write("<h1>"+ "The Smallest number is "+num1 + "</h1>");
//(Q10.)// */
















/*   //Chapter # 21-25 "STRINGS METHODS"//
//(Q1.)//
var firstName = prompt("Write your first name");
var lastName = prompt("Write your last name");
alert(firstName +" "+ lastName);
//(Q2.)//
var phone = prompt("What is your favourite mobile model?");
var num = phone.length;
document.write("<h2>"+"My favourite phone is: "+ phone +"</h2>");
document.write("<h2>"+"length of string: "+ num +"</h2>" + "<br>"); 
//(Q3.)//
var str = "Pakistani";
var char = str.indexOf("n");
document.write("<h2>"+ "String: " + str + "</h2>");
document.write("<h2>"+ "Index of 'n': " + char + "</h2>" + "<br>");
//(Q4.)//
var x = "Hello World";
var char = x.lastIndexOf("l");
document.write("<h2>"+ "String: " + x + "</h2>");
document.write("<h2>"+ "Last Index of 'l': " + char + "</h2>"+ "<br>");
//(Q5.)//
var str = "Pakistani";
var char = str.charAt(3);
document.write("<h2>"+ "String: " + str + "</h2>");
document.write("<h2>"+ "Character at Index 3: " + char + "</h2>"+ "<br>");
//(Q6.)//
var firstName = "Iqra ";
var lastName = "Rasheed";
var result = firstName.concat(lastName);
document.write("<h2>"+ result +"</h2>" +"<br>");
//(Q7.)//
var city = "Hyderabad";
var z = city.replace("Hyder","Islam");
document.write("<h2>"+ "City: "+ city+ "</h2>");
document.write("<h2>"+"After Replacement: "+ z + "</h2>"+ "<br>");
//(Q8.)//
var message = "Ali and Sami are best friends.They play cricket and football together."
var a = message.replace(/and/g,"&");
document.write("<h2>"+ a +"</h2>"); 
//(Q9.)//
var num = "472";
var x = parseInt("472");
document.write("<h2>"+"Value: "+ num +"</h2>");
document.write("<h2>"+"Type: "+ "string" +"</h2>");
document.write("<h2>"+"Value: "+ x +"</h2>");
document.write("<h2>"+"Type: "+ "number" +"</h2>" + "<br>");
//(Q10.)//
var input = prompt("Write any statement");
var z = input.toUpperCase();
document.write("<h2>"+"User Input: "+ input + "</h2>");
document.write("<h2>"+"Upper Case: "+ z + "</h2>"+ "<br>");
//(Q11.)//
var input = prompt("Which institute is best for english learning?");
document.write("<h2>"+ "User Input: "+ input+ "</h2>");
var firstChar = input.slice(0,1);
var otherChar = input.slice(1);
firstChar = firstChar.toUpperCase();
otherChar = otherChar.toLowerCase();
var input = firstChar + otherChar;
document.write("<h2>"+ "Title Case: "+ input+ "</h2>" + "<br>");
//(Q12.)//
var num = 35.36;
var n = num.toString();
var n = 35.36e2;
document.write("<h2>"+"Number: "+ num + "</h2>");
document.write("<h2>"+"Result: "+ n + "</h2>"+ "<br>");
//(Q13.)//

//(Q14.)//
var array = ["cake","apple pie","cookie","chips","patties"];
var items = prompt("What do you want to order sir/ma'am?");
items = items.toLowerCase();
var bakitems = array.indexOf(items);
if (array.indexOf(items) != -1){
    alert(items+ " is available at index "+bakitems+ " in our bakery");
}
else {
    alert(items + " is not available in our bakery");
}
//(Q15.)//

//(Q16.)//
var a = "University of Karachi";
var u = a.split("");
for (var i = 0; i < u.length; i++) {
 document.write("<h3>"+u[i]+ "</h3>"+ "<br>");
}
 //(Q17.)//
 var x = "Pakistan";
 var y = x.slice(-1);
 document.write("<h2>"+"User Input: "+ x + "</h2>");
 document.write("<h2>"+"Last Character of input: " + y + "</h2>"+"<br>");
//(Q18.)//
var a = "The quick brown fox jumps over the lazy dog.";
var b = a.match(/the/gi);
document.write("<h2>"+"The 2 occurrences are: " + b + "</h2>"+ "<br>");

//Chapter # 26-30 "MATH METHOD"//
//(Q1.)//
var num = prompt("Write a positive Integer");
var a = Math.round(num);
var b = Math.floor(num);
var c = Math.ceil(num);
document.write("<h2>"+ "Number: " +num+ "</h2>");
document.write("<h2>"+ "Round off value: " +a+ "</h2>");
document.write("<h2>"+ "Floor Value: " +b+ "</h2>");
document.write("<h2>"+ "Ceil value: " +c+ "</h2>");
//(Q2.)//
var num = prompt("Write a negative Integer");
var a = Math.round(num);
var b = Math.floor(num);
var c = Math.ceil(num);
document.write("<h2>"+ "Number: " +num+ "</h2>");
document.write("<h2>"+ "Round off value: " +a+ "</h2>");
document.write("<h2>"+ "Floor Value: " +b+ "</h2>");
document.write("<h2>"+ "Ceil value: " +c+ "</h2>"+ "<br>");
//(Q3.)//
var num = -4;
var a = Math.abs(num);
document.write("<h2>"+"The absolute value of "+num+ " is "+a+ "</h2>"+"<br>");
//(Q4.)//
var num = Math.floor((Math.random() * 10) + 1);
var num1 = Math.floor((Math.random() * 10) + 1);
document.write("<h2>"+"Random Dice Value: "+num+"</h2>");
document.write("<h2>"+"Random Dice Value: "+num1+"</h2>"+"<br>");
//(Q5.)//
var head = Math.floor(Math.random() * 3);
var tails = Math.floor(Math.random() * 3);
document.write("<h2>"+head+"<br>"+"Random coin value: Head"+"</h2>");
document.write("<h2>"+tails+"<br>"+"Random coin value: Tails"+"</h2>"+"<br>");
//(Q6.)//
var program = Math.floor((Math.random() * 100) + 1);
document.write("<h2>"+"Random number between 1 and 100: "+program+"</h2>"+"<br>");
//(Q7.)//
var weight = prompt("What is your weight?");
var a = parseFloat(weight);
document.write("<h2>"+ "The weight of user is "+a+ " kilograms"+"</h2>"+"<br>");
//(Q8.)//
var num = Math.floor((Math.random() * 10) + 1);
var user = prompt("Write a number between 1 to 10");
if (user == num) {
    alert("Congragulations!!")
}
else {
    alert("Try Again")
}

//Chapter # 31-34 "DATE METHODS"//
//(Q1.)//
var a = new Date();
document.write("<h2>"+a+ "</h2>"+"<br>");
//(Q2.)//
var d = new Date();
var month = new Array();
month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var n = month[d.getMonth()];
document.write("<h2>"+"Current Month: "+n+ "</h2>"+"<br>");

//(Q3.)//
var d = new Date();
var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var n = weekday[d.getDay()];
var z = n.substring(0,3);
document.write("<h2>"+"Today is: " +z+ "</h2>"+"<br>");
//(Q4.)//
var d = new Date();
var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var n = weekday[d.getDay()];
if (n === ("saturday"||"Sunday")) {
    document.write("<h2>Its Fun Day</h2>")
}
else {
    document.write("<h2>No Fun Day</h2><br>")
}
//(Q5.)//
var d = new Date();
var date = d.getDate();
if (date < 16) {
    document.write("<h2>First Fifteen days of the month.</h2>")
}
else {
    document.write("<h2>Last Days of the month.</h2>")
}
//(Q6.)//
var a = new Date();
document.write("<h2>"+"Current Date "+a+ "</h2>");
var obj = new Date();
var milli = obj.getTime();
document.write("<h2>"+"Elapsed milliseconds since January 1, 1970: "+milli+ "</h2>");
var min = obj.getMinutes();
document.write("<h2>"+"Elapsed minutes since January 1, 1970: "+min+ "</h2>"+"<br>");
//(Q7.)//
var time = new Date();
if (time > 12){
    alert("It's PM")
}
else {
    alert("It's AM")
}
//(Q8.)//
var date = new Date("Dec 31, 2020");
document.write("<h2>"+ "Later Date: "+date+ "</h2>"+"<br>");
//(Q9.)//
var a = new Date("January 1, 2015");
var b = new Date("June 21, 2015");
var diff = b.getTime() - a.getTime();
var diffdays = diff/(1000*60*60*24);
document.write("<h2>"+diffdays+ " days have passed since 1st Ramadan, 2015"+"</h2>"+"<br>");
//(Q10.)//
var x = new Date("January 1, 2015");
var y = new Date("December 05, 2015");
var diff = y.getTime() - x.getTime();
var diffdays = diff/(1000*60);
document.write("<h2>"+"On reference date "+y+ "</h2>");
document.write("<h2>"+diffdays+" seconds had passed since beginning of 2015"+"</h2>"+"<br>");
//(Q11.)//
var time = new Date();
document.write("<h2>"+"Current Date "+time+"</h2>");
var hourAhead = time.setHours(14);
document.write("<h2>"+"1 hour ago, it was "+time+"</h2>"+"<br>");
//(Q12.)//
var today = new Date();
document.write("<h2>"+"Current Date "+today+"</h2>");
var yearsAgo = today.setFullYear(1920);
document.write("<h2>"+"100 years back, it was "+today+"</h2>"+"<br>");
//(Q13.)//
var dob = new Date(prompt("Enter your date of birth"));
var year = prompt("Enter your Birth Year");
var dobMilli = dob.getTime();
var today = new Date();
var todayMilli = today.getTime();
var diff = todayMilli - dobMilli;
var accAge = Math.floor(diff /(1000*60*60*24*30*12));
document.write("<h2>"+"Your age is "+accAge+"</h2>");
document.write("<h2>"+"Your birth year is "+year+"</h2>");
//(Q14.)//
var cusName = "ABC Customer";
var month = "February";
var units = 410;
var charges = 16;
var amount = units * charges;
var latePayment = 350;
var gross = amount + latePayment;
document.write("<h1>K-Electric Bill</h1>");
document.write("<h2>"+"Customer Name: "+cusName+"</h2>");
document.write("<h2>" + "Month: " +month+"</h2>");
document.write("<h2>" + "Number of Units: " +units+"</h2>");
document.write("<h2>" + "Charges per Unit: " +charges+"</h2>");
document.write("<h2>" + "Net Amount Payable (within Due Date): " +amount+"</h2>");
document.write("<h2>" + "Late Payment Surcharge: " +latePayment+"</h2>");
document.write("<h2>" + "Gross Amount Payable (After Due Date): " +gross+"</h2>");

//Chapter # 35-38 "FUNCTION"//
//(Q1.)//
function date(){
    time = new Date()
}
document.write("<h2>"+time+"</h2>");
//(Q2.)//
var a = prompt("What is your first name");
var b = prompt("What is your last name?");
function greeting(){
   document.write("<h2>"+"Hello, "+a+" "+b+"</h2>")
}
greeting();
//(Q3.)//
var y = +prompt("Write a number");
var z = +prompt("Write another number");
var x = y + z;
function add(){
    document.write("<h2>"+x+"</h2>");
}
add();   
//(Q4.)//
function calc(num1,opr,num2){
    if (opr === "+"){
        return num1 + num2
    }
    else if (opr === "-"){
        return num1 - num2
    }
    else if (opr === "*"){
        return  num1 * num2
    }
    else {
        return "Incorrect Answer!"
    }
}
var result = calc(6,"+",8);
var result1 = calc(6, "-",4);
var result2 = calc(7,"*",8);
var result3 = calc(5,"&",8);
document.write("<h3>"+result+"</h3>");
document.write("<h3>"+result1+"</h3>");
document.write("<h3>"+result2+"</h3>");
document.write("<h3>"+result3+"</h3>");
//(Q5.)//
var sumOfSquares = function (num) {
     var i,
     sum = 0;
  
     for (i = 1; i <= num; i++) {
     sum = i * i;
    }
    return sum;
  }
  
var num = parseInt(prompt("Enter a number:"), 10);
document.write("<h2>"+"The square of " + num + " is " +sumOfSquares(num)+"</h2>") ;
//(Q6.)//
function factorial(n){
    if(n == 0 || n == 1){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}
var n = 4;
answer = factorial(n)
document.write("<h2>"+"The factorial of " + n + " is " + answer+"</h2>");
//(Q7.)//

//(Q8.)//
function pythagorean(sideA, sideB){
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
  }
  
document.write("<h2>"+"Hypotenuse: "+pythagorean(4, 3)+"</h2>");
//(Q9.)//
var height = prompt("Enter a height for your area");
var width = prompt("Enter a width for your area");
function area(height,width){
    return height*width
}
document.write("<h2>"+"The Area of Rectangle is "+area(height,width)+"</h2>");
//(Q10.)//
function check_Palindrome(str){
       var cstr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
        var ccount = 0;
        if(cstr==="") {
            console.log("Nothing found!");
            return false;
        }
        if ((cstr.length) % 2 === 0) {
            ccount = (cstr.length) / 2;
        } else {
            if (cstr.length === 1) {
                console.log("Entry is a palindrome.");
                return true;
            } else {
                ccount = (cstr.length - 1) / 2;
            }
        }
        for (var i = 0; i < ccount; i++) {
            if (cstr[x] != cstr.slice(-1-i)[0]) {
                console.log("Entry is not a palindrome.");
                return false;
            }
        }
        console.log("The entry is a palindrome.");
        return true;
    }
    check_Palindrome('radar');
//(Q11.)//
function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' ');
}
document.write("<h2>STRING: the quick brown fox </h2>");
document.write("<h2>"+"OUTPUT: "+titleCase("the quick brown fox"+"</h2>"));
//(Q12.)//
function longestWord(str)
{
  var array = str.match(/\w[a-z]{0,}/gi);
  var result = array[0];

  for(var i = 1 ; i < array.length ; i++)
  {
    if(result.length < array[i].length)
    {
    result = array[i];
    } 
  }
  return result;
}
document.write("<h2> String: Web Development Tutorial </h2>");
document.write("<h2>"+"Output: "+ longestWord("Web Development Tutorial"));
//(Q13)//
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}
document.write("<h2>"+char_count('JSresourceS.com', 'o')+"</h2>");
//(Q14)//
function calcCircumference(radius) {
    var circumference = (Math.PI * 2) * radius;
    var area = (Math.pow(radius, 2)) * Math.PI;
   
    document.write("<h2>"+"The circumference of a circle with a radius of " + radius + " is " + circumference + ".The area for this circle is " + area + "."+"</h2>");
  }
   calcCircumference(37); */









// CHAPTER # 38-44 "Functions, Switch Statements, While... Do-While Loops" //

//(Q1.)//

var a =+ prompt("Enter Number");
var b =+ prompt("Enter power");
function custom(){
    var t = Math.pow(a,b)
    document.write("<h2>"+"The value of a raised to b is "+t+"</h2>");
}
custom()

//(Q2.)//

function isLeapYear() { 
    var year= document.getElementById("year").value;   
    document.getElementById("check").innerHTML = (year % 100 === 0) ? (year % 400 === 0)  : (year % 4 === 0); 
}

//(Q3.)//

var a = 10; 
var b = 11; 
var c = 11; 
var side = (a + b + c)/2;
function area(){
var area =  Math.sqrt(side*((side-a)*(side-b)*(side-c)));
document.write("<h2>"+"Area of Triangle is: "+area+"</h2>");
}
area()

//(Q4.)//

function subject(){
var sub1 =+ prompt("Enter your 1st subject marks");
var sub2 =+ prompt("Enter your 2nd subject marks");
var sub3 =+ prompt("Enter your 3rd subject marks");
function average(){
  var avg = (sub1+sub2+sub3)/3
  document.write("<h2> Average of Marks is "+avg+"</h2>")
}
average()
function percent(){
  var per = ((sub1+sub2+sub3)*100)/300
  document.write("<h2> Percentage of Marks is "+(Math.round(per))+"%"+"</h2>")
}
percent()
}
subject()

//(Q5.)//

function customIndexOf(){
    var str = "Hello world";
    var n = prompt("Enter Character");
    for (var i=0; i<str.length; i++)
    if (str[i] == n){
    document.write("<h2>"+"The Index of character is: "+i+"</h2>")
    break
    }
}
customIndexOf()

//(Q6.)//

var str = prompt("write any word");
function removeVowels(str){
    var vowels = "aieuo";
    var strArr = str.toLowerCase().split("");
    var newArr = strArr.filter(function(letter){
        if(vowels.indexOf(letter)  == -1){
            return letter;
        }
    });
    var string = "";
    newArr.forEach(function(letter){
        string += letter;
    });
    return string;
}
document.write("<h2>"+"The string before removing vowel is "+ str+"</h2>");
document.write("<h2>"+"The string after removing vowel is "+ removeVowels(str)+"</h2>");

//(Q7.)//

function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;
    let haveSeenVowel = false;
  
    for (const letter of str.toLowerCase()) {
      switch (letter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          {
            if (haveSeenVowel) {
              count++;
              haveSeenVowel = false;
            } else {
              haveSeenVowel = true;
            }
            break;
          }
        default:
          haveSeenVowel = false
      }
    }
  
    return count
  }
  
document.write("<h2>"+"The occurences of vowel: "+findOccurrences()+"</h2>");

//(Q8.)//

var distance = prompt("Write the distance between Karachi and Islamabad");
function meter(){
 m =  distance / 1000;
 document.write("<h2>"+"The distance in meters is "+m+"</h2>")
}
meter()
 function centimeter(){
 cm = distance /100000;
  document.write("<h2>"+"The distance in centimeter is "+cm+"</h2>") 
 } 
 centimeter()
 function feet(){
 f = distance / 3280.8;
   document.write("<h2>"+"The distance in feet is "+f+"</h2>")
 }
 feet()
 function inches(){
 inch = distance / 39370;  
 document.write("<h2>"+"The distance in inch is "+inch+"</h2>")
 }
 inches()

 //(Q9.)//

var time = prompt("Mention your working hours")
var overTimePerHour = 12;
function overTime(){
  time * overTimePerHour;
if (hours > 40) {
  document.write("<h2>"+"Overtime pay of employee is "+hours+"</h2>")
}
else{
  document.write("<h2>Sorry No Pay</h2>")
}
}
overTime()

//(Q10.)//

var cash = prompt("Write the amount which you want to withdraw");
function currency() {
  var hundred = parseInt(cash / 100);
  var fifty = parseInt((cash % 100) / 50);
  var ten = parseInt(((cash % 100) % 50) / 10);
  document.writeln("<h2>"+"You will have " + hundred+ " hundred notes " +fifty+ " fifty notes " +ten+" ten notes "+"</h2>");

}
currency();


//Chapter # 43-48 "EVENTS"//

//(Q1.)//

function popUp(){
  alert("Hello World!");
}

//(Q2.)//

function message(){
  alert("Thanks for purchasing a mobile phone from us!!!");
}

//(Q3.)//

function delRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("deleteBtn").deleteRow(i);
}

//(Q4.)//

function mouseOver(img1){
  img1.src="flower2.jpg"
}
function mouseOut(img2){
  img2.src="flower1.jpg"
}

//(Q5.)//

var button = document.getElementById("increase"),
count = 0;
function increase(){
  count += 1;
  button.innerHTML = "Increase :"+" "+count;
}

//CHAPTER # 49-52 "EVENTS"//

//(Q1.)//

var modal = document.getElementById('id01');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//(Q2.)//

function readMore(){
  var text = 'Because flowers bloom at varying times of the year, and some plants are annual, dying each winter, the design of flower gardens can take into consideration maintaining a sequence of bloom and consistent color combinations through varying seasons.'
  var para = document.getElementById("para")
  para.innerHTML = text
}

//(Q3.)//

//CHAPTER # 53-57 "EVENTS"//

function showImage(e){
  var modalImage = document.getElementById("modalImage");
  modalImage.src = e.src;
}


//CHAPTER # 58-63 "DOM"//

//(Q1.)//

// i.
var a = document.getElementById("main-content");
// ii.
var p = document.getElementsByTagName("p");
// iii.
for (var i=0; i<p.length;i++){
  var content = p[i].innerHTML;
  console.log(content);
}
// iv.
var firstName = document.getElementById("first-name");
firstName.value = "Iqra";
// v.
var lastName = document.getElementById("last-name");
lastName.value = "Rasheed";
// vi.
var emailAddress = document.getElementById("email");
emailAddress.value = "example123@gmail.com"

//(Q2.)//

// i.
//var a = document.getElementById("form-content");
//console.log(a.nodeType);
// ii.
var lastName = document.getElementById("last-name");
console.log(lastName.childNodes[0].nodeType);
// iii.
var lastName = document.getElementById("last-name");
console.log(lastName.childNodes[0]);
// iv.
//var app = document.getElementById("main-content");
//console.log(app.firstChild.lastChild);
// v.
var lastName = document.getElementById("last-name");
console.log(lastName.nextSibling.previousSibling)
// vi.
var emailAddress = document.getElementById("email");
console.log(emailAddress.parentNode.nodeType);











