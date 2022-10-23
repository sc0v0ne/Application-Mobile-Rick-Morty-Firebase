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
        paddingTop:20, 
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
    },
    containerModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      
      itemModalAnime: {
        backgroundColor: colors.greenPortalThree,
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      titleModalAnime: {
        fontSize: 34,
        marginBottom: 20,
      },
      modalViewModalAnime: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      buttonModalAnime: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpenModalAnime: {
        backgroundColor:colors.blueMorty,
      },
      buttonCloseModalAnime: {
        backgroundColor: colors.greenPortalThree,
      },
      textStyleModalAnime: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalTextModalAnime: {
        marginBottom: 15,
        textAlign: "center",
        
      },
      containerRickAnime: {
        flex: 1,
      },
      itemRickAnime: {
        backgroundColor: colors.blueMorty,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      titleRickAnime: {
        fontSize: 32,
      },
})

export default styles