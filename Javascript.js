//Event Listener for add to start button
var event1 = document.getElementById("button1");
event1.addEventListener('click', activate, false);

//Event Listener for add to start button
var event2 = document.getElementById("button2");
event2.addEventListener('click', unshift, false);

//Event Listener for add to end button
var event3 = document.getElementById("button3");
event3.addEventListener('click', push, false);

//Event Listener for remove from start button
var event4 = document.getElementById("button4");
event4.addEventListener('click', shift, false);

//Event Listener for remove from end button
var event5 = document.getElementById("button5");
event5.addEventListener('click', pop, false);

//create a new empty array
var colours = ["Red", "Blue", "Green", "Yellow"];


function activate(){
    //display array on HTML page
    document.getElementById("demo").innerHTML = "<br>" + colours;
    
}

function unshift(){
    
    //add item to start of array
    colours.unshift(document.getElementById("input1").value);
    
}

function push(){
    
    //add item to end of array
    colours.push(document.getElementById("input1").value);

}

function shift(){
    
    //remove item from start of array
        colours.shift();

}

function pop(){
    
    //remove item from end of array
    colours.pop();

}
