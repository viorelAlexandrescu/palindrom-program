/* 
    Anyway, programul face asa, primeste N (sa zicem N=23), 
    inverseaza cifrele (gen pentru N=23, face n=32) 
    apoi aduna N cu n verifica daca N+n e palindrom, 
    daca e se poreste si imi zice dupa cati pasi si care e 
    palindromul daca nu repeta 
    (pentru 23 e simplu ca 23+32=55)
    67+76=143
    143+341=484

    Nu baga mai mult de 999 ca se prajeste
*/

var steps = [];

function onCheckInput() {
    steps = [];
    hideListLabel();
    hideSteps();
    var input = document.getElementById('userInput');
    var N = Number(input.value);
    if(checkInput(N)){
        myVar = setInterval(startProgram(N), 500);
    }
}

var myVar;

function startProgram(N) {
    var n = reverseNumber(N);
    var currentValue = N + n;
    steps.push({
        N: N,
        n: n,
        result: currentValue
    });

    if(isPalindrome(currentValue)) {
        stopProgram();
    } else {
        startProgram(currentValue);
    }
}

function stopProgram() {
    clearInterval(myVar);

    showListLabel('Did ' + steps.length + (steps.length > 1 ? ' steps' : ' step'));
    showSteps();
}

function showListLabel(message) {
    var listLabel = document.getElementById("listLabel");
    listLabel.innerText = message;
    listLabel.style.display = "block";
}

function hideListLabel() {
    var listLabel = document.getElementById("listLabel");
    listLabel.style.display = "none";
}

function showSteps() {
    var stepsList = document.getElementById("stepsList");
    stepsList.style.display = "block";
    for (var step of steps) {
        var li = document.createElement('li');
        var text = "N: " + step.N + " n: " + step.n + " result: " + step.result;
        li.appendChild(document.createTextNode(text));
        stepsList.appendChild(li);
    }
}


function hideSteps() {
    var stepsList = document.getElementById("stepsList");
    stepsList.style.display = "none";
    while (stepsList.hasChildNodes()) {   
        stepsList.removeChild(stepsList.firstChild);
    }
}

function isPalindrome(value) {
    var result = value.toString();
    return result == result.split('').reverse().join('');
}

function reverseNumber(number) {
    var result = number.toString();
    result = result.split("").reverse().join("");
    return Number(result);
}

function checkInput(N) {
    switch(N) {
        case 196:
            showListLabel("Ah nu nu nu nu");
            return false;
            break;
    }
    return true;
}