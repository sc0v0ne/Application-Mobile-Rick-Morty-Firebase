import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../../styles'; 

const styles = StyleSheet.create({
    viewMediumButton:{
        
    },
    mediumButton:{
        borderColor: colors.whiteRick,
        
    },
    textMediumButton:{
        fontSize: fonts.medium,
        color: colors.whiteRick,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
    }
})

export default styles