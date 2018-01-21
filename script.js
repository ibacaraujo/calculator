// Basic math operators
function add(n1, n2) {
	return n1 + n2;
}

function subtract(n1, n2) {
	return n1 - n2;
}

function multiply(n1, n2) {
	return n1 * n2;
}

function divide(n1, n2) {
	return n1 / n2;
}

function operate(op, n1, n2) {
	let operateResult = 0;
	if (op === "+") {
		operateResult = add(n1, n2);
	} else if (op === "-") {
		operateResult = subtract(n1, n2);
	} else if (op === "*") {
		operateResult = multiply(n1, n2);
	} else {
		operateResult = divide(n1, n2);
	}
	return operateResult;
}

const buttons = document.querySelectorAll(".btnShow");
let input = document.querySelector("#display");
let display = "";
let n1 = 0;
let n2 = 0;
let numbers = [];
let operatorsArray = [];

buttons.forEach((button) => {
	button.addEventListener('click', function(e) {
		input.value += e.target.textContent;
		display = input.value;
	});
});

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
	operator.addEventListener('click', storeFirstNumber);
});

function storeFirstNumber(e) {
	n1 = parseInt(display);
	operator = display[display.length - 1];
}

function storeAnotherNumbers() {
	displayArray = display.split(/(\-|\+|\/|\*)/g);
	for (let i = 1; i < displayArray.length; i++) {
		if((i%2 == 0)) {
			numbers.push(parseInt(displayArray[i]));
		} else {
			operatorsArray.push(displayArray[i]);
		}

	}
}

const btnEquals = document.querySelector('#btnEquals');

btnEquals.addEventListener('click', calculateResult);

function calculateResult(e) {
	let result = 0;
	storeAnotherNumbers();
	for(i in numbers) {
		n2 = numbers[i];
		result = operate(operatorsArray[i], n1, n2);
		n1 = result;
	}
	input.value = result; 
}

const btnClear = document.querySelector("#btnClear");

btnClear.addEventListener('click', clearDisplay);

function clearDisplay() {
	let display = "";
	let n1 = 0;
	let n2 = 0;
	let numbers = [];
	let operatorsArray = [];
	input.value = null;
}