import "./ignoreWarnings";
import React, { useCallback, useEffect, useState } from 'react';
import SongsTab from './components/SongsTab';
import ListsTab from './components/ListsTab';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Ionicons } from '@expo/vector-icons';
import { Body, Container, Content, Header, Tab, Tabs, Text, Title, DefaultTabBar, TabHeading, View } from 'native-base';
import { colors, styles } from './components/Styles';

const renderTabBar = (props) => {
  props.tabStyle = Object.create(props.tabStyle);
  return <DefaultTabBar {...props} />;
};

export default function App () {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
          'Roboto_medium': require('./assets/fonts/Roboto-Medium.ttf'),
          ...Ionicons.font,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View
      onLayout={onLayoutRootView}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
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
    </View>
  );
};
