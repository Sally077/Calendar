var today = moment();
$("#currentDay").text(today.format("D MMM YYYY"));

var form = document.querySelector("form")
var addText = document.querySelector(".textInput");
var getText = document.querySelector(".enterText");
var saveBtn = document.querySelector("#savedata");

var h1 = document.querySelector("h1");
var note = document.querySelector(".dataStored");
var saved = document.querySelector(".p");




// Event Listener

form.addEventListener("#save", function(event) {
    event.preventDefault();

// });

saveBtn.addEventListener('click', function(){

    localStorage.setItem('text', enterText.value);
    nameDisplayCheck();
})

function nameDisplayCheck() {
    if (localStorage.getItem('text')) {
        var text = localStorage.getItem(text);
        h1.textContent = `Event Saved ${text}!`;
        // saved.textContent = `Now saved to local storage`;

    }
}
console.log(localStorage.getItem('text'))


// checking the time against the time blocks

var output = document.getElementById("9");
      function compareDates( date1, date2 ) {
         if ( date1.getTime() < date2.getTime() ) {
            output.innerHTML += date1 + " is behind the " + date2 + " <br/> ";
         } else if ( date1 > date2 ) {
            output.innerHTML += date2 + " is behind the " + date1 + " <br/> ";
         } else {
            output.innerHTML += date1 + " is same as " + date2 + " <br/> ";
         }
      }

    // calling the function for different expressions
    output.innerHTML += "<br/>";
    let date1 = new Date();
    let date2 = new Date(2012, 11, 21);
    compareDates( date1, date2 );
    output.innerHTML += "<br/>";
    date2 = new Date();
    compareDates( date1, date2 );

})

    console.log(compareDates);
