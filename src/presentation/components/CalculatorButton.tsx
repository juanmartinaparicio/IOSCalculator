import React from 'react'
import { colors, globalStyles } from '../../config/theme/app-theme';
import { View, Pressable, Text } from 'react-native'

interface Props{
    label:string,
    buttonColor?:string,
    doubleSize?:boolean,
    textColor?:boolean,
    onPress :() => void

}
const CalculatorButton = ({label, buttonColor = colors.darkGray, doubleSize = false, textColor=false, onPress} : Props) => {
  return (
    <View>
            <Pressable 
            onPress={onPress} 
            style={({pressed})=>({
                ...globalStyles.button,
                backgroundColor:buttonColor,
                width:(doubleSize? 160 : 70),
                opacity:pressed ? 0.6 : 1
            })}>
                <Text style={{...globalStyles.textButton, color: (textColor ? 'black' : colors.textPrymary)} }>{label}</Text>
            </Pressable>
    </View>
  )
}

export default CalculatorButton
