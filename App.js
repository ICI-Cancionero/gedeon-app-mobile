import "./ignoreWarnings";
import React, { useCallback, useEffect, useState } from 'react';
import { SongsTab } from './components/SongsTab';
import { ListsTab } from './components/ListsTab';
import { colors, styles } from './components/Styles';
import { View, Text, Pressable } from 'react-native';
import { Tab, TabView } from 'react-native-easy-tabs';

export default function App () {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Cancionero del Reino</Text>
      </View>
      <View style={styles.tabBarUnderline}>
        <Pressable style={currentTab == 0 ? styles.tabButtonActive : styles.tabButton}  onPress={() => setCurrentTab(0)}>
          <Text style={currentTab == 0 ? styles.tabTextActive : styles.tabText} >Canciones</Text>
        </Pressable>
        <Pressable style={currentTab == 1 ? styles.tabButtonActive : styles.tabButton} onPress={() => setCurrentTab(1)}>
          <Text style={currentTab == 1 ? styles.tabTextActive : styles.tabText}>Listas</Text>
        </Pressable>
      </View>
      <TabView selectedTabIndex={currentTab} >
        <Tab>
          <SongsTab />
        </Tab>
        <Tab lazy>
          <ListsTab />
        </Tab>
      </TabView>
    </View>
  )
};
