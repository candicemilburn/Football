"use strict"

console.log("hello is it me you're looking for?")


//these are out teams
let teams = [
    {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
    {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
    {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
    {code:"KAN", name:"Kansas City Chiefs", plays:"Kansas City, MO"},
];

//this is out window.onlaod function, tuns code once the dom is loaded

window.onload = function(){

    initDropdown();
}

function initDropdown(){

    //get dropdown from html doc and assign it to a variable


 let theDropdown = document.querySelector("#footballSelect");

//  get the total num of teams from the loop let teams = [
//    {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
//    {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
//    {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
//    {code:"KAN", name:"Kansas City Chiefs", plays:"Kansas City, MO"},
//    ];
let numberOfTeams = teams.length;

 for(let i = 0; i < numberOfTeams ; i++){

//lets create a new option 
    let newOption = document.createElement("option");
    
    //set the textContrnt for out new option, what the user sees
    newOption.textContent = teams[i].name
    
    //set the val for the option
    newOption.value = teams[i].code

    //add this option to the dropdown 
    theDropdown.appendChild(newOption);

 }

}