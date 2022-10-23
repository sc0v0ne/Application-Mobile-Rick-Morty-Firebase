import React, { useState } from "react";
import { 
    View,
    Text,
    Linking,
    Alert,
    Modal,
    Pressable
} from 'react-native';
import ScreensStyles from '../../styles/screensStyles/ScreensStyles'

import {
    Card,
  } from 'react-native-paper';

export default function Item({title, image, link, preview}) {

    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>    
            <Card style={ScreensStyles.itemModalAnime}>

                <Card.Content>
                    <Text style={ScreensStyles.titleModalAnime}>{title}</Text>
                </Card.Content>

                <Card.Cover style={ScreensStyles.imageModalAnime} source={{ uri: image }} />
                    
                <Card.Actions style={ScreensStyles.button_1ModalAnime}>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {

                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                        
                        }}
                        >
                        <View style={ScreensStyles.containerModal}>
                            <View style={ScreensStyles.modalViewModalAnime}>
                                <Text style={ScreensStyles.modalText}>{preview}</Text>
                                <Pressable
                                    style={[ScreensStyles.buttonModalAnime, ScreensStyles.buttonCloseModalAnime]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                    >
                                    <Text style={ScreensStyles.textStyleModalAnime}>Close</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>

                    <Pressable mode='text'  onPress={() => {Linking.openURL(link)}}><Text>More Info</Text></Pressable>
                    
                    <Pressable
                        style={[ScreensStyles.buttonModalAnime, ScreensStyles.buttonOpenModalAnime]}
                        onPress={() => setModalVisible(true)}
                        >
                        <Text style={ScreensStyles.textStyleModalAnime}>Sinopse</Text>
                    </Pressable>
                </Card.Actions>
            </Card>
    </View>
    );
}

