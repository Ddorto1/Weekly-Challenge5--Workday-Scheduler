var todaysDate= moment().format('dddd  MM/DD, YYYY, h:mm:ss P');
var currentHour= moment().format ('h');
var save= document.getElementsByClassName ('saveBtn');
var toDo=document.getElementById("To Do")

var nine= document.getElementById ("9")
var ten= document.getElementById("10")
var eleven= document.getElementById("11")
var twelve= document.getElementById("12")
var thirteen= document.getElementById ("13")
var fourteen= document.getElementById("14")
var fifteen= document.getElementById("15")
var sixteen= document.getElementById ("16")
var seventeen= document.getElementById("17")

console.log (todaysDate)
console.log (currentHour)

var hours= [
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
]
document.getElementById ("currentDay").innerHTML=(todaysDate)
