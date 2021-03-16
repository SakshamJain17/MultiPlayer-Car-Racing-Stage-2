var database;
var form, player, game, playerCount;  
var gameState = 0;

function setup(){
  database = firebase.database();
  createCanvas(1800,800);

  game = new Game();
  game.start();
}

function draw(){
  background("yellow")
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    game.play();
  }
}

