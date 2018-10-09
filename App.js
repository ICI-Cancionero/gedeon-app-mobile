import React from 'react';
import { StyleSheet, Text, View, SectionList, Button } from 'react-native';
import songsDB from './songs.json';

export default class App extends React.Component {
  getSongsTitlesFromInitial (initial) {
    return songsDB.songs.filter((song) => {
      return song.title.charAt(0) == initial
    })
  }

  getSongsSection () {
    let initials = songsDB.songs.map((song) => {
      return song.title.charAt(0);
    });
    let uniqueInitials = [...new Set(initials)];
    return uniqueInitials.map((initial) => {
      return {
        initial: initial,
        data: this.getSongsTitlesFromInitial(initial)
      }
    });
  }

  render() {
    return (
      <SongsList songsSection={this.getSongsSection()} />
    );
  }
}

class SongsList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  renderItem ({item}) {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.title}>{item.id}. {item.title}</Text>
        <Button style={{flex: 1}} title="Ver Canción >"></Button>
      </View>
    );
  }

  renderSectionHeader ({section}) {
    return (
      <Text style={styles.sectionHeader}>{section.initial}</Text>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.props.songsSection}
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 50
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  title: {
    padding: 10,
    fontSize: 14,
    flexWrap: 'wrap',
    flex: 1,
    fontWeight: 'bold'
  },
  content: {
    padding: 10,
    fontSize: 12,
    flexWrap: 'wrap',
    flex: 1 
  }
})
