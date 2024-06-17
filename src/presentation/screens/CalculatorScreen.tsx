import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { colors, globalStyles } from '../../config/theme/app-theme'
import CalculatorButton from '../components/CalculatorButton';
import { useCalculator } from '../hooks/useCalculator';

const CalculatorScreen = () => {
    const {number, previousNumber, formula, buildNumber, clean, deleteOperation, toggleSign, divideOperation, multiplyOperation, subtractOperation, addOperation, calculateResult} = useCalculator();
  return (
    <View style={globalStyles.calculatorContainer}>
        <View style={{paddingHorizontal:30, paddingBottom:20}}>
            <Text
                adjustsFontSizeToFit
                numberOfLines={1} 
                style={globalStyles.mainResult}>{formula}</Text>
            <Text
                adjustsFontSizeToFit
                numberOfLines={1}  
                style={globalStyles.subResult}>
                    {(previousNumber === '0') ? '' : previousNumber}</Text>
        </View>
        <View style={globalStyles.row}>
            <CalculatorButton onPress={clean}label='C' buttonColor={colors.ligthgray} textColor/>
            <CalculatorButton onPress={toggleSign}label='+/-' buttonColor={colors.ligthgray} textColor/>
            <CalculatorButton onPress={deleteOperation}label='del' buttonColor={colors.ligthgray}textColor/>
            <CalculatorButton onPress={divideOperation}label='/'  buttonColor={colors.orange}/>
        </View>
        <View style={globalStyles.row}>
            <CalculatorButton onPress={()=> buildNumber('7')}label='7' />
            <CalculatorButton onPress={()=> buildNumber('8')}label='8' />
            <CalculatorButton onPress={()=> buildNumber('9')}label='9' />
            <CalculatorButton onPress={multiplyOperation}label='x'  buttonColor={colors.orange}/>
        </View>
        <View style={globalStyles.row}>
            <CalculatorButton onPress={()=> buildNumber('4')}label='4' />
            <CalculatorButton onPress={()=> buildNumber('5')}label='5' />
            <CalculatorButton onPress={()=> buildNumber('6')}label='6' />
            <CalculatorButton onPress={subtractOperation}label='-'  buttonColor={colors.orange}/>
        </View>
        <View style={globalStyles.row}>
            <CalculatorButton onPress={()=> buildNumber('1')}label='1' />
            <CalculatorButton onPress={()=> buildNumber('2')}label='2' />
            <CalculatorButton onPress={()=> buildNumber('3')}label='3' />
            <CalculatorButton onPress={addOperation}label='+'  buttonColor={colors.orange}/>
        </View>
        <View style={globalStyles.row}>
            <CalculatorButton onPress={()=> buildNumber('0')}label='0' doubleSize={true}/>
            <CalculatorButton onPress={()=> buildNumber('.')}label='.' />
            <CalculatorButton onPress={calculateResult}label='='  buttonColor={colors.orange}/>
        </View>
        
        
    </View>
  )
}

export default CalculatorScreen