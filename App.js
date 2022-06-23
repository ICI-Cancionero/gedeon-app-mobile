import "./ignoreWarnings";
import React from 'react';
import SongsTab from './components/SongsTab';
import ListsTab from './components/ListsTab';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Body, Container, Content, Header, Tab, Tabs, Text, Title, DefaultTabBar, TabHeading } from 'native-base';
import { colors, styles } from './components/Styles';

const renderTabBar = (props) => {
  props.tabStyle = Object.create(props.tabStyle);
  return <DefaultTabBar {...props} />;
};

export default class App extends React.Component {

  state = {
    isReady: false
  }

  async _loadFonts() {
    await Font.loadAsync({
      'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
      'Roboto_medium': require('./assets/fonts/Roboto-Medium.ttf'),
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
        <Header hasTabs style={styles.header}>
          <Body style={{flex: 1}}>
            <Title style={{color: 'white', alignSelf: 'center'}}>Cancionero del Reino</Title>
          </Body>
        </Header>
        <Tabs
          renderTabBar={renderTabBar}
          tabBarUnderlineStyle={styles.tabBarUnderline}
        >
          <Tab
            heading={<TabHeading style={styles.tabHeading}>
              <Text style={{color: colors.blackPurple}}>Canciones</Text>
            </TabHeading>}
            activeTextStyle={styles.activeText}
          >
            <SongsTab />
          </Tab>
          <Tab
            heading={<TabHeading style={styles.tabHeading}>
              <Text style={{color: colors.blackPurple}}>Listas</Text>
            </TabHeading>}
            activeTextStyle={styles.activeText}
          >
            <ListsTab />
          </Tab>
        </Tabs>
      </Container>
    );
  }
};
