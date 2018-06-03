var pauseTime = document.getElementById('intro-video').dataset.pause1;
var video = document.getElementById('intro-video');
var question = document.getElementById('questions');

var ansOne = document.getElementById('intro-video').dataset.ans1;
var ansTwo = document.getElementById('intro-video').dataset.ans2;
var ansThree = document.getElementById('intro-video').dataset.ans3;
var ansFour = document.getElementById('intro-video').dataset.ans4;

var ansCorrect = document.getElementById('intro-video').dataset.ansc;

var a1 = document.getElementById('answer-1');
var a2 = document.getElementById('answer-2');
var a3 = document.getElementById('answer-3');
var a4 = document.getElementById('answer-4');

var verderCorrect = document.getElementById('verder-correct');
var verderWrong = document.getElementById('verder-wrong');

var ansRight = document.getElementById('correct');
var ansWrong = document.getElementById('wrong');
var buttons = document.getElementById('answer-buttons');

var theClickedAns;

question.style.display = 'none';
ansRight.style.display = 'none';
ansWrong.style.display = 'none';

a1.textContent = ansOne;
a2.textContent = ansTwo;
a3.textContent = ansThree;
a4.textContent = ansFour;

a1.onclick = function () { 
    theClickedAns = "one";
    setAnswer();
    return;
};
a2.onclick = function () { 
    theClickedAns = "two";
    setAnswer();
    return;
};
a3.onclick = function () { 
    theClickedAns = "three"; 
    setAnswer();
    return;
};
a4.onclick = function () {  
    theClickedAns = "four";
    setAnswer();
    return;
};

verderCorrect.onclick = function () {
    question.style.display = 'none';
    video.style.display = 'inline';
    video.play();
    return;
};

verderWrong.onclick = function () {
    question.style.display = 'none';
    video.style.display = 'inline';
    video.play();
};

var pausing_function = function(){
    if(this.currentTime >= pauseTime) {
        this.pause();

        // remove the event listener after you paused the playback
        this.removeEventListener("timeupdate",pausing_function);
        question.style.display = 'inline';
        video.style.display = 'none';
        video.webkitExitFullScreen();
        
    }
};

function setAnswer() {
    checkAnswer();
    return;
}

function checkAnswer() {
    if (theClickedAns==ansCorrect) {
        ansIsCorrect();
        return;
    } else {
        ansIsWrong();
        return;
    }
}

function ansIsCorrect() {
    ansRight.style.display = 'inline';
    buttons.style.display = 'none';
    return;
}

function ansIsWrong() {
    ansWrong.style.display = 'inline';
    buttons.style.display = 'none';
    video.currentTime = 0;
    return;
}

video.addEventListener("timeupdate", pausing_function);