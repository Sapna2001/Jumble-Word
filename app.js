const message=document.querySelector('.message');
const guess=document.querySelector('input');
const btn=document.querySelector('.btn');
const no=document.querySelector('.no')
let play=false;
let newWord="";
let randomWord="";
let score=0;
let i=0;
//array of words
let Words=['KERALA','GOA','GUJARAT','TRIPURA','ODISHA','MAHARASHTRA','KARNATAKA','SIKKIM','PUNJAB','RAJASTHAN'];
let l=Words.length;

//scramble words
const scrambleWord =(arr) =>{
    for(let i=arr.length-1;i>0;i--){ 
        let j=Math.floor(Math.random()*(i+1));
        //swapping
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
    return arr;
}

//when button clicked,game starts
btn.addEventListener('click',function(){
    if(!play & i<l){
        no.innerHTML=`${i+1}/10`
        play=true;
        //when btn clicked change innerhtml to guess
        btn.innerHTML="Guess";
        //show hidden class
        guess.classList.toggle('hidden');
        //create words
        newWord=Words[i];
        randomWord=scrambleWord(newWord.split("")).join("");
        message.innerHTML = `Guess the word ${randomWord}`;
    }
    else if(i == l){
        message.innerHTML=`Score:${score}`
        btn.innerHTML="Play Again";
        guess.value="";
        play=false;
        score=0;
        i=0;
    }
    else{
        let tempWord=guess.value;
        if(newWord === tempWord){
            play=false;
            score=score+10;
            message.innerHTML=`Awesome!!! It is correct.`
            btn.innerHTML="Next";
            guess.classList.toggle('hidden');
            guess.value="";
            i++;
        }
        else{
            message.innerHTML=`Try Again ${randomWord}`;
            score=score-5;
        }
    }
})