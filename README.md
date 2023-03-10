# <Multi Creation of Daily Planner App>

## Description

In this project the brief is to create a daily schedule planner. Although the brief is very open ended in terms of choice frameworks and coding conventions there are specific criteia that needs to be achieved to meet the user needs. Below is a list of the set brief that needs to be achieved to meet the user requirments.

Task 1 - Display the current day at the top of the calendar when a user opens the planner.
Task 2 - Present timeblocks for standard business hours when the user scrolls down.
Task 3 - Color-code each timeblock based on past, present, and future when the timeblock is viewed.
Task 4 - Allow a user to enter an event when they click a timeblock.
Task 5 - Save the event in local storage when the save button is clicked in that timeblock.
Task 6 - Persist events between refreshes of a page.


Pseudocode
add current date from moments.js
create query selector for text labels and buttons

create event listener linked to save button to save text to local storage

add set local storage
add get local storage
create if statements linked to hours of the day using moments that colour co-ordinate time blocks 


Achievements

I was able to partially fullfill the objectives in the brief. I was able to create a series of time blocks using bootstrap. I downloaded the moment code to apply time/date functions.
I was able to pass through data into the local storage. I was able to successfully enter text into the appointment area.

Issues

I struggled a lot with bootstrap and trying to get the blocks in the right position. I tried to add a text area but was unable to aligh this with the time and the save button on the same row so eventually settled for an input which allowed me to enter text. I tried to apply lots of different documents looking at the bootstrap documentation to try and make my time block height match up with the save button but was unable to get this to work.


I managed to get the moment current date working at the top of the organiser.

I spent a lot of time trying to figure out how to work the local storage and even though I feel like I have a much better understanding of how this code works I was still unable to pass through the text onto the application area in the browser even though I used the JSON stringify method and played with this a lot. It did not fully work and it would not remain when I refreshed my page.

I tried a couple of different codes for the if statement to try and colour code the time blocks I think that the issue could have been down to either not linking to the hour text properly in the HTML or not applying the styling correctly.

Even though I spent a lot of time and many hours trying to figure this out I think that I gained more experience of understanding query selectors and local storage and was able to work more methodically this time round.

Improvements

If given more time I would like to have fixed the local storage and got the text to save and remain when refreshed. To have created a function that coloured the time blocks and made the look of my day planner more aesthetically pleasing.



 
   


## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

My code does not currently need an install and can be viewed directly through the URL.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative file path, add it to your README using the following syntax:


<img src="/images/calendar.jpg">


## Credits

There were no collaborators in this task.


I followed the bootcamp zoom tutorial recordings from week 6 on local storage . 




<!-- Remove old links and replace with new ones as we go along -->

I looked at the following video tutorial on how to save inputs to local storage by R3HAB Media
https://www.youtube.com/watch?v=6PsBeh2MgYc


I looked at the following website tutorial on w3schools
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_localstorage

These tutorials from netninja helped me to understand how to apply some of the features in bootstrap
https://www.youtube.com/watch?v=iUCyU_U0J2E

I had lots of problems resizing with bootstrap and used this guide to help me with the width
https://mdbootstrap.com/how-to/bootstrap/change-input-width


I looked at Tutorialspoint for documentation on how to work out time differences
https://www.tutorialspoint.com/How-to-compare-two-dates-with-JavaScript#:~:text=date%20and%20time.-,Moment.,difference%20between%20the%20two%20dates.

I tried the following text from w3 schools to try and add a scroll bar as part of the brief
https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_scrollspy2&stacked=h

code for adding CSS scroll bar (did not apply to the area below the jumbotron)
https://www.geeksforgeeks.org/how-to-change-the-position-of-scrollbar-using-css/

How to save to local storage using objects and stringify
https://www.youtube.com/watch?v=AUOzvFzdIk4

I looked at more local storage videos because I became confused with all the different query selectors and naming.
https://www.youtube.com/watch?v=fYTTUBa-lPc

Support with colour coding the time blocks I looked at the following and edited elements
https://stackoverflow.com/questions/62925657/can-anyone-help-me-colorcode-my-time-blocks-using-jquery


## License

I have chosen a MIT license for this project
---

## Badges

I  have 2 git hub badge acheivements pullshark x2 and YOLO

## Features

No additional features added as main focus was working on a solution

## How to Contribute

N/A

## Tests

I have created a series of tests as I went along and took screenshots of some of the tests I tried when I ran my code.

Test 1 Testing to see if the date displayed on the web browser matched up after applying the moment code

Test 2 testing to see how the time blocks are shown after applying various bootstrap frameworks and styles

Test 3 Checking that the colour will show grey if the time has passed

Test 4 Checking that the colour will show  green if the time has not yet occured 


Test 5 Checking that the colour will show  red when time is currently displayed


Test 6 Checking to see if the hour matches the current time

Test 7 checking to see if a text input is saved to local storage

Test 8 Checking to see if data remains when data is refreshed in the browser



