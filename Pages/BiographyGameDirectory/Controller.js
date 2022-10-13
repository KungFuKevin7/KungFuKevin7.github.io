//Fibonacci for acceleration
let myFibonacci = Fibonacci(7);


//Rotates Camera accordingly to the car
//(works only in Cockpit view "F")
function RotateView(key)
{
    if(key == "87") // W
    {
        return 0;
    }else if(key == "65"){ //A
        return (-Math.PI/2);
    }else if(key == "83"){ //S
        return 0;
        //return (Math.PI);
    }else if(key == "68"){ //D
        return (Math.PI/2);
    }else if(key == "69"){ //E
        return (Math.PI/4);
    }else if(key == "81"){ //Q
        return (-Math.PI/4);
    }

    else //don't rotate
    {
        return 0;
    }
}

//Rotate Car accordingly to the conrols
function RotateCar(key){
    if(key == "87") // W
    {
        return (Math.PI / 2);
    }else if(key == "65"){ //A
        return (Math.PI);
    }else if(key == "83"){ //S
        return (Math.PI / 2);
    }else if(key == "68"){ //D
        return 0;
    }else if(key == "69"){ //E
        return (Math.PI/4);
    }else if(key == "81"){ //Q
        return ( Math.PI - (Math.PI / 3));
    }

    else //don't rotate
    {
        return (Math.PI / 2);
    }
}

function redirectToURL(URL)
{
    window.open(URL, '_blank');
}

//We use fibonacci as our acceleration rate
function Fibonacci(n) {
    if (n < 1){
        return [0];
    }
    if (n < 2) {
        return [1];   
    }
    if (n < 3) {
        return [1, 1];
    }

    let myFibonacci = Fibonacci(n - 1);
    myFibonacci.push(myFibonacci[n - 2] + myFibonacci[n - 3]);
    return myFibonacci;
};

function acceleration(keyPressCount)
{
    let accelerationValue; 
    if(keyPressCount < (myFibonacci.length)){   
        accelerationValue = myFibonacci[(keyPressCount)] / 10;
        return accelerationValue;    
        
    }else
    {
        accelerationValue = myFibonacci[myFibonacci.length - 1] / 10;
        return accelerationValue;
    }
}