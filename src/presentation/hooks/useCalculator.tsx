import { useEffect, useRef, useState } from 'react'

enum Operator{
    add ='+',
    subtract='-',
    multiply='x',
    divide='/',
}
export const useCalculator = () => {

    const [formula, setFormula] = useState('')
    const [number, setNumber] = useState('0');
    const [previousNumber, setPreviousNumber] = useState('0');

    const lastOperation = useRef<Operator>();

    useEffect(() => {
        if(lastOperation.current){
            const firstFormulaPart= formula.split(' ').at(0);
            setFormula(`${firstFormulaPart}${lastOperation.current}${number}`);
        }else{
            setFormula(number);
        }
      
    }, [number])
    

    const clean =()=>{
        setNumber('0');
        setPreviousNumber('0');
        lastOperation.current = undefined;
        setFormula('');
    }
    const deleteOperation=()=>{
        if (number.length ===2 && number.includes('-')){
            setNumber('0');
            return;
        }
        
        if (number.length === 1 ) {
            setNumber ('0');
            return;
        }
        setNumber(number.slice(0, -1));
    }

    const toggleSign=()=>{
        if (number.includes('-')) {
            setNumber(number.replace('-', ''));
            return;
        }
        setNumber('-' + number);
    }

    const buildNumber= (numberString : string)=>{
        if (number.includes('.')&& numberString === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {
            //punto Decimal
            if (numberString === '.') {
                return setNumber(number + numberString);
            }
            //evaluar se is otro cero y no hay punto decimal
            if (numberString ==='0' && number.includes('.')) {
                return setNumber(number + numberString);
            }
            //evaluar si es direrente de cero y no hay punto, y es el primer numero
            if (numberString !=='0' && !number.includes('.')) {
                return setNumber(numberString);
            }
            //evitar el 000000
            if (numberString === '0' && number === '0') {
                return;
            }
            return setNumber(number + numberString);
        }

        setNumber( number + numberString);
    }

    const setLastNumber = ()=>{
        if (number.endsWith('.')) {
            setPreviousNumber(number.slice(0, -1));
        } else {
            setPreviousNumber(number);
        }
        setNumber('0');
    }
    const divideOperation = ()=>{
        setLastNumber();
        lastOperation.current = Operator.divide;
    }
    const multiplyOperation = ()=>{
        setLastNumber();
        lastOperation.current = Operator.multiply;
    }
    const subtractOperation = ()=>{
        setLastNumber();
        lastOperation.current = Operator.subtract;
    }
    const addOperation = ()=>{
        setLastNumber();
        lastOperation.current = Operator.add;
    }

    const calculateResult = ()=>{
        const result =calculateSubResult();
        setFormula(`${result}`);
        lastOperation.current = undefined;
        setPreviousNumber('0');
    }

    const calculateSubResult=():number =>{
        const [firstValue , operation, secondValue]= formula.split(' ');
        const num1 = Number(firstValue);
        const num2 = Number(secondValue);
        //const num1 = Number(number);
        //const num2 = Number(previousNumber);
        if (isNaN (num2))return num1;
        switch (operation){
            case Operator.add:
                return num1 + num2;
            case Operator.subtract:
                return num2 - num1;
            case Operator.multiply:
                return num1 * num2;
            case Operator.divide:
                return num2 / num1;
            default:
                throw new Error('No se pudo realizar la operacion');
        }
        // if (lastOperation.current === Operator.add) {
        //     setNumber(`${num1 + num2}`);
        // }
        // if (lastOperation.current === Operator.subtract) {
        //     setNumber(`${num2 - num1}`);
        // }
        // if (lastOperation.current === Operator.multiply) {
        //     setNumber(`${num1 * num2}`);
        // }
        // if (lastOperation.current === Operator.divide) {
        //     setNumber(`${num2 / num1}`);
        // }
    }
  return {
    //properties
    number,
    previousNumber,
    formula,
    //methods
    buildNumber,
    clean,
    deleteOperation, 
    toggleSign,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult
  }
}