import View from "./ttt-view.js"; // require appropriate file
import Game from "../ttt_node/game.js"; // require appropriate file


document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  const ttt = document.querySelector('.ttt');
  const view = new View(new Game(), ttt); 
});


