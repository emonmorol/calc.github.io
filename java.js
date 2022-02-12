function getNumber(numberId){
    const inputValue = document.getElementById(numberId);
    const inputText = inputValue.innerText;
    return inputText;
}

function addNumbers(inputMan){
    const outputText = document.getElementById('initial-output');
    console.log(outputText)
    const outputShow = outputText.innerText;
    outputText.innerText = outputShow + inputMan;
}

document.getElementById('one').addEventListener('click',function(){
    const inputOne = getNumber('one');
    addNumbers(inputOne);
})
document.getElementById('two').addEventListener('click',function(){
    const inputTwo = getNumber('two');
    addNumbers(inputTwo);
})
document.getElementById('three').addEventListener('click',function(){
    const inputThree = getNumber('three');
    addNumbers(inputThree);
})
document.getElementById('four').addEventListener('click',function(){
    const inputFour = getNumber('four');
    addNumbers(inputFour);
})
document.getElementById('five').addEventListener('click',function(){
    const inputFive = getNumber('five');
    addNumbers(inputFive);
})
document.getElementById('six').addEventListener('click',function(){
    const inputsix = getNumber('six');
    addNumbers(inputsix);
})
document.getElementById('seven').addEventListener('click',function(){
    const inputseven = getNumber('seven');
    addNumbers(inputseven);
})
document.getElementById('eight').addEventListener('click',function(){
    const inputeight = getNumber('eight');
    addNumbers(inputeight);
})
document.getElementById('nine').addEventListener('click',function(){
    const inputnine = getNumber('nine');
    addNumbers(inputnine);
})
document.getElementById('zero').addEventListener('click',function(){
    const inputzero = getNumber('zero');
    addNumbers(inputzero);
})
document.getElementById('point').addEventListener('click',function(){
    const inputpoint = getNumber('point');
    addNumbers(inputpoint);
})
document.getElementById('minus').addEventListener('click',function(){
    const inputminus = getNumber('minus');
    addNumbers(inputminus);
})
document.getElementById('division').addEventListener('click',function(){
    const inputdivision = getNumber('division');
    addNumbers(inputdivision);
})
document.getElementById('equal').addEventListener('click',function(){
    let answerText = document.getElementById('initial-output').innerText;
    let answer = eval(answerText);
    document.getElementById('initial-output').innerText = answer;
})
document.getElementById('plus').addEventListener('click',function(){
    const inputplus = getNumber('plus');
    addNumbers(inputplus);
})
document.getElementById('ac').addEventListener('click',function(){
    document.getElementById('initial-output').innerText = '';
})
document.getElementById('multiply').addEventListener('click',function(){
    const inputmultiply = getNumber('multiply');
    addNumbers(inputmultiply);
})
document.getElementById('remain').addEventListener('click',function(){
    const inputremain = getNumber('remain');
    addNumbers(inputremain);  
})