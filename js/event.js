var myButton=document.getElementById("clickme");
document.addEventListener("click",doSomething)

function doSomething(event){
    console.log(event);
}


document.addEventListener("keyup" , function(event){
    console.log(event.key);
    console.log(event.keyCode);
})