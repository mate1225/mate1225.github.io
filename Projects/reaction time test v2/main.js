//get elements
const btn=document.getElementById("btn");
const h1Element=document.getElementById("h1Element");



//funcions

    //random number generator 1000-5000 
    function randomNumberGeneration(){
        return (Math.floor(Math.random()*5)+2)*1000;
    }
    

    //background color changing frome red to green
    function backgroundColorhange(){
        if(btn.classList.contains("reactionTimeBtnColor_ready"))
        {
            btn.classList.remove("reactionTimeBtnColor_ready");
            btn.classList.add("reactionTimeBtnColor_click");

            reactionTimeStart=Date.now();
            console.log(reactionTimeStart);
        }
        else{
            console.log("time out funcion finished")
            return;
        }
    }

    


//event liseners

//defineing veriables
let count=0;
let reactionTimeStart=0;
let reactionTimeStop=0;
    btn.addEventListener('click',()=>{
       
        if(btn.classList.contains("reactionTimeBtnColor_default")){
            count++;
            console.log(count);
            //removing the default style
            btn.classList.remove("reactionTimeBtnColor_default");
            h1Element.textContent=('');

            //addign red(ready) backgound color
            btn.classList.add("reactionTimeBtnColor_ready")

            //generarting the random number
           let randomNumber=randomNumberGeneration();
            console.log("the delay time is: "+randomNumber+"ms");

            //delaying the green background adding to a random time (2-5s)

            //to do (ez a fukció mindenékppen lefut ami nem jó ha a felhasználó 
            // hamarabb megnyomta a gombot és ezért visszta tért az alap állásba , bugot okozhat a setInterval() funkcióval kéne majd megoldani valahogy úgy 
            //hogy le lehessen állítani a funkciót ha lenyomta a felhasználó hamarabb a gombot )

            setTimeout(backgroundColorhange,randomNumber);

            
        }

       else if(btn.classList.contains("reactionTimeBtnColor_ready")){
        console.log("to early")
        h1Element.textContent=('to Early, try agin!');
        btn.classList.remove("reactionTimeBtnColor_ready");
        btn.classList.add("reactionTimeBtnColor_default");
       }

       //chaning the background color to blue after the green color apaired and the user clicked
       else  if(btn.classList.contains("reactionTimeBtnColor_click")){
        //reaction time 
        console.log("the time now is : "+Date.now());
        reactionTimeStop=Date.now()-reactionTimeStart;
        console.log("your reaction time is: "+reactionTimeStop);
        //changing the backgound to default
        btn.classList.remove("reactionTimeBtnColor_click");
        btn.classList.add("reactionTimeBtnColor_default");
        //displaying the reasult
        h1Element.textContent=('your time is: '+reactionTimeStop);
    };
    if(count===5){
        count=0;
    }

    });





//creating the chart
// Sample data
let datas=[199, 197, 219, 193, 175];
const labels = ['1.try', '2.try', '3.try', '4.try', '5.try'];
const data = {
    labels: labels,
    datasets: [
        {
            label: 'scores',
            backgroundColor: 'rgba(51, 176, 16, 0.3)',
            data:datas,
            fill:'start'
        }
    ]
};

// Chart configuration
const config = {
    type: 'line',
    data: data,
    options: {
        plugins:{
            legend:{
                display:false
            },
            labels:{
                fontcolor:'rgba(13, 13, 13,1)'
            }
        },
        
        scales: {
            y: {
                min:100,
                max:300,
                reverse:true
            }
        }
    }
};

// Create the chart
var myChart = new Chart(
    document.getElementById('chartCanvas'),
    config
);

