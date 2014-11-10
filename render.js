var Firebase = require('firebase');
var fb = new Firebase("https://robrbecker.firebaseio.com/");
var pagesRenderedRef = fb.child('pagesRendered');

// An example server that updates progress as it goes
// changes to the pagesRendered property are automatically
// synced to all clients

// set the initial progress to zero (for this demo)
pagesRenderedRef.set(0);

function updateProgressTo(x) {
    x = x || 0;
    if (x > 100) {
        process.exit();
    } else {
        pagesRenderedRef.set(x);
        setTimeout(function() { updateProgressTo(x+1); }, 100 );
    }
}

setTimeout(updateProgressTo, 400);