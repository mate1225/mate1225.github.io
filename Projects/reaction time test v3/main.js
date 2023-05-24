//get elements
const btn=document.getElementById("btn");
const h1Element=document.getElementById("h1Element");
const scores=document.querySelector(".scoresParant")


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

          reactionTimeStart=performance.now();
        }

        console.log("backgroundColorhange funcion finished")
    return;
    }

    function average(resoults){
        let sum=0;
    for(let i=0;i<reasult.length;i++){
        sum=sum+resoults[i];
    }
     
    return Math.round(sum/5);
    }
    


//event liseners

//defineing veriables
let count=0;
let tryCount=0;
let reactionTimeStart;
let reactionTimeEnd;
let reasult=[];
    btn.addEventListener('click',()=>{
        if(btn.classList.contains("reactionTimeBtnColor_default")){
            count++;
            
            //removing the default style
            btn.classList.remove("reactionTimeBtnColor_default");
            h1Element.textContent=('');

            //addign red(ready) backgound color
            btn.classList.add("reactionTimeBtnColor_ready")

            //generarting the random number
           let randomNumber=randomNumberGeneration();
            //delaying the green background adding to a random time (2-5s)

            //to do (ez a fukció mindenékppen lefut ami nem jó ha a felhasználó 
            // hamarabb megnyomta a gombot és ezért visszta tért az alap állásba , bugot okozhat a setInterval() funkcióval kéne majd megoldani valahogy úgy 
            //hogy le lehessen állítani a funkciót ha lenyomta a felhasználó hamarabb a gombot )

            setTimeout(backgroundColorhange,randomNumber);

            
        }

       else if(btn.classList.contains("reactionTimeBtnColor_ready")){
            count--;
            
            h1Element.textContent=('to Early, try agin!');
            btn.classList.remove("reactionTimeBtnColor_ready");
            btn.classList.add("reactionTimeBtnColor_default");
       }

       //chaning the background color to blue after the green color apaired and the user clicked
       else  if(btn.classList.contains("reactionTimeBtnColor_click")){
            //reaction time 
            reactionTimeEnd=performance.now();
            let reactionTime= Math.round((reactionTimeEnd-reactionTimeStart)-50);
            reasult.push(reactionTime);
            //changing the backgound to default
            btn.classList.remove("reactionTimeBtnColor_click");
            btn.classList.add("reactionTimeBtnColor_default");
            //displaying the reasult
            h1Element.textContent=('your '+count+'. time is: '+reactionTime+"ms");

            if(count===5){
                count=0;
                tryCount++;
               
                
                const averageScore=average(reasult);
                h1Element.textContent=('your average time is: '+averageScore+"ms");
                //creating the elements and displaying the resoults
                const divElemnt=document.createElement("div");
                divElemnt.className ="scores";
                
                const h3Element=document.createElement("h3");
                h3Element.textContent=tryCount+". Attempt";
                divElemnt.appendChild(h3Element);

                const olElemnt=document.createElement("ol");
                let liElement;

                for(let i=0;i<reasult.length;i++){
                    liElement=document.createElement("li");
                    liElement.textContent=reasult[i]+"ms";
                    olElemnt.appendChild(liElement);
                }

                
       
                divElemnt.appendChild(olElemnt);

                const h4Element=document.createElement("h4");
                h4Element.textContent="Average: "+averageScore+"ms";
                divElemnt.appendChild(h4Element);

                scores.appendChild(divElemnt);
              
                //clearing the score array
                reasult.length=0;
    }
    };
   

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

