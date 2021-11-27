var todaysDate= moment().format('dddd  MM/DD, YYYY, h:mm:ss P');
var currentHour= moment().format ('HH');
var save= document.querySelector ('.saveBtn');
var toDo=document.getElementById("To Do");
var time=document.querySelector(".time");

var nine= document.getElementById ("9")
var ten= document.getElementById("10")
var eleven= document.getElementById("11")
var twelve= document.getElementById("12")
var thirteen= document.getElementById ("13")
var fourteen= document.getElementById("14")
var fifteen= document.getElementById("15")
var sixteen= document.getElementById ("16")
var seventeen= document.getElementById("17")

// console.log (todaysDate)
console.log (currentHour)

// var hours= [
//     "9",
//     "10",
//     "11",
//     "12",
//     "13",
//     "14",
//     "15",
//     "16",
//     "17",
// ]
document.getElementById ("currentDay").innerHTML=(todaysDate)

//text area past, present, future background color else if statements

if (nine<currentHour){
    $("#9-AM-To-Do").addClass("future")}
else if (nine===currentHour){
    $("#9-AM-To-Do").addClass("present")}
else if (nine>currentHour){
    $("#9-AM-To-Do").addClass("past")}

if (ten<currentHour){
    $("#10-AM-To-Do").addClass("future")}
else if (ten===currentHour){
    $("#10-AM-To-Do").addClass("present")}
else if (ten>currentHour){
    $("#10-AM-To-Do").addClass("past")}

if (eleven<currentHour){
    $("#11-AM-To-Do").addClass("future")}
else if (eleven===currentHour){
    $("#11-AM-To-Do").addClass("present")}
else if (eleven>currentHour){
    $("#11-AM-To-Do").addClass("past")}
      
if (twelve<currentHour){
    $("#12-PM-To-Do").addClass("future")}
else if (twelve===currentHour){
    $("#12-PM-To-Do").addClass("present")}
else if (twelve>currentHour){
    $("#12-PM-To-Do").addClass("past")}
  
if (thirteen<currentHour){
    $("#1-PM-To-Do").addClass("future")}
else if (thirteen===currentHour){
    $("#1-PM-To-Do").addClass("present")}
else if (thirteen>currentHour){
    $("#1-PM-To-Do").addClass("past")}

if (fourteen<currentHour){
    $("#2-PM-To-Do").addClass("future")}
else if (fourteen===currentHour){
    $("#2-PM-To-Do").addClass("present")}
else if (fourteen>currentHour){
    $("#2-PM-To-Do").addClass("past")}

if (fifteen<currentHour){
    $("#3-PM-To-Do").addClass("future")}
else if (fifteen===currentHour){
    $("#3-PM-To-Do").addClass("present")}
else if (fifteen>currentHour){
    $("#3-PM-To-Do").addClass("past")}
  
if (sixteen<currentHour){
    $("#4-PM-To-Do").addClass("future")}
else if (sixteen===currentHour){
    $("#4-PM-To-Do").addClass("present")}
else if (sixteen>currentHour){
    $("#4-PM-To-Do").addClass("past")}

if (seventeen<currentHour){
    $("#5-PM-To-Do").addClass("future")}
else if (seventeen===currentHour){
    $("#5-PM-To-Do").addClass("present")}
else if (seventeen>currentHour){
    $("#5-PM-To-Do").addClass("past")}
   
//set to local storage
    function storeData(){
        localStorage.setItem(time, toDo);

    }

    save.addEventListener("click", storeData)
    console.log (save)
    // THEN each time block is color-coded to indicate whether it is in the past, present, or future
    // WHEN I click into a time block
    // THEN I can enter an event
    // WHEN I click the save button for that time block
    // THEN the text for that event is saved in local storage
    // WHEN I refresh the page
    // THEN the saved events persist