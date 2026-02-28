const questionBank = [

{question:"Who was the first cricketer to score 10,000 runs in Test cricket?",options:["Sunil Gavaskar","Allan Border","Sachin Tendulkar","Brian Lara"],correct:0},

{question:"Which bowler dismissed Don Bradman for a duck in his final Test innings?",options:["Harold Larwood","Eric Hollies","Ray Lindwall","Alec Bedser"],correct:1},

{question:"Who captained Australia during their 1999 ODI World Cup victory?",options:["Ricky Ponting","Mark Taylor","Steve Waugh","Allan Border"],correct:2},

{question:"Who holds the record for highest individual score in Test cricket (400*)?",options:["Matthew Hayden","Brian Lara","Mahela Jayawardene","Virender Sehwag"],correct:1},

{question:"Who was the first fast bowler to take 400 Test wickets?",options:["Kapil Dev","Richard Hadlee","Wasim Akram","Imran Khan"],correct:0},

{question:"Which wicketkeeper has the most dismissals in Test cricket?",options:["Adam Gilchrist","MS Dhoni","Mark Boucher","Kumar Sangakkara"],correct:2},

{question:"Who scored the fastest Test century (54 balls)?",options:["Viv Richards","Misbah-ul-Haq","Brendon McCullum","AB de Villiers"],correct:2},

{question:"Which cricketer is known as the Rawalpindi Express?",options:["Wasim Akram","Shoaib Akhtar","Waqar Younis","Mohammad Amir"],correct:1},

{question:"Who was the first player to score centuries in all three international formats?",options:["Chris Gayle","AB de Villiers","Suresh Raina","Mahela Jayawardene"],correct:2},

{question:"Which spinner took 800 Test wickets?",options:["Shane Warne","Anil Kumble","Muttiah Muralitharan","Ravichandran Ashwin"],correct:2},

{question:"Who won the ICC ODI World Cup 2023?",options:["India","Australia","England","New Zealand"],correct:1},

{question:"Who scored a century in the 2023 World Cup semifinal vs New Zealand for India?",options:["Rohit Sharma","KL Rahul","Virat Kohli","Shubman Gill"],correct:2},

{question:"Who became the fastest to 50 ODI centuries in 2023?",options:["Sachin Tendulkar","Virat Kohli","Babar Azam","Rohit Sharma"],correct:1},

{question:"Which team won the ICC T20 World Cup 2022?",options:["Pakistan","England","India","Australia"],correct:1},

{question:"Who won Player of the Tournament in ODI World Cup 2023?",options:["Virat Kohli","Rohit Sharma","Mohammed Shami","Travis Head"],correct:0},

{question:"Which Indian bowler took 7 wickets in a match during World Cup 2023?",options:["Jasprit Bumrah","Kuldeep Yadav","Mohammed Shami","Mohammed Siraj"],correct:2},

{question:"Who captained India in ODI World Cup 2023?",options:["Virat Kohli","Hardik Pandya","Rohit Sharma","KL Rahul"],correct:2},

{question:"Which team defeated India in the 2023 World Cup Final?",options:["England","Australia","New Zealand","Pakistan"],correct:1},

{question:"Who scored the fastest T20I century (34 balls) for Nepal?",options:["Dipendra Airee","Kushal Malla","Paras Khadka","Sandeep Lamichhane"],correct:1},

{question:"Who became ICC No.1 Test batsman in 2023 from New Zealand?",options:["Kane Williamson","Devon Conway","Joe Root","Steve Smith"],correct:0},

{question:"Which team won Asia Cup 2023?",options:["Pakistan","India","Sri Lanka","Bangladesh"],correct:1},

{question:"Who took 6 wickets in Asia Cup 2023 final?",options:["Kuldeep Yadav","Mohammed Siraj","Hardik Pandya","Jasprit Bumrah"],correct:1},

{question:"Which country hosted the ODI World Cup 2023?",options:["Australia","England","India","UAE"],correct:2},

{question:"Which team won ICC World Test Championship 2023?",options:["India","Australia","England","New Zealand"],correct:1},

{question:"Who was Player of the Match in WTC 2023 Final?",options:["Pat Cummins","Steve Smith","Travis Head","Alex Carey"],correct:2},

{question:"Who scored the fastest double century in ODI cricket?",options:["Virender Sehwag","Chris Gayle","Glenn Maxwell","Rohit Sharma"],correct:2},

{question:"Who scored the most runs in ODI World Cup 2023?",options:["Rohit Sharma","Virat Kohli","Quinton de Kock","David Warner"],correct:1},

{question:"Who is India’s leading wicket-taker in World Cup 2023?",options:["Jasprit Bumrah","Mohammed Shami","Kuldeep Yadav","Mohammed Siraj"],correct:1},

{question:"Which team won ICC U19 World Cup 2024?",options:["India","Australia","England","Pakistan"],correct:1},

{question:"Which team won Women’s T20 World Cup 2023?",options:["India","Australia","England","South Africa"],correct:1},

{question:"Which team won IPL 2024?",options:["Chennai Super Kings","Mumbai Indians","Kolkata Knight Riders","Gujarat Titans"],correct:2},

{question:"Who captained KKR in IPL 2024?",options:["Nitish Rana","Andre Russell","Shreyas Iyer","Rinku Singh"],correct:2},

{question:"Who won the Orange Cap in IPL 2023?",options:["Faf du Plessis","Virat Kohli","Shubman Gill","Devon Conway"],correct:2},

{question:"Who won the Purple Cap in IPL 2023?",options:["Rashid Khan","Mohammed Shami","Yuzvendra Chahal","Jasprit Bumrah"],correct:1},

{question:"Who holds the highest individual score in IPL (175*)?",options:["AB de Villiers","Brendon McCullum","Chris Gayle","David Warner"],correct:2},

{question:"Which two teams have won the most IPL titles?",options:["CSK & MI","KKR & MI","CSK & KKR","MI & GT"],correct:0},

{question:"Who won Emerging Player of IPL 2023?",options:["Tilak Varma","Yashasvi Jaiswal","Rinku Singh","Ruturaj Gaikwad"],correct:1},

{question:"Who has taken the most wickets in IPL history?",options:["Lasith Malinga","Dwayne Bravo","Yuzvendra Chahal","Amit Mishra"],correct:2},

{question:"Who scored 973 runs in IPL 2016?",options:["David Warner","Virat Kohli","AB de Villiers","Chris Gayle"],correct:1},

{question:"Which stadium hosted IPL 2023 Final?",options:["Wankhede Stadium","Narendra Modi Stadium","Eden Gardens","Chepauk"],correct:1},

{question:"Who was Player of the Match in IPL 2024 Final?",options:["Andre Russell","Mitchell Starc","Sunil Narine","Shreyas Iyer"],correct:1},

{question:"Which team won IPL 2023?",options:["Chennai Super Kings","Gujarat Titans","Mumbai Indians","Rajasthan Royals"],correct:0},

{question:"Who captained Gujarat Titans to IPL title in 2022?",options:["KL Rahul","Hardik Pandya","Shubman Gill","Rashid Khan"],correct:1},

{question:"Who holds record for most sixes in IPL history?",options:["Rohit Sharma","MS Dhoni","Chris Gayle","Andre Russell"],correct:2},

{question:"Who scored the fastest fifty in IPL history (14 balls)?",options:["KL Rahul","Yusuf Pathan","Pat Cummins","Sunil Narine"],correct:0},

{question:"Which team was runner-up in IPL 2024?",options:["SRH","MI","CSK","GT"],correct:0},

{question:"Who won IPL 2022?",options:["CSK","GT","RR","MI"],correct:1},

{question:"Who scored a century in IPL 2023 Qualifier 2 for GT?",options:["Shubman Gill","Hardik Pandya","Sai Sudharsan","David Miller"],correct:0},

{question:"Which IPL team is owned by Shah Rukh Khan?",options:["MI","CSK","KKR","RR"],correct:2},

{question:"Which bowler took 4 wickets in IPL 2024 Final powerplay?",options:["Sunil Narine","Mitchell Starc","Varun Chakravarthy","Andre Russell"],correct:1}

];

let selectedQuestions=[];
let currentQuestion=0;
let score=0;
let selectedOption=null;
let timer;
let timeLeft=30;

const startBtn=document.getElementById("startBtn");
const quizScreen=document.getElementById("quizScreen");
const startScreen=document.getElementById("startScreen");
const questionEl=document.getElementById("question");
const optionsEl=document.getElementById("options");
const submitBtn=document.getElementById("submitBtn");
const nextBtn=document.getElementById("nextBtn");
const timerEl=document.getElementById("timer");
const scoreEl=document.getElementById("score");
const endScreen=document.getElementById("endScreen");
const finalScore=document.getElementById("finalScore");

startBtn.onclick=()=>{
startScreen.classList.add("hidden");
quizScreen.classList.remove("hidden");
selectedQuestions=shuffle(questionBank).slice(0,10);
loadQuestion();
};

function loadQuestion(){
resetState();
let q=selectedQuestions[currentQuestion];
questionEl.textContent=q.question;
q.options.forEach((option,index)=>{
let div=document.createElement("div");
div.textContent=option;
div.classList.add("option");
div.onclick=()=>{
document.querySelectorAll(".option").forEach(opt=>opt.classList.remove("selected"));
div.classList.add("selected");
selectedOption=index;
};
optionsEl.appendChild(div);
});
startTimer();
}

function startTimer(){
timeLeft=30;
timerEl.textContent=timeLeft;
timer=setInterval(()=>{
timeLeft--;
timerEl.textContent=timeLeft;
if(timeLeft===0){
clearInterval(timer);
showAnswer();
}
},1000);
}

submitBtn.onclick=()=>{
clearInterval(timer);
showAnswer();
};

function showAnswer(){
let correctIndex=selectedQuestions[currentQuestion].correct;
document.querySelectorAll(".option").forEach((opt,index)=>{
if(index===correctIndex)opt.classList.add("correct");
if(selectedOption===index&&selectedOption!==correctIndex)opt.classList.add("wrong");
});
if(selectedOption===correctIndex)score++;
scoreEl.textContent="Score: "+score;
submitBtn.classList.add("hidden");
nextBtn.classList.remove("hidden");
}

nextBtn.onclick=()=>{
currentQuestion++;
if(currentQuestion<selectedQuestions.length){
loadQuestion();
submitBtn.classList.remove("hidden");
nextBtn.classList.add("hidden");
}else{
quizScreen.classList.add("hidden");
endScreen.classList.remove("hidden");
finalScore.textContent="Final Score: "+score+" / 10";
}
};

function resetState(){
selectedOption=null;
optionsEl.innerHTML="";
}

function shuffle(array){
for(let i=array.length-1;i>0;i--){
let j=Math.floor(Math.random()*(i+1));
[array[i],array[j]]=[array[j],array[i]];
}
return array;
}
const playAgainBtn = document.getElementById("playAgainBtn");

playAgainBtn.addEventListener("click", function () {
    location.reload();
});