import React from 'react';
import { Content, Spinner } from 'native-base';
import SongsList from './SongsList';

export default class SongsTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, songsDB: [], component: 0};
    this.getSongsTitlesFromInitial = this.getSongsTitlesFromInitial.bind(this);
    this.getSongsSection = this.getSongsSection.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }
  getSongsTitlesFromInitial (initial) {
    return this.state.songsDB.filter((song) => {
      return song.title.charAt(0) == initial
    })
  }

  getSongsSection () {
    let initials = this.state.songsDB.map((song) => {
      return song.title.charAt(0);
    });
    let uniqueInitials = [...new Set(initials)].sort();
    return uniqueInitials.map((initial) => {
      return {
        initial: initial,
        data: this.getSongsTitlesFromInitial(initial)
      }
    });
  }

  async fetchData() {
    let songs = [];
    try {
      let response = await fetch(
        'https://gedeon-app-rails.herokuapp.com/api/v1/songs'
      );
      songs = await response.json();
    } catch (error) {
      console.log(error);
    }
    if (songs.length > 0) {
      this.setState({
        isLoading: false,
        songsDB: songs
      });
    }
  }

  componentDidMount(){
    this.fetchData().done();
  }

  render() {
    if (this.state.isLoading) {
      return(
        <Content>
          <Spinner color='blue'/>
        </Content>
      );
    } else {
      return (
        <SongsList songsSection={this.getSongsSection()} />
      );
    }
  }
};