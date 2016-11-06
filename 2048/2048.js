var cell=document.getElementsByClassName('grid-cell');

var score=document.getElementById('score');

function myFunction(){ 
  var key =Math.floor(Math.random()*16);
  if(cell[key].innerHTML==""){
    cell[key].innerHTML=Math.random()<0.85? 2:4;
     console.log("working");
     design();
  }
}

function startgame(e){
	x=e.keyCode;
	if(x==38||x==87){
		moveup();
		random();
		design();
	}
	if(x==40||x==83){
		movedown();
		random();
		design();
	}
	if(x==37||x==65){
		moveleft();
		random();
		design();
	}
	if(x==39||x==68){
		moveright();
		random();
		design();	
	}

}

function random(){
	var k=Math.floor(Math.random()*16);
	if(cell[k].innerHTML===""){
	 cell[k].innerHTML=Math.random()<0.85? 2:4;
     console.log("working");
	}
	else{
		random();
	}
}
function design(){
	for (var i = 0; i < cell.length; i++) {
		if(cell[i].innerHTML==="")
		{
			cell[i].style.backgroundColor="#cdc1b4";
		}
		if(cell[i].innerHTML==="2")
		{	
			cell[i].style.color="#776e65";
			cell[i].style.backgroundColor="#eee4da";
		}
		if(cell[i].innerHTML==="4")
		{
			cell[i].style.color="#776e65";
			cell[i].style.backgroundColor="#ede0c8";
		}
		if(cell[i].innerHTML==="8")
		{
			cell[i].style.color="white";
			cell[i].style.backgroundColor="#f78e48";
		}
		if(cell[i].innerHTML==="16")
		{
			cell[i].style.color="white";
			cell[i].style.backgroundColor="#fc5e2e";
		}
		if(cell[i].innerHTML==="32")
		{
			cell[i].style.color="white";
			cell[i].style.backgroundColor="#f67c5f";
		}
		if(cell[i].innerHTML==="64")
		{
			cell[i].style.color="white";
			cell[i].style.backgroundColor="#f65e3b";
		}
		if(cell[i].innerHTML==="128")
		{
			cell[i].style.color="white";
			cell[i].style.backgroundColor="#edcf72";
		}
		if(cell[i].innerHTML==="256")
		{
			cell[i].style.color="white";
			cell[i].style.backgroundColor="#edcc61";
		}
		if(cell[i].innerHTML==="512")
		{
			cell[i].style.color="white";
			cell[i].style.backgroundColor="lightblue";
		}
		if(cell[i].innerHTML==="1024")
		{
			cell[i].style.color="white";
			cell[i].style.backgroundColor="blue";
		}
		if(cell[i].innerHTML==="2048")
		{
			cell[i].style.color="white";
			cell[i].style.backgroundColor="black";
		}
	}
}

var board=[[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15]];

function moveup() {
	for (var j = 0; j < 4; j++) {
		for (var i=1; i <4; i++) {
			if (cell[board[i][j]].innerHTML) {
				var row=i;
				while(row>0){
					if (cell[board[row-1][j]].innerHTML=="") {

						cell[board[row-1][j]].innerHTML=cell[board[row][j]].innerHTML;
						cell[board[row][j]].innerHTML="";
						row--;
					}
					else if(cell[board[row-1][j]].innerHTML==cell[board[row][j]].innerHTML)
					{
						cell[board[row-1][j]].innerHTML*=2;
						cell[board[row][j]].innerHTML="";
						score.innerHTML=parseInt(score.innerHTML)+parseInt(cell[board[row-1][j]].innerHTML);
						break;
					}
					else break;
				}
			}
		  }
		}
}

function movedown() {
	for (var j = 0; j < 4; j++) {
		for (var i=2; i >=0; i--) {
			if (cell[board[i][j]].innerHTML) {
				var row=i;
				while(row+1<4){
					if (cell[board[row+1][j]].innerHTML=="") {

						cell[board[row+1][j]].innerHTML=cell[board[row][j]].innerHTML;
						cell[board[row][j]].innerHTML="";
						row++;
					}
					else if(cell[board[row+1][j]].innerHTML==cell[board[row][j]].innerHTML)
					{
						cell[board[row+1][j]].innerHTML*=2;
						cell[board[row][j]].innerHTML="";
						score.innerHTML=parseInt(score.innerHTML)+parseInt(cell[board[row+1][j]].innerHTML);
						break;
					}
					else break;
				}
			}
		  }
		}
}

function moveleft() {
	for (var i = 0; i < 4; i++) {
		for (var j=1; j <4; j++) {
			if (cell[board[i][j]].innerHTML) {
				var col=j;
				while(col-1>=0){
					if (cell[board[i][col-1]].innerHTML=="") {
						cell[board[i][col-1]].innerHTML=cell[board[i][col]].innerHTML;
						cell[board[i][col]].innerHTML="";
						col--;
					}
					else if(cell[board[i][col]].innerHTML==cell[board[i][col-1]].innerHTML)
					{
						cell[board[i][col-1]].innerHTML*=2;
						cell[board[i][col]].innerHTML="";
						score.innerHTML=parseInt(score.innerHTML)+parseInt(cell[board[i][col-1]].innerHTML);
						break;
					}
					else break;
				}
			}
		  }
		}
}
function moveright() {
	for (var i = 0; i < 4; i++) {
		for (var j=2; j >=0; j--) {
			if (cell[board[i][j]].innerHTML) {
				var col=j;
				while(col+1<4){
					if (cell[board[i][col+1]].innerHTML=="") {
						cell[board[i][col+1]].innerHTML=cell[board[i][col]].innerHTML;
						cell[board[i][col]].innerHTML="";
						col++;
					}
					else if(cell[board[i][col]].innerHTML==cell[board[i][col+1]].innerHTML)
					{
						cell[board[i][col+1]].innerHTML*=2;
						cell[board[i][col]].innerHTML="";
						score.innerHTML=parseInt(score.innerHTML)+parseInt(cell[board[i][col+1]].innerHTML);
						break;
					}
					else break;
				}
			}
		  }
	}
}

document.addEventListener('keydown',startgame);