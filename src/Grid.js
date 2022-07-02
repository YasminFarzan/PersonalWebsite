//the function that creates the grid based on the props passed onto it
function Grid (props) {
    let gridElements = [];
    //this for loop, loops through the numbers from start to end
    for (let i = props.start; i <= props.end; i++)
    {
        //the two characteristics we change based on the numbers, the background color and the border
        //sets in the characteristics for odd numbers
        const myColors = {
            backgroundColor: 'yellow',
            borderColor: "white",
            width: "10%",
            borderWidth: "5%",
            borderStyle: "solid",
            padding: "40%",
            margin: "10%"
        }
        var isPrime = true;
        //to take care of number 1 since it is not a prime but only visible by itself
        if(i <= 1){
            isPrime = false;
        }
        //this for loop checks if a number is prime
        for (let j = 2; j < Math.sqrt(i)+1; j++){
            if(i%j === 0)
            {
                isPrime = false;
                break;
            }
        }
        //takes care of number 2
        if(i === 2)
        {
            isPrime = true;
        }
        //sets in the characteristics for prime numbers
        if(isPrime){
            myColors.backgroundColor='red'
            myColors.borderColor = 'black'
        }
        //sets in the characteristics for even numbers
        else if(i%2 === 0){
            myColors.backgroundColor = 'green'
        }
        gridElements.push(<div style = {myColors} className = "item">{i}</div>)
    }
    //displays the grid
    const myContainer={
        display: "grid",
        gridTemplateColumns:"10% 10% 10% 10% 10% 10% 10% 10%",
        gridGap: "1rem"
    }
    return <div style={myContainer}className="container">{gridElements}</div>

}

export default Grid