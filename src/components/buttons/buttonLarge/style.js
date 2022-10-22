import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../../styles'; 

const styles = StyleSheet.create({
    viewLargeButton:{
        
    },
    largeButton:{
        padding: 2,
        backgroundColor: colors.yellowMorty,
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        borderRadius: 20,
        marginBottom: 20,
        width: '100%'
    },
    textLargeButton:{
        fontSize: fonts.medium,
        color: colors.blueMorty,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
    }
})

export default styles