console.log('More while loops for h/w')

const secretNumber = 7
console.log(secretNumber)
let tries = 0

let buttons = document.querySelectorAll('button')
const playButton = document.createElement('button')
playButton.textContent = 'Play Again'
const info = document.querySelector('.info')

function handleClick(event){
    let button = event.target
    if(button.disabled != true){ //check for className
    //button.classList.add('light')
    button.disabled = true    
    tries++
    document.querySelector('header').textContent = `Tries ${tries}`
    if(button.dataset.num == secretNumber){
        document.querySelector('p').textContent = 'You have guessed it right'
        buttons.forEach(button => {
            button.disabled = true
        });
    }
    else{
        document.querySelector('p').textContent = `${button.textContent} is wrong`
    }
    }

    if(tries == 8)
    {
        buttons.forEach(button => {
            button.disabled = true
        });
        info.appendChild(playButton)
        //playButton.disabled = false
        tries = 0
        document.querySelector('header').textContent = `You failed`
    }
}

function handlePlayAgain(){
    buttons.forEach(button => {
                button.disabled = false
            });
            tries = 0
        document.querySelector('header').textContent = `Tries ${tries}`
            document.querySelector('p').textContent = 'Info Message'
            info.removeChild(playButton)
            //playButton.disabled = true
}

//Event Listeners
buttons.forEach(button => {
    button.addEventListener('click',handleClick)
});

playButton.addEventListener('click',handlePlayAgain)

//for the play again use the display property
