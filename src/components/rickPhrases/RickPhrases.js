import React, { useState } from 'react'
import { 
  View,
  Text,
  Image,
} from 'react-native'

import { MotiView } from 'moti'
import ButtonMedium from '../buttons/buttonMedium/ButtonMedium'

import rickNormal from '../../images/rickNormal.png'
import rickCrazy from '../../images/rickCrazy.png'

import styles from './style'

export default function RickPhrases() {    
  let phrases = ['Se você brincar um pouco com as palavras, consegue fazer qualquer coisa soar bem (ou mal).','Viver é arriscar tudo. Caso contrário você é apenas um pedaço inerte de moléculas montadas aleatoriamente à deriva onde o universo te sopra.','“Ninguém existe de propósito, ninguém pertence a lugar nenhum.', 'O amor é apenas uma reação química.', 'Planejar o fracasso é ainda mais idiota do que simplesmente planejar.', 'Casamentos são como velórios com bolo.', 'Ninguém existe de propósito. Ninguém pertence a qualquer lugar. Todo mundo vai morrer... Venha assistir TV', 'Eu vou te dizer o que eu acho das escolas, Jerry: É uma perda de tempo (...) Escola não é um lugar para pessoas inteligentes.', 'Qual a chance de ser legítimo e não uma mentira que contamos a nós mesmo porque temos medo de morrer sozinhos?', 'A vida é esforço e só vou parar quando eu morrer!']

  

  const [rick, setRick] = useState(rickNormal)
  const [phrase, setPhrase] = useState([])
  
  const sendPhrase = () => {    
    setPhrase(phrases[Math.floor(Math.random()*phrases.length)])
    setRick(rickCrazy)
  }

  const resetPhrase = () => {
    setPhrase([])
    setRick(rickNormal)
  }
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Tips Rick</Text>   
        <MotiView
          from={{
            scale: 0,
            translateX: -10,
            translateY: -20,
          }}
          animate={{
            scale: 1,
            translateX: 0,
            translateY: 0,

          }}
          transition={{
            type: 'spring',
            duration: 10000,
          }}
        
        >
          <Image style={styles.image} source={rick} />       
          <Text style={styles.text}>{phrase}</Text>
        </MotiView>

        <View style={styles.buttonsRow}>
          <ButtonMedium
            pressFunc = {sendPhrase}
            nameToucha = 'Tips'
          />
          <ButtonMedium
            pressFunc = {resetPhrase}
            nameToucha = 'Reset'
            
          />   
        </View> 
    </View>
  );
}