var today = moment();
$("#currentDay").text(today.format("D MMM YYYY"));



var textInput = document.querySelector('#textInput');
var saveButton = document.querySelector("#save");

saveButton.addEventListener("click", function(event) {


    event.preventDefault();
});

var data = {
    textInput : textInput.value.trim(),
    
};

console.log(data);

localStorage.setItem("data", data);

var textInput = localStorage.getItem("data");























// var textInput = document.querySelector("#input")
// var addText = document.querySelector("#timeText");
// var getText = document.querySelector(".enterText");
// var saveButton = document.querySelector("#save");

// var h1 = document.querySelector("h1");
// var note = document.querySelector(".dataStored");
// var saved = document.querySelector(".p");



// // Event Listener

// // input.addEventListener("#save", function(event) {
// //     event.preventDefault();

// // });

// saveButton.addEventListener('click', function(event){
//     event.preventDefault();

//     // localStorage.setItem('#timeText', timeText.value);
//     // nameDisplayCheck();
// })

// function nameDisplayCheck() {
//     if (localStorage.getItem('text')) {
//         var text = localStorage.getItem(text);
//         h1.textContent = `Event Saved ${text}!`;
//         // saved.textContent = `Now saved to local storage`;

//     }
// }
// console.log(localStorage.getItem('text'))


// // checking the time against the time blocks

// // var output = document.getElementById("9");
// //       function compareDates( date1, date2 ) {
// //          if ( date1.getTime() < date2.getTime() ) {
// //             output.innerHTML += date1 + " is behind the " + date2 + " <br/> ";
// //          } else if ( date1 > date2 ) {
// //             output.innerHTML += date2 + " is behind the " + date1 + " <br/> ";
// //          } else {
// //             output.innerHTML += date1 + " is same as " + date2 + " <br/> ";
// //          }
// //       }

// //     // calling the function for different expressions
// //     output.innerHTML += "<br/>";
// //     let date1 = new Date();
// //     let date2 = new Date(2012, 11, 21);
// //     compareDates( date1, date2 );
// //     output.innerHTML += "<br/>";
// //     date2 = new Date();
// //     compareDates( date1, date2 );


// // local storage test

// var user = {
//     input: textInput.value.trim(),


// };

// console.log(user);
// localStorage.setItem("user", JSON.stringify(user));

//  // get most recent submission
//  var lastUser = localStorage.getItem("user");
//  usertextInputSpan.textContent = input.input;




//     // console.log(date1, date2);
