let daysDropDown = document.querySelector( ".days-dropdown" );
let daysGetButtons = document.querySelectorAll( ".days-getter-buttons" );

let doneDiv = document.querySelector( ".done-div");

let submitButton = document.querySelector( ".submit-btn" );
let form = document.querySelector( ".form" );

form.addEventListener( "submit", function ( e ) {
  e.preventDefault();

  let nameValue = document.getElementById( "name" ).value;
  let daysValue = document.getElementById( "selectform" ).value;
  let timeValue = document.getElementById( "time" ).value;
  let reminderValue = document.getElementById( "reminder" ).value;

  console.log( "Name:", nameValue );
  console.log( "Days:", daysValue );
  console.log( "Time:", timeValue );
  console.log( "Reminder:", reminderValue );

  doneDiv.classList.add("done-div2")
} );