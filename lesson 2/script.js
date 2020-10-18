function askToCount(){
    let questionNumber = parseInt(prompt('Enter the number of questions'),10);   
    for (let j = 0; j < questionNumber; j++){
    const mathActions = ['+', '-', '*', '/'];
    const mathAction = mathActions[Math.floor(Math.random()*(mathActions.length))];
    const a = Math.floor(Math.random() * 1000);
    const b = Math.floor(Math.random() * 1000);
    let result;
    let toCalculate;

    if (mathAction === '+'){
        result = a + b,
        toCalculate = `${a} + ${b}`;  
    } else if (mathAction === '-'){
        result = a - b,
        toCalculate = `${a} - ${b}`;
    } else if (mathAction === '*'){
        result = a * b,
        toCalculate = `${a} * ${b}`;   
    } else if (mathAction === '/'){
        result = a / b,
        toCalculate = `${a} / ${b}`;
    }
    
let answer = parseInt(prompt(`Enter the answer: ${toCalculate}`),10);
countAnswers (answer, toCalculate, result);
logAllAnswers (answer, toCalculate, result)
} 
// commentAnswers(i, questionNumber); 
}

function countAnswers (answer, toCalculate, result){
let i = 0;
if (answer === result) {
    console.log(`Correct: ${toCalculate} = ${result}`);
    i++;
} else if (answer !== result) {
    console.log(`Wrong: ${toCalculate} = ${answer}`);
}
}

function commentAnswers(i, questionNumber){    
let percent = Math.round((i * 100)/questionNumber);
let comment;
if (percent === 100){
    comment = 'Excellent!';
} else if (percent >= 95 && percent <= 99 ){
    comment = 'Good job!';
} else if (percent >= 80 && percent < 95 ){
   comment = 'Good job, but try better!';
}else if (percent >= 65 && percent < 80 ){
   comment = 'You need to train better!';
} else {
   comment = 'Not good for you! You need to learn math!';
}
console.log(`Thank! You've answered to ${i} questions from ${questionNumber}. Your result: ${percent}%. ${comment}`)
}

function logAllAnswers (answer, toCalculate, result){
    let allAnswerlogs = [];
    let logOfAnswer;
    if (answer === result) {
        logOfAnswer = `Correct answer ${answer}: ${toCalculate} = ${result}`;
        allAnswerlogs.push(logOfAnswer);
    } else if (answer !== result) {
        logOfAnswer = `Wrong answer ${answer}: ${toCalculate} = ${result}`;
        allAnswerlogs.push(logOfAnswer);
    }

    console.log(allAnswerlogs);
}
    
askToCount();











