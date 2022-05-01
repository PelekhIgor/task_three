'use strict'
function calculator(){

    const VALID_OPERATOR = ['+','-','*','/']
    let resultMessage = ''

    function askUser(message){
      return prompt(message)
    }

    function showMessage(message){
        return alert(message)
    }

    function isOperatorValid(operator){
        return VALID_OPERATOR.includes(operator) //includes(value) – возвращает true, если в массиве имеется элемент value, в противном случае false.
    }

    function isNotANaN(operand){
        return !isNaN(operand)
    }

    const askOperandAmount = (message) =>{                   //спрашиваем сколько операндов будет задействовано
    let amount = +askUser(message)
        while (amount < 1 || amount > 5 || !isNotANaN(amount)){
        showMessage('Ошибка, проверьте что вы вводите число от 2 до 5')
            amount = +askUser(message)
        }
        return amount
    }

    const askForOperator = (message) => {      //  спрашиваем какой оператор будет задействован
        let operator = askUser(message)
        while (!isOperatorValid(operator)){
            showMessage('Ошибка, введите математический оператор (+ - * /)')
            operator = askUser(message)
        }
        return operator
    }

    function askOperands(amount, operator, message){   // вводим поочереди операнды
        let operands = []                 // введенные числа будут в масиве
        let operand = 0
        for (let i = 0; i < amount; i++ ){     // цыкл for  спрашивает ввод числа, количество запросов равно amount
            operand = askUser(message)
            while (!isNotANaN(operand) || operator === '/' && operand === '0'){     // проверка на число и на деление на 0
                 operand = askUser('Ошибка, нужно ввести число, или вы делите на 0')
            }
            operands.push(+operand)   // push - метод массива добавляет элементы в конец
        }
        return operands
    }
        function calcResult(operands, operator){
        let result = operands[0]
            resultMessage += result
             operands.forEach((e,i) => {   // forEach(func) – вызывает func для каждого элемента. Ничего не возвращает.
                 if(i>0){
                     switch (operator) {
                         case '+':
                             result += e
                             break;
                         case '-':
                             result -= e
                             break;
                         case '*':
                             result *= e
                             break;
                         case '/':
                             result /= e
                             break;
                     }
        resultMessage += `${operator}${e}`
                 }
             })
            resultMessage += ` = ${result}`
        }

const operator = askForOperator('Введите математический оператор')
const amount = askOperandAmount('Какое количество операндов будет задействовано?')
   const operands = askOperands(amount, operator, 'Введите число')
    calcResult(operands, operator)
    showMessage(resultMessage)



}
calculator()