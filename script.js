var today = moment();
$("#currentDay").text(today.format("D MMM YYYY"));

var form = document.querySelector("form")
var getText = document.querySelector(".enterText");
var saveBtn = document.querySelector("#savedata");

var h1 = document.querySelector("h1");
var note = document.querySelector(".dataStored");
var p = document.querySelector(".Saved");




// Event Listener

form.addEventListener("save", function(event) {
    event.preventDefault()

});

saveBtn.addEventListener('click', function(){

    localStorage.setItem('text', enterText.value);
    nameDisplayCheck();
})

function nameDisplayCheck() {
    if (localStorage.getItem('text')) {
        var text = localStorage.getItem(text);
        h1.textContent = `Event Saved`
        saved.textContent = `Now saved to local storage`;

    }
}console.log(localStorage.getItem('txt'))






