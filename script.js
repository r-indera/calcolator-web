const calculatorScreen = document.querySelector('.calculator-screen')

const UpdateScreen = (number) => {
	calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
	if (currentNumber === '0') {
		currentNumber = number
	} else {
		currentNumber += number
	}
}

numbers.forEach((number)=>{
	number.addEventListener("click", (event)=> {
	inputNumber(event.target.value)
	UpdateScreen(currentNumber)
	})
})

const operators = document.querySelectorAll(".operator")

const inputOperator = (operator) => {
	if (calculationOperator === '') {
		prevNumber = 'currentNumber'
	}
	calculationOperator = 'operator'
	currentNumber = '0'
}

operators.forEach((operator) => {
	operator.addEventListener("click", (event)=> {
	inputOperator(event.target.value)
	})
})


const equalSign = document.querySelector('.equal-sign')

const calculate = () => {
	let result = ''
	switch(calculationOperator) {
		case '+':
			result = parseFloat(prevNumber) + parseFloat(currentNumber)
			break
		case '-':
			result = parseFloat(prevNumber) - parseFloat(currentNumber)
			break
		case '*':
			result = parseFloat(prevNumber) * parseFloat(currentNumber)
			break
		case '/':
			result = parseFloat(prevNumber) / parseFloat(currentNumber)
			break
		default :
			return
	}
	currentNumber = result
	calculationOperator = ''
}

equalSign.addEventListener('click', () => {
	calculate()
	UpdateScreen(currentNumber)
	})

const clearBtn = document.querySelector('.all-clear')

const clearAll = () => {
	prevNumber = ''
	calculationOperator = ''
	currentNumber = '0'
}

clearBtn.addEventListener('click', () => {
	clearAll()
	UpdateScreen(currentNumber)
	})

const decimal = document.querySelector('.decimal')

inputDesimal = (dot) => {
	currentNumber += dot
}

decimal.addEventListener('click', (event) => {
	inputDesimal(event.target.value)
	UpdateScreen(currentNumber)
	})






