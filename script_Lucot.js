function task1(){
    let count = 1;
    document.getElementById("output1").innerHTML = "Output:<br>"
    while(count <= 10){
        console.log(`${count} \n`);
        document.getElementById("output1").innerHTML += `${count} <br>`;
        count++;
    }
}

function task2(){
    let num = Number(prompt("Enter a number(N): "));
    let count = 1;
    let result = 0;
    while(count <= num){
        result += count;
        count++
    }
    console.log(`Output: \n${result}`);
    document.getElementById("output2").innerHTML = `Output: <br>${result}`;
}

function task3(){
    let input = Number(prompt("Enter a number(N): "));
    let count = 0;
    document.getElementById("output3").innerHTML = `Output: <br> <br> Multiplication Table of ${input} <br>`;
    while(count <= 10){
        console.log(`${input} x ${count} = ${input * count}\n`);
        document.getElementById("output3").innerHTML += `${input} x ${count} = ${input * count}<br>`;
        count++;
    }
}

function task4(){
    let num = prompt("Enter a numbers: ");
    let numString = num.toString();
    let digits = [];
    let count = 0;
    while(count < numString.length){
        digits.push(numString[count]);
        count++;
    }
    let reversedDigits = digits.reverse();

    document.getElementById('output4').innerHTML = `Output: <br> Your Inputs: ${num}<br> Reversed: ${reversedDigits.map(Number).join(" ")}`;
}

function task5() {
    let n = prompt('Enter a number:');
    let sum = 0;
    let i = 0;

    while (i < n.length) {
        sum += Number(n[i]); 
        i++;
    }

    document.getElementById('output5').innerHTML = `Output: <br> Your Inputs: ${n} <br>Sum of Digits: ${sum}`;
}


function task6() {
    let n = prompt('Enter a number:'); 
    let original = n;

    let reversed = '';
    let i = n.length - 1;

    while (i >= 0) {
        reversed += n[i];
        i--;
    }

    if (original === reversed) {
        document.getElementById("output6").innerHTML = `Output: <br>${original} is a Palindrome.`;
    } else {
        document.getElementById("output6").innerHTML = `Output: <br>${original} is Not a Palindrome.`;
    }
}
