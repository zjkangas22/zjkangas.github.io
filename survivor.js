var dial_prog = 0;
var Jeff = document.getElementById("Jeff_Talk");
var Abby = document.getElementById("Abby_Talk");
var pre = document.getElementById("pre");
var chal2 = document.getElementById("chal2");
function dialogue(){
  if(dial_prog==0){
    Jeff.innerHTML = "Welcome to today’s REWARD CHALLENGE!!!!! In this challenge you will run through a maze collecting bags of puzzle pieces. Once you have all four bags, you will return to the start and use those puzzle pieces to solve a word puzzle.";
    Abby.innerHTML = "I was really hoping for a swimming challenge Jeff…";
  }
  
  if(dial_prog==1){
    Jeff.innerHTML = "Want to know what you’re playing for?";
    Abby.innerHTML = "HECK YEAH!!!! I want some fooooood!!!!";
  }
  
  if(dial_prog==2){
    Jeff.innerHTML = "Well I MIGHT have consumed all seven tacos and the salsa on the way over here. I've been eating nothing but rice and coconuts for 29 seasons, so I think I deserved it."
    Abby.innerHTML = "Looks like Jeff's finally losing it...";
  }
  
  if(dial_prog==3){
    Jeff.innerHTML = "SURVIVORS READY?!?!"
    Abby.innerHTML = "GO!!";
  }
  if(dial_prog==4){
    pre.hidden = true;
    chal1.hidden = false;
  }
  if(dial_prog==5){
    chal1.hidden = true;
    chal2.hidden = false;
  }
  dial_prog++;
}

var ans = document.getElementById("ans");
function check_ans(){
  if(ans.value=="Railed Out In Raleigh"){
    chal2.hidden = true;
    pre.hidden = false;
    dial_prog++;
    Jeff.innerHTML = "Abby wins reward!!! Since Sarah and Emily went to do dabs on the beach and Zachery got med-evaced with heat stroke, it was almost like you were doing the challenge alone! Cameraman Number 3 just let me know that Abby's replacement reward will be waiting for you back at camp inside a personal mini fridge! For the rest of you, I've got nothing for you, head back to camp.";
    Abby.hidden = true;
  } 
}

var player_y = 20;
var player_x = 10;
var totems = 0;
var maze = document.getElementById("maze");
var score = document.getElementById("score");

function moveU(){
   if( maze.rows[player_y - 1].cells[player_x].className == "totem"){
     totems++;
     score.innerHTML = totems;
   }
  if( maze.rows[player_y - 1].cells[player_x].className != "wall"){
    maze.rows[player_y - 1].cells[player_x].className = "player";
    maze.rows[player_y - 1].cells[player_x].bgColor = "lime";
    maze.rows[player_y].cells[player_x].className = "floor";
    maze.rows[player_y].cells[player_x].bgColor = "white";
    player_y--;
  }
}

function moveD(){
   if( maze.rows[player_y + 1].cells[player_x].className == "totem"){
     totems++;
     score.innerHTML = totems;
   }
   if( maze.rows[player_y + 1].cells[player_x].className == "goal"){
     if(totems == 4){
       alert();
       dialogue();
     }
   }
  if( maze.rows[player_y + 1].cells[player_x].className != "wall"){
    maze.rows[player_y + 1].cells[player_x].className = "player";
    maze.rows[player_y].cells[player_x].className = "floor";
    player_y++;
  }
}

function moveR(){
   if( maze.rows[player_y].cells[player_x + 1].className == "totem"){
     totems++;
     score.innerHTML = totems;
   }
  if( maze.rows[player_y].cells[player_x + 1].className != "wall"){
    maze.rows[player_y].cells[player_x + 1].className = "player";

    maze.rows[player_y].cells[player_x].className = "floor";

    player_x++;
  }
}

function moveL(){
   if( maze.rows[player_y].cells[player_x - 1].className == "totem"){
     totems++;
     score.innerHTML = totems;
   }
  if( maze.rows[player_y].cells[player_x - 1].className != "wall"){
    maze.rows[player_y].cells[player_x - 1].className = "player";
    maze.rows[player_y].cells[player_x].className = "floor";
    player_x--;
  }
}

