//Event Listener for check button
var event1 = document.getElementById("button1");
event1.addEventListener('click', activate, false);

function activate(){
    
    //create a new array
    var countries = ["England", "France", "Italy", "Mexico", "Poland", "Russia", "China", "Greece", "Egypt", "India"];
    
    //create array length variable
    var arrayLength = countries.length;
        
    var userInput = document.getElementById("input1").value;
    
    //create indexof() function
    var searchCountry = countries.indexOf(userInput);
    
    var text = "";
    
    //Create message depending on whether country was in array
    if (searchCountry == -1) {
        text = "This country is not present in the array.";
    }
    
    else {
        text = "This country is present at position " + (searchCountry + 1) + " in the array.";
    }
    
    document.getElementById("demo").innerHTML = text;
    
}
