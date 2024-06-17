import { StyleSheet } from "react-native";

export const colors={
    darkGray:'#2d2d2d',
    ligthgray:'#9b9b9b',
    orange:'#ff9427'  ,

    textPrymary:'white',
    textSecondary:'#666666',
    background:'#000000',
}

export const globalStyles= StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:colors.background
    },
    calculatorContainer:{
        flex:1,
        padding:20,
        justifyContent:'flex-end',
    },
    mainResult:{
        color:colors.textPrymary,
        fontSize:70,
        textAlign:'right',
        marginBottom:10,
        fontWeight:'300',
    },
    subResult:{
        color:colors.textSecondary,
        fontSize:40,
        textAlign:'right',
        fontWeight:'300',
    },
    row:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:18,
        paddingHorizontal:10,
    },
    button:{
        height:70,
        width:70,
        backgroundColor:colors.ligthgray,
        borderRadius:100,
        justifyContent:'center',
        marginHorizontal:7,
    },
    textButton:{
        textAlign:'center',
        padding:10,
        color:colors.textPrymary,
        fontSize:30,
        fontWeight:'300',
    },


})