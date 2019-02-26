import React from 'react';
import SongsTab from './components/SongsTab';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { Body, Container, Content, Header, Tab, Tabs, TabHeading, Text, Title } from 'native-base';

export default class App extends React.Component {
  componentDidMount () {
    Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
  }

  render() {
    return(
      <Container>
        <Header hasTabs>
          <Body>
            <Title>Cancionero del Reino</Title>
          </Body>
        </Header>
        <Tabs>
          <Tab heading={<TabHeading><Text>Canciones</Text></TabHeading>}>
            <SongsTab />
          </Tab>
          <Tab heading={<TabHeading><Text>Listas</Text></TabHeading>}>
          </Tab>
        </Tabs>
      </Container>
    );
  }
};
