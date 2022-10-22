
 const buttons = {

      b1 : document.getElementById('b1'),
      b2 : document.getElementById('b2'),
      b3 : document.getElementById('b3'),
      b4 : document.getElementById('b4'),
      b5 : document.getElementById('b5'),
      b6 : document.getElementById('b6'),
      b7 : document.getElementById('b7'),
      b8 : document.getElementById('b8'),
      b9 : document.getElementById('b9')

};

let checkProgress = () => {
    if(buttons.b1.innerText && buttons.b1.innerText === buttons.b2.innerText && buttons.b2.innerText === buttons.b3.innerText ){
        console.log(`Player ${buttons.b1.innerText} Won`);
        return reset();
    }

    else if(buttons.b4.innerText && buttons.b4.innerText === buttons.b5.innerText && buttons.b5.innerText === buttons.b6.innerText ){
        console.log(`Player ${buttons.b5.innerText} Won`);
        return reset();
    }

    else if(buttons.b7.innerText && buttons.b7.innerText === buttons.b8.innerText && buttons.b8.innerText === buttons.b9.innerText ){
        console.log(`Player ${buttons.b7.innerText} Won`);
        return reset();
    }

    else if(buttons.b1.innerText && buttons.b1.innerText === buttons.b4.innerText && buttons.b4.innerText === buttons.b7.innerText ){
        console.log(`Player ${buttons.b1.innerText} Won`);
        return reset();
    }

    else if(buttons.b2.innerText && buttons.b2.innerText === buttons.b5.innerText && buttons.b5.innerText === buttons.b8.innerText ){
        console.log(`Player ${buttons.b2.innerText} Won`);
        return reset();
    }

    
    else if(buttons.b3.innerText && buttons.b3.innerText === buttons.b6.innerText && buttons.b6.innerText === buttons.b9.innerText ){
        console.log(`Player ${buttons.b3.innerText} Won`);
        return reset();
    }

    
    else if(buttons.b1.innerText && buttons.b1.innerText === buttons.b5.innerText && buttons.b5.innerText === buttons.b9.innerText ){
        console.log(`Player ${buttons.b1.innerText} Won`);
        return reset();
    }

    
    else if(buttons.b3.innerText && buttons.b3.innerText === buttons.b5.innerText && buttons.b5.innerText === buttons.b7.innerText ){
        console.log(`Player ${buttons.b3.innerText} Won`);
        return reset();
    }


        for(const key in buttons){
            const button = buttons[key];
            if(button.innerHTML=== ""){
                return;
            }
            
        }

  console.log("Game Draw");
  return reset();
   




    



}



let currentPlayer = 1 ;


let play = (btn) => {
    const button = buttons[btn];
    if (currentPlayer === 1){
        button.innerHTML = "x";
        currentPlayer = 2 ;
    }else{
        button.innerHTML = "0";
        currentPlayer = 1;
    }
    
    button.disabled = true ;
    checkProgress();

};



const reset = () =>{
    for(const key in buttons){
        const button = buttons[key];
        button.disabled = false ;
        button.innerHTML = "";
    }

}



