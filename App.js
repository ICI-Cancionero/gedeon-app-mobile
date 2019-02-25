import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import SongsList from './components/SongsList';
import { styles } from './components/Styles';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
//import { Container, Content, Header, Footer, FooterTab, Button, Text } from 'native-base';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, songsDB: [], component: 0};
    this.getSongsTitlesFromInitial = this.getSongsTitlesFromInitial.bind(this);
    this.getSongsSection = this.getSongsSection.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }
  getSongsTitlesFromInitial (initial) {
    return this.state.songsDB.filter((song) => {
      return song.title.charAt(0) == initial
    })
  }

  getSongsSection () {
    let initials = this.state.songsDB.map((song) => {
      return song.title.charAt(0);
    });
    let uniqueInitials = [...new Set(initials)].sort();
    return uniqueInitials.map((initial) => {
      return {
        initial: initial,
        data: this.getSongsTitlesFromInitial(initial)
      }
    });
  }

  async fetchData() {
    let songs = [];
    try {
      let response = await fetch(
        'https://gedeon-app-rails.herokuapp.com/api/v1/songs'
      );
      songs = await response.json();
    } catch (error) {
      console.log(error);
    }
    if (songs.length > 0) {
      this.setState({
        isLoading: false,
        songsDB: songs
      });
    }
  }

  componentDidMount(){
    Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.fetchData().done();
  }

  render() {
    if (this.state.isLoading) {
      return(
        <View style={{flex: 1, padding: 40}}>
          <ActivityIndicator/>
        </View>
      );
    } else {
      return (
        <SongsList songsSection={this.getSongsSection()} />
      );
    }
  }
};
