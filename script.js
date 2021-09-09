var wins = 0;
var losses = 0;
var ties = 0;



game();


function game(){

var userChoice = prompt('Lets play Rock, Paper, Scissors Game. Please enter R, P, or S.');
    if(!userChoice){
        return;
    }

userChoice = userChoice.toUpperCase();

var random = Math.floor(Math.random()*3);
var options = ['R', 'S', 'P']
var computerChoice = options[random]

    if(userChoice === computerChoice){
        alert('Its a tied.');
        alert('The computer choice is '+computerChoice);
        ties++;
    }else if(
            (userChoice==='R' && computerChoice==='S') ||
            (userChoice==='P' && computerChoice==='R') ||
            (userChoice==='S' && computerChoice==='P') ) {
        alert('You win!');
        alert('The computer choice is '+computerChoice);
        wins++;
    }else{
        alert('You lose!');
        alert('The computer choice is '+computerChoice);
        losses++;
    }

    alert('Your score :\n' +wins +' wins.\n' + losses +' losses.\n' +ties +' ties.')
}

while (confirm('Do you want to play agian?')==true){
    game();
}