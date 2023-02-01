// import { SingleEntryPlugin } from "webpack";

class View {
  constructor(game, el) {
    this.game = game;
    this.el = el; 
    this.setupBoard();
    this.handleClick = this.handleClick.bind(this);
    this.bindEvents(); 
  }

  setupBoard() {
    // [[], [], []], [[], [], []], [[], [], []];
    const grid = document.createElement('ul');
    for (let row = 0; row < 3; row++) {
      for(let col = 0; col < 3; col++) {
        let li = document.createElement('li'); 
        li.dataset.pos = `[${row}, ${col}]`; 
        console.log(row, col);
        grid.appendChild(li);  
      }
    }
    this.el.append(grid);
  };
  
  bindEvents() {
    this.el.addEventListener('click', this.handleClick);
  }
  handleClick(e) {
    let element = e.target;
    element.style.backgroundColor = "MediumAquamarine"; 
    this.makeMove(element);
  }
  
  makeMove(square) {
    const pos = square.dataset.pos; 
    const mark = this.game.currentPlayer;
    this.game.playMove(JSON.parse(pos)); 

    square.innerHTML = mark; 

    if (this.game.isOver()){
      if (this.game.winner() === null){
        setTimeout(() => alert('Draw!'), 500);  
        setTimeout(() => location.reload(), 1000); 
      } else {
        setTimeout(() => alert(`You won, ${this.game.winner()}`), 500);  
        setTimeout(() => location.reload(), 1000); 
      }
    }
  }
}
export default View; 
