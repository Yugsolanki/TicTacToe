import Highway from '@dogstudio/highway';

// Import Transitions
import Fade from './fade.js';
//import Overlap from './overlap.js';

// Call Highway.Core once.
const H = new Highway.Core({
  transitions: {
    default: Fade,
  }
});


/*Player.html*/
var rounds = 1;
var addBtn = document.getElementById("add-round");
var subBtn = document.getElementById("sub-round");
var roundBox = document.getElementById("rounds_box");
roundBox.innerHTML = rounds;

addBtn.addEventListener("click", function() {
  if (rounds<10) {
    rounds++;
    roundBox.innerHTML = rounds;
  }
});
  
subBtn.addEventListener("click", function() {
  if (rounds>1) {
    rounds--;
    roundBox.innerHTML = rounds;
   }
});


//----------COUNTDOWN
