import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../styles'; 


const styles = StyleSheet.create({    
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    title:{
        color: colors.whiteRick,
        fontSize: 42,
        fontWeight: 'bold',
        alignSelf: 'center',
      } , 
    buttonsRow:{          
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',       
    },
    image:{
        width: 400,
        height: 400,
    },
    text:{ 
        fontSize: fonts.medium, 
        color: colors.whiteRick,
        margin: 20,
        padding: 10,     
    },
    
})

export default styles