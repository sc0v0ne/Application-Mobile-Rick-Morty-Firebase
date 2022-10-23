import React from 'react';
import { 
  SafeAreaView,
  FlatList,
} from 'react-native';

import Itens from "../components/itensList/ItensList";
import ScreensStyles from '../styles/screensStyles/ScreensStyles'
import { getAuth, onAuthStateChanged } from "firebase/auth";
const DATA = [
  {
    id: 'key-1',
    title: 'Blue Period',
    image:'https://www.animegeek.com/wp-content/uploads/2021/11/Blue-Period-Season-2-release-date-on-Netflix-Anime.jpg',
    link:'https://myanimelist.net/anime/46352/Blue_Period',
    preview:"Second-year high school student Yatora Yaguchi is a delinquent with excellent grades, but is unmotivated to find his true calling in life. Yatora spends his days working hard to maintain his academic standing while hanging out with his equally unambitious friends. However, beneath his carefree demeanor, Yatora does not enjoy either activity and wishes he could find something more fulfilling.",
  },
  {
    id: 'key-2',
    title: 'Jujutsu Kaisen',
    image:'https://img.ibxk.com.br/2022/08/08/08134724471261.jpg',
    link:'https://myanimelist.net/anime/40748/Jujutsu_Kaisen?q=jujut&cat=anime',
    preview:"Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for the strange when he unknowingly encounters a cursed item. Triggering a chain of supernatural occurrences, Yuuji finds himself suddenly thrust into the world of Curses—dreadful beings formed from human malice and negativity—after swallowing the said item, revealed to be a finger belonging to the demon Sukuna Ryoumen, the 'King of Curses.'",
    
  },
  {
    id: 'key-3',
    title: "Komi Can't Communicate",
    image:'https://ptanime.com/wp-content/uploads/2022/05/ptanime_komi-san_analise_capa.jpg',
    link:'https://myanimelist.net/anime/48926/Komi-san_wa_Comyushou_desu',
    preview:"Hitohito Tadano is an ordinary boy who heads into his first day of high school with a clear plan: to avoid trouble and do his best to blend in with others. Unfortunately, he fails right away when he takes the seat beside the school's madonna—Shouko Komi. His peers now recognize him as someone to eliminate for a chance to sit next to the most beautiful girl in class.",
  },
];




export default function RickMovies() {

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
    } else {
    }
  });
  const renderItem = ({ item }) => (
      <Itens 
        title={item.title} link={item.link} image={item.image} preview={item.preview}/>
    );

  return (
    <SafeAreaView style={ScreensStyles.containerRickAnime}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}