import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../styles'; 


const styles = StyleSheet.create({
    containerHome:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: colors.greenPortalThree,       
    },
    buttonsLoginRow:{ 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerExamOne:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: colors.blueMorty,
        alignItems: 'center',        
    },
    containerExamTwo:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',   
        backgroundColor: colors.blueMorty,
    },
    containerLogin:{
        flex: 1, 
        justifyContent: 'center',  
        backgroundColor: colors.greenPortalThree,
    },
    containerSignUp:{
        flex: 1, 
        justifyContent: 'center',  
        backgroundColor: colors.greenPortalThree,

    },
    buttomHeader:{
        marginRight: 20,
        backgroundColor: colors.whiteRick,
        padding: 5,
        width: 100,
        borderRadius: 10,
    },
    textHeader:{        
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: fonts.regular
    }
})

export default styles