//Event Listener for calculate button
var event1 = document.getElementById("button1");
event1.addEventListener('click', activate, false);

function activate(){

    //create a new empty array
    var items = ["This", "is", "an", "array"];
    
    //add new item to array
    items.push(document.getElementById("input1").value);
    
    //display array on HTML page
    document.getElementById("demo").innerHTML = items + "<br>" + "The array length is: " + items.length;

}
