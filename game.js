const cards= document.querySelectorAll(".cards .card");
const selected= document.querySelector('selected')
const correct=document.querySelector('correct')


const order=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
order.sort(() => 0.5 - Math.random());
let answer=[]
let answerKey=[]
let i=0
let score=0


function nextSquare(){

    let r=order[i]
    i++
    if(answerKey.indexOf(cards[r].getAttribute("position"))==-1)
    {
        answerKey.push(cards[r].getAttribute("position"))
    }

    for(let j=0;j<answerKey.length;j++)
    {
        window.setTimeout( () => {
                let x=cards[order[j]].getAttribute("position")
                if(answerKey.indexOf(x)!=-1){cards[order[j]].classList.add("roundCards")} 
            }, j*500)    
    }

}





function roundSetup(){

    
    
cards.forEach(card => {
card.classList.remove("clicked")
card.classList.remove("selected")
}) 
    
answer=[]

//var square=setTimeout(nextSquare,100)
nextSquare()
}

function gamePlay(){

order.forEach(x => console.log(x))
roundSetup()
check()

}



function check(){

    cards.forEach(card => {
        card.addEventListener("click", () => {
            card.classList.add("clicked")
            s=card.getAttribute("position")

            if(answerKey.indexOf(s)==-1){
                console.log("games over")
                alert("Game Over\n Score = "+score)
                location.reload()
            }
            if(answer.indexOf(s)==-1 && answerKey.indexOf(s)!=-1)
            {
                answer.push(s)  
            }

            if(answer.length==answerKey.length){
                if(answer.length==16)
                {
                    score+=10
                    window.setTimeout( () => {
                        cards.forEach(card => {
                            card.classList.remove("clicked")
                        })

                    
                    cards[1].classList.add("smiley")
                    cards[2].classList.add("smiley")
                    cards[8].classList.add("smiley")
                    cards[11].classList.add("smiley")
                    cards[13].classList.add("smiley")
                    cards[14].classList.add("smiley")
                        
                    alert("Congrats! You've beat this game\n Score = "+score)
                    },100)    
                }
                
                else{
                console.log("round cleared")
                //answerKey.forEach(x => console.log(x))
                score+=10
                window.setTimeout(roundSetup,250)
                cards.forEach(card => {
                    card.classList.remove("roundCards")
                })  
            }

            }        
        })
    })    
}


gamePlay()



            