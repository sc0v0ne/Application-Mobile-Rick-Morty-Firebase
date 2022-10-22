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
    containerRickMovies:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: colors.blueMorty,
        alignItems: 'center',        
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
    },
    container:{
        backgroundColor: colors.greenPortalThree,
        shadowColor: colors.blueMorty,
        margin: 12,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        borderRadius: 30,
        paddingBottom: 40,
    },
    input:{
        padding: 20,
        margin:10,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: colors.whiteRick,               
        
    },
    text:{
        fontSize: fonts.medium,
        color: colors.whiteRick,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
        margin: 10,
    },
    textLabel:{
        paddingLeft: 10,
    },
    textForgot:{
        alignSelf: 'flex-end',
        paddingRight: 20,
        fontSize: fonts.small,
    },
    buttonStyle:{
        alignSelf: "center",
        padding: 8,
        margin: 3,
        backgroundColor: colors.titleRick,
        borderRadius: 10,
        shadowColor: colors.greenPortalTwo,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        width: '90%',
    },
    textButton:{
        fontSize: fonts.medium,
        color: colors.whiteRick,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
    },
    imageRick:{
        width: 270,
        height: 270,
        alignSelf: 'flex-end',
    },
    imageRickCrazy:{
        width: 270,
        height: 270,
        alignSelf: 'flex-start',
    }
})

export default styles