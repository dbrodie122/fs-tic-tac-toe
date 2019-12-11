const player = document.getElementById('player');

function changePlayer() {
  if (player.innerText === 'X') {
    player.innerText = 'O';
  } else {
    player.innerText = 'X';
  }
}
changePlayer();
