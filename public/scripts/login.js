window.addEventListener( "load", function () {
    function sendData() {
        const xhr = new XMLHttpRequest();

        // Bind the FormData object and the form element
        const FD = new FormData( form );

        // Define what happens on successful data submission
        xhr.addEventListener( "load", function(event) {
            alert( event.target.responseText );
        } );

        // Define what happens in case of error
        xhr.addEventListener( "error", function(event)  {
            alert( 'Oops! Something went wrong.' );
        } );

        // Set up our request
        xhr.open( "POST", "https://example.com/cors.php" );

        // The data sent is what the user provided in the form
        xhr.send( FD );
    }

    // Access the form element...
    let form = document.getElementById( "myForm" );

    // ...and take over its submit event.
    form.addEventListener( "submit", function ( event ) {
        event.preventDefault();

        sendData();
    } );
} );