// adding the current date to the top of the day planner

var today = moment();
$("#currentDay").text(today.format("D MMM YYYY"));

// adding query selector elements to grab when applying code/styles

var textInput = document.querySelectorAll('#textInput');
var saveButton = document.querySelector("#save");
var colorcode = document.querySelector(".colorcode");


// event listener when clicked after adding text the button press
//  should save to local storage

textInput.value = localStorage.getItem("data");


saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    localStorage.setItem("data", event.target.value);
});

var data = {

    textInput : textInput.value.trim(),
    
};

console.log(data);

localStorage.setItem("data", JSON.stringify(data));

var textInput = JSON.parse(localStorage.getItem("data"));


// colour code blocks
var colorcode = document.getElementsByClassName("colorcode");

var currentHour = (new Date()).getHours();
$('.colorcode')
  .each(function(){
    var val = parseInt($(this).prop('id'));
    if(val > currentHour && val < currentHour + 6){
      $(this).css('background-color','Red');
    }else if(val < currentHour && val > currentHour - 6){
      $(this).css('background-color','grey');
    }else if(val === currentHour){
      $(this).css('background-color','Green');
    }
  });








