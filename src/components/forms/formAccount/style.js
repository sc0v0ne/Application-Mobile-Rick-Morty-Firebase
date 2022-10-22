import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../../styles';

export default StyleSheet.create({
  container: {
    margin: 14,
  },
  title:{
    color: colors.whiteRick,
    fontSize: 42,
    fontWeight: 'bold',
    alignSelf: 'center',
  } , 
  titleInputs:{
    margin:4, 
    fontWeight: 'bold',
    color: colors.whiteRick,
    marginLeft: 10,
  },
  picker:{
    backgroundColor: colors.yellowMorty,
    color: colors.blackRick,
    marginTop: 10,
    marginBottom: 10,
  },
  pickerItem:{
    backgroundColor: colors.yellowMortyk,
    color: colors.blackRick,
  },
  slider:{
    width: '100%',
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    
  },
  switch:{
    padding:5,
    alignSelf: 'flex-start',
  },
  inputText: {
    borderColor: colors.blueMorty,
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    backgroundColor: colors.whiteRick,    
  },
});




