let count=0;
//button input
const btn=document.getElementById("btn");
//funcions
function randomNumberGenerator(lowerLimit,upperLimit){
    return Math.floor(Math.random()*(upperLimit - lowerLimit+1) + lowerLimit);
}
//evetns
btn.addEventListener("click",()=>{
    let resoult;

    function displayPTag(resoult){
        //counting the number of generated number
        count=count+1;
        //creates a <p> element
        const elementNode=document.createElement('p');
        const textNode=document.createTextNode("A(z) "+count+". szám: "+result);
        //puts the textNode insade the <p> element
        elementNode.appendChild(textNode);
        //display the resoult to the users
        displayNumbers.appendChild(elementNode);
    }



    //inputs
    let lowerLimit=document.getElementById("lowerLimit").value;
    let upperLimit=document.getElementById("upperLimit").value;
    const displayNumbers=document.querySelector(".pTags");
    //converting string to number
    lowerLimit = parseInt(lowerLimit);
    upperLimit = parseInt(upperLimit);
    //puting the input into the random number generator
    if(lowerLimit>upperLimit){
        window.alert("Az alsó határ nem lehet nagyobb mint a felső");
     }
    else if(lowerLimit && upperLimit){
       result=randomNumberGenerator(lowerLimit,upperLimit);
       displayPTag(result);
    }
    else  if(lowerLimit){
        result=randomNumberGenerator(lowerLimit,100);
        displayPTag(result);
    }
    else if(upperLimit){
        result=randomNumberGenerator(0,upperLimit);
        displayPTag(result);
    }
    else {
        result=randomNumberGenerator(0,100);
        displayPTag(result);
    };
});

