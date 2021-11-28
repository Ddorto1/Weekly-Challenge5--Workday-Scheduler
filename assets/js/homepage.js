var todaysDate= moment().format('dddd  MM/DD, YYYY, h:mm:ss P');
var currentHour= moment().format ('HH');

var nine= document.getElementById("9")
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


document.getElementById ("currentDay").innerHTML=(todaysDate)

//text area past, present, future background color else if statements

if (9>currentHour){
    $("#9-AM-To-Do").addClass("future")}
else if (9===currentHour){
    $("#9-AM-To-Do").addClass("present")}
else if (9<currentHour){
    $("#9-AM-To-Do").addClass("past")}

if (10>currentHour){
    $("#10-AM-To-Do").addClass("future")}
else if (10===currentHour){
    $("#10-AM-To-Do").addClass("present")}
else if (10<currentHour){
    $("#10-AM-To-Do").addClass("past")}

if (11>currentHour){
    $("#11-AM-To-Do").addClass("future")}
else if (11===currentHour){
    $("#11-AM-To-Do").addClass("present")}
else if (11<currentHour){
    $("#11-AM-To-Do").addClass("past")}
      
if (12>currentHour){
    $("#12-PM-To-Do").addClass("future")}
else if (12===currentHour){
    $("#12-PM-To-Do").addClass("present")}
else if (12<currentHour){
    $("#12-PM-To-Do").addClass("past")}
  
if (13>currentHour){
    $("#1-PM-To-Do").addClass("future")}
else if (13===currentHour){
    $("#1-PM-To-Do").addClass("present")}
else if (13<currentHour){
    $("#1-PM-To-Do").addClass("past")}

if (14>currentHour){
    $("#2-PM-To-Do").addClass("future")}
else if (14===currentHour){
    $("#2-PM-To-Do").addClass("present")}
else if (14<currentHour){
    $("#2-PM-To-Do").addClass("past")}

if (15>currentHour){
    $("#3-PM-To-Do").addClass("future")}
else if (15===currentHour){
    $("#3-PM-To-Do").addClass("present")}
else if (15<currentHour){
    $("#3-PM-To-Do").addClass("past")}
  
if (16>currentHour){
    $("#4-PM-To-Do").addClass("future")}
else if (16===currentHour){
    $("#4-PM-To-Do").addClass("present")}
else if (16<currentHour){
    $("#4-PM-To-Do").addClass("past")}

if (17>currentHour){
    $("#5-PM-To-Do").addClass("future")}
else if (17===currentHour){
    $("#5-PM-To-Do").addClass("present")}
else if (17<currentHour){
    $("#5-PM-To-Do").addClass("past")}
   
   
    var save= document.querySelector ('#saveBtn');
    var toDo=document.querySelector(".To-Do").innerHTML;
    var time=document.querySelector(".time").innerHTML;
    // console.log (time, toDo);


    // var hours= {
    // "9":[],
    // "10":[],
    // "11":[],
    // "12":[],
    // "13":[],
    // "14":[],
    // "15":[],
    // "16":[],
    // "17":[],
    // }
//set to local storage
    function storeData(){
        localStorage.setItem(time, JSON.stringify(toDo))

    }

console.log (storeData)
    save.addEventListener("click", storeData)
    
    // WHEN I click the save button for that time block
    // THEN the text for that event is saved in local storage
    // WHEN I refresh the page
    // THEN the saved events persist