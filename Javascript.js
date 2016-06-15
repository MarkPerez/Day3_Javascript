//Event Listener for calculate button
var event1 = document.getElementById("button1");
event1.addEventListener('click', activate, false);

function activate(){

    //create a new empty array
    var items = [];
    
    //populate array with user input
    items[0] = document.getElementById("input1").value;
    items[1] = document.getElementById("input2").value;
    items[2] = document.getElementById("input3").value;

       
    document.getElementById("demo").innerHTML = items;
} 
    
