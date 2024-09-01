var currentState = 0;

function rotateAngledown(){

    if(currentState === 0){
        currentState = 180;
        document.querySelector('.fa-chevron-down').style.transform = 'rotate(180deg)'

    }else{
        currentState = 0;
        document.querySelector('.fa-chevron-down').style.transform = 'rotate(0deg)';
    }
   
}

