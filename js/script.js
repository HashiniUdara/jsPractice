// appear in the console when load the page
console.log('hai from js file'); 

// var firstName='nimal';
// var age=25;

var firstName='nimal',
    age=25,
    marks=65.2, //number data type
    married=false,
    middleName=null,
    lastName;//undefined data type

//ARRAY

var array=['car',true,244,firstName];
console.log(array[0]);

var cars=[];
var bikes=new Array('honda','yamaha','ct100');
console.log(bikes);

//insert item to the end
bikes.push("newBike");
console.log(bikes);

//remove element from the end
bikes.pop();
console.log(bikes);

//remove element from the start
bikes.shift();
console.log(bikes);

//insert into the start
bikes.unshift('honda');
console.log(bikes);

//search for the element and if exist, return the position of a element
//otherwise return -1
console.log(bikes.indexOf('yamaha'));

//OBJECT

var student1=new Object();
var student2={};

var student={'firstName':'sanju','age':24,'district':'kurunegala'};
console.log(student);

student1.school="ICC";
console.log(student1);

student.smile=function(){alert("he he he he he he");}
student.smile();


//STRING CONCATENATING

var fullname='amal'+' '+'perera';
var x=5+'star';

//if else
(6>3)?alert('yes'):alert('no');


//SWITCH statement
var day=6;
switch(day){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
    case 7:
        console.log(' this is weekend!ENJOY');
        break;
    default:
        console.log("invalid day value");
}


//FOR loop
var days=['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
document.write("<br>" + days[0] + "<br><br>");
for(var i=0;i<7;i++){
    document.write(days[i] + "<br>");
}

//WHILE loop
var j=0;
while(j<7){
    document.write(j+1 +" " + days[j] + "<br>");
    j++;
}

//DO WHILE loop
var k=0;
do{
    document.write(k+1 +" -> " + days[k] + "<br>");
    k++;
}while(k < 7);


//function
function printDate(){
    document.write("<br>" + Date());
}
printDate();

function printValue(price,qty){
    document.write("<br>" + price*qty);
}
printValue(15,2);

function getValue(price,qty){
    return(price*qty);
}
var value=getValue(25,5);
alert(value);

//scope of a varible
var Name="hashini";
var Age=24;

document.write("<br>"+Name);
document.write("<br>"+Age);

function printName(){
    var Name="sanju";
    Age=23;

    document.write("<br><br>"+Name);
    document.write("<br>"+Age);
}
printName();
document.write("<br><br>"+Name);
document.write("<br>"+Age);
