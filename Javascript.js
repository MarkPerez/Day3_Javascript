//Event Listener for add to start button
var event1 = document.getElementById("button1");
event1.addEventListener('click', activate, false);

function activate(){
    
    //create a new array
    var colours = ["Red", "Blue", "Green", "Yellow", "Brown", "Purple", "Pink", "Orange", "Black", "White"];
    
    //create array length variable
    var arrayLength = colours.length;
    
    var text = "";
    
    //create loop for arrays
    for (i = 0; i < arrayLength; i++){
        text+= "<br>" + colours[i];
        }
    
    document.getElementById("demo").innerHTML = text;
    
}
