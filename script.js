let turn = 'X';
let header =document.querySelector('.header')
let squares=[]
let gameOver = false
function reloadGame(n1,n2,n3){
    gameOver = true
    header.innerHTML=`${squares[n1]} Winner🎉🥳`
    document.getElementById('item'+n1).style.background='#003566'
    document.getElementById('item'+n2).style.background='#003566'
    document.getElementById('item'+n3).style.background='#003566'
    header.style.background='#003566'
    setInterval(()=>{
     header.innerHTML +='.'
    },750)
    setTimeout(()=>{
        location.reload()
    },3000)

}



function checkWin(){
for(let i=1;i<10;i++){
    squares[i] = document.getElementById('item'+i).innerHTML
}
if(squares[1]==squares[2] && squares[2]==squares[3] && squares[1]!=""){
    reloadGame(1,2,3)
}

else if(squares[4]==squares[5] && squares[5]==squares[6] && squares[4]!=""){
    reloadGame(4,5,6)
    }
else if(squares[7]==squares[8] && squares[8]==squares[9] && squares[9]!=""){
        
    reloadGame(7,8,9)
        }
else if(squares[1]==squares[4] && squares[4]==squares[7] && squares[4]!=""){
    reloadGame(1,4,7)
            }
else if(squares[2]==squares[5] && squares[5]==squares[8] && squares[5]!=""){
    reloadGame(2,5,8)
                }
else if(squares[3]==squares[6] && squares[6]==squares[9] && squares[3]!=""){
    reloadGame(3,6,9)
                    }
else if(squares[1]==squares[5] && squares[5]==squares[9] && squares[1]!=""){
    reloadGame(1,5,9)      
                        }
 else if(squares[3]==squares[5] && squares[5]==squares[7] && squares[5]!=""){
    reloadGame(3,5,7)    
                            }
// checking draw
 else if (squares.slice(1).every(square => square !== "")) 
 {
  header.innerHTML = "No winner this time";
  setInterval(()=>{
    header.innerHTML +='.'
   },1000) 
  setTimeout(() => {    
                                  
 location.reload();
  }, 4000);
 }
 
}

function game(id) {

    if(gameOver) {
   return;    
    }
    let element = document.getElementById(id);
    if (turn === 'X' && element.innerHTML == '') {
        element.innerHTML = 'X'; 
        turn = 'O'; 
        header.innerHTML='O'
        
    }
    else if(turn==='O' && element.innerHTML == ''){
        element.innerHTML = 'O'; 
        turn='X'
        header.innerHTML='X'
    }
   

    checkWin()
}

