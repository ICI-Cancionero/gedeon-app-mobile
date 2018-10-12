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

class SongItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayContent: false
    };
    this.toggleContent = this.toggleContent.bind(this);
  }

  toggleContent() {
    this.setState(previousState => {
      return { displayContent: !previousState.displayContent}
    })
  }

  render() {
    let displayText = this.state.displayContent ? 'Ocultar canción' : 'Ver canción';
    return (
      <View style={styles.sectionItem}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.title}>{this.props.song.id}. {this.props.song.title}</Text>
          <Button style={{flex: 1}} title={displayText} onPress={this.toggleContent} />
        </View>
        {this.state.displayContent ? <Text style={styles.content}>{this.props.song.content}</Text> : ''}
      </View>
    );
  }
}

class SongsList extends React.Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem ({item}) {
    return (
      <SongItem song={item}></SongItem>
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
  sectionItem: {
    paddingTop: 20
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
    fontSize: 16,
    paddingLeft: 10, 
    flexWrap: 'wrap',
    flex: 1,
    fontWeight: 'bold'
  },
  content: {
    padding: 30,
    fontSize: 16,
    flexWrap: 'wrap',
    flex: 1 
  }
})
