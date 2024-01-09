let daysButton = document.querySelector( ".days-btn" );
let daysDropDown = document.querySelector( ".days-dropdown" );
let daysGetButtons = document.querySelectorAll( ".days-getter-buttons" );

let submitButton = document.querySelector( ".submit-btn" );
let form = document.querySelector( ".form" );

daysButton.addEventListener( "click", () => {
  daysDropDown.classList.toggle( "days-dropdown-2" )
} )

daysGetButtons.forEach( button => {
  button.addEventListener( "click", function ( el ) {
    console.log( el.target.value );

    daysButton.textContent = el.target.value
    daysDropDown.classList.remove( "days-dropdown-2" )

  } );
} );

// form.addEventListener( 'submit', ( event ) => {
//   event.preventDefault();

//   const inputValue = document.getElementById( 'name' ).value;
//   const inputValue2 = document.getElementById( 'days' ).value;
//   const inputValue3 = document.getElementById( 'time' ).value;
//   const inputValue4 = document.getElementById( 'reminder' ).value;

//   console.log( 'Input value:', inputValue );
//   console.log( 'Input value:', inputValue2 );
//   console.log( 'Input value:', inputValue3 );
//   console.log( 'Input value:', inputValue4 );
// } );

document.addEventListener( 'DOMContentLoaded', () => {
  const form = document.querySelector( '.form' );

  form.addEventListener( 'submit', ( event ) => {
    event.preventDefault();

    const inputValue = document.getElementById( 'name' ).value;
    const inputValue2 = document.getElementById( 'day' ).value;
    const inputValue3 = document.getElementById( 'time' ).value;
    const inputValue4 = document.getElementById( 'reminder' ).value;

    console.log( 'Input value:', inputValue );
    console.log( 'Input value:', inputValue2 );
    console.log( 'Input value:', inputValue3 );
    console.log( 'Input value:', inputValue4 );
  } );
} );
