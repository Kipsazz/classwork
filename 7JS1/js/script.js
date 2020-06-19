
//1 block. declaration.
var answerToPrompt, output, checkVarType;
var carModel = 'Ford';
var carColor = 'blue';
var isCarNew = false; //boolen
var carProductionYear = 2011; //number


//2 block. actions
answerToPrompt = prompt('What is Your car model?');
output = '<p style="color: ' + carColor + ';">' + answerToPrompt + '</p>';
carModel = 'Lamborgini';
carModel = 'ZAZ';
isCarNew = 1;
checkVarType = typeof (isCarNew);


//3 block. output
console.log(checkVarType);
document.write(output);
