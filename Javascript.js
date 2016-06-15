//Event Listener for add to start button
var event1 = document.getElementById("button1");
event1.addEventListener('click', add, false);

//Event Listener for add to start button
var event2 = document.getElementById("button2");
event2.addEventListener('click', activate, false);

//create a new empty array
var colours = ["Red", "Blue", "Green", "Yellow"];


function add(){
    //add to an array at a specific index point
    var userInputColour = document.getElementById("input1").value;
    var userInputNumber = parseInt(document.getElementById("input2").value); 
    colours.splice(userInputNumber - 1, 0, userInputColour);
    
}

function activate(){
    
    //display array on HTML page
    document.getElementById("demo").innerHTML = colours;
    
}
