import React from 'react';
import { Content, Text, List, ListItem, Right, Button } from 'native-base';
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
      <Content>
        {this.renderLists()}
        {/*<Text>{JSON.stringify(this.props.lists)}</Text>*/}
      </Content>
    );
  }
}