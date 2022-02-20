const players = document.querySelector('.players');
const container1 = document.querySelector('.container1');
const container2 = document.querySelector('.container2');
const output = document.getElementById('output')
const output2 = document.getElementById('output2')
const btn = document.querySelector('.btn');

let image = ['<img src="./images/dice1.png";>',
'<img src="./images/dice3.png";>',
'<img src="./images/dice4.png";>',
'<img src="./images/dice5.png";>',
'<img src="./images/dice2.png";>',
'<img src="./images/dice6.png";>',]

btn.addEventListener('click', () =>{

    let container1 = image [Math.floor(Math.random() * image.length)]
    output.innerHTML = container1;
    
    let container2 = image [Math.floor(Math.random() * image.length)]
    output2.innerHTML = container2;
   
if(container1 > container2)
{
    players.innerHTML = `Player 1 wins`
}if(container2 > container1)
{
    players.innerHTML = `Player 2 wins`
}if(container1 == container2) 
{
    players.innerHTML = `A draw`
}else{}
    
})
