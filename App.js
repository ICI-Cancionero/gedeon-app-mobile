import React from 'react';
import SongsTab from './components/SongsTab';
import ListsTab from './components/ListsTab';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Body, Container, Content, Header, Tab, Tabs, Text, Title } from 'native-base';

export default class App extends React.Component {

  state = {
    isReady: false
  }

  async _loadFonts() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
  }

  render() {
    if (!this.state.isReady) return (
      <AppLoading
        startAsync={this._loadFonts}
        onFinish={() => this.setState({isReady: true})}
        onError={console.warn}
      />
    )

    return(
      <Container>
        <Header hasTabs>
          <Body>
            <Title>Cancionero del Reino</Title>
          </Body>
        </Header>
        <Tabs>
          <Tab heading="Canciones">
            <SongsTab />
          </Tab>
          <Tab heading="Listas">
            <ListsTab />
          </Tab>
        </Tabs>
      </Container>
    );
  }
};
