

// function calculate(allValues) {
//     let temp = new Array();
//     for (let i = 0; i < allValues.length; i++) {
//         if (allValues[i] == '+' || allValues[i] == '-') {
//             let value1 = temp.pop();
//             let oper = allValues[i];
//             let value2 = allValues[i + 1];
//             if (i + 1 < allValues.length) {
//                 i += 1;
//             }
//             let output = eval(value1 + oper + value2);
//             temp.push(output);
//         } else {
//             temp.push(allValues[i]);
//         }
//         console.log(temp[temp.length]);
//         console.log("Hmm calculate the values please..." + eval(temp.join('')));

//     }
// }

var count = 0;
var allValues = new Array();
var tempArray = new Array();
function values(value) {
    var operator = ['+', '-', '*', "/"];
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let temp = value.id;
    var number;
    if (operator.indexOf(temp) > -1 || temp === '=') {
        if (tempArray.length > 0) {
            number = tempArray.join('');
            tempArray = new Array();
            allValues.push(number);
        }
    }
    if (numbers.indexOf(temp) > -1 || (temp === '.' && count === 0)) {
        if (temp === '.') {
            count += 1;
        }
        document.getElementById("display").innerHTML += temp;
        tempArray.push(temp);
    } else if (temp === '.' && count != 0) {
        document.getElementById("display").innerHTML = "Wrong Input";
        return "please enter correct value";
    } else if (operator.indexOf(temp) > -1) {
        if (allValues.length != 0 && operator.indexOf(allValues[allValues.length - 1]) < 0) {
            allValues.push(temp);
            count = 0;
            document.getElementById("display").innerHTML += temp;
        } else {
            document.getElementById("display").innerHTML = "Wrong Input";
            return "Please enter correct value";
        }
    } else if (temp === '=') {
        let size = allValues.length;
        console.log(allValues[0]);
        let checkLastDigit = allValues[size - 1];
        if (operator.indexOf(checkLastDigit) > -1) {
            document.getElementById("display").innerHTML = "Wrong Input";
            return "Error occurred";
        } else {
            document.getElementById("result").innerHTML = eval(allValues.join(''));
        }
    } else if (temp === 'C') {
        count = 0;
        allValues = new Array();
        tempArray = new Array();
        document.getElementById('display').innerHTML = '';
        document.getElementById('result').innerHTML = '';
    }

}
