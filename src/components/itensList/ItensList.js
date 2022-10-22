import React, { useState } from "react";
import { 
    View,
    StyleSheet,
    Text,
    Linking,
    Alert,
    Modal,
    Pressable
} from 'react-native';

import {
    Card,
  } from 'react-native-paper';

export default function Item({title, image, link, preview}) {

    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>    
            <Card style={styles.item}>

                <Card.Content>
                    <Text style={styles.title}>{title}</Text>
                </Card.Content>

                <Card.Cover style={styles.image} source={{ uri: image }} />
                    
                <Card.Actions style={styles.button_1}>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {

                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                        
                        }}
                        >
                        <View style={styles.containerModal}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>{preview}</Text>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                    >
                                    <Text style={styles.textStyle}>Close</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>

                    <Pressable mode='text'  onPress={() => {Linking.openURL(link)}}><Text>More Info</Text></Pressable>
                    
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => setModalVisible(true)}
                        >
                        <Text style={styles.textStyle}>Sinopse</Text>
                    </Pressable>
                </Card.Actions>
            </Card>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:10,    
  },
  containerModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  
  item: {
    backgroundColor: '#a1c4fd',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 34,
    marginBottom: 20,
  },
  modalView: {
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    
  },

  

});