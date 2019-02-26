import React from 'react';
import SongsTab from './components/SongsTab';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
//import { Container, Content, Header, Footer, FooterTab, Button, Text } from 'native-base';

export default class App extends React.Component {
  componentDidMount () {
    Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
  }

  render() {
    return(<SongsTab />);
  }
};
