
var rounds = 1;
var addBtn = document.getElementById("add-round");
var subBtn = document.getElementById("sub-round");
var roundBox = document.getElementById("roundsBox");
var player1Input = document.getElementById("player1-input");
var player2Input = document.getElementById("player2-input");
var playBtn = document.getElementById('play-btn');
var player1Name, player2Name;
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

player1Input.addEventListener('blur', ()=>{
  player1Name = player1Input.value;
  localStorage.setItem('player1', player1Name);
})

player2Input.addEventListener('blur', ()=>{
  player2Name = player2Input.value;
  localStorage.setItem('player2', player2Name);
})

playBtn.addEventListener('click', ()=>{
    localStorage.setItem('rounds', rounds);
})
