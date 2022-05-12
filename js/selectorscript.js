var mainHeading =document.getElementById("main-heading");
mainHeading.innerText = "js selectors";



var oddRows =document.getElementsByClassName("odd");
console.log(oddRows);

// oddRows[0].style.background = "yellow";
// oddRows[1].style.background = "green";
// oddRows[2].style.background = "blue";
for(var i=0;i<oddRows.length;i++){
    oddRows[i].style.background = "orange";
}


var subHeddings=document.getElementsByTagName("h2");
console.log(subHeddings);
for(var j=0;j<subHeddings.length;j++){
    subHeddings[j].style.color = "green";
}


var list =document.querySelectorAll(".list");
console.log(list);
list[0].innerHTML=list[0].innerHTML + "<li>list item 4</li><li>list item 5</li>";