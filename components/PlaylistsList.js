import React from 'react';
// import { Content } from 'native-base';
import { View } from 'react-native';
import PlaylistItem from './PlaylistItem';

export default class PlayListsList extends React.Component {
  renderLists() {
    let playlists = this.props.lists.map((playlist) => {
      return (
        <PlaylistItem playlist={playlist} key={playlist.id}/>
      );
    });
    return playlists;
  }

  render() {
    return (
      <View style={{height: "90%", marginTop: 50, marginBottom: 50}}>
        {this.renderLists()}
      </View>
    );
  }
}