import React from 'react';
//import { Content, Spinner } from 'native-base';
import { SongsList } from './SongsList';
import { colors } from './Styles';
import { View, Text } from 'react-native';


export class SongsTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      songsDB: [],
      filteredSongs: [],
      searchTerm: ""
    };
    this.getSongsTitlesFromInitial = this.getSongsTitlesFromInitial.bind(this);
    this.getSongsSection = this.getSongsSection.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.filterSongs = this.filterSongs.bind(this);
  }
  getSongsTitlesFromInitial (initial) {
    return this.state.filteredSongs.filter((song) => {
      return song.title.charAt(0) == initial
    })
  }

  getSongsSection () {
    let initials = this.state.filteredSongs.map((song) => {
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
        'https://ici-santiago.holymusic.co/api/v1/songs'
      );
      songs = await response.json();
    } catch (error) {
      console.log(error);
    }
    if (songs.length > 0) {
      this.setState({
        isLoading: false,
        songsDB: songs,
        filteredSongs: songs
      });
    }
  }

  filterSongs (text) {
    this.setState({searchTerm: text});

    if (text !== '') {
      this.setState({
        filteredSongs: this.state.songsDB.filter((song) => {
          return (
            song.position == parseInt(text) ||
            song.title.toLowerCase().indexOf(text.toLowerCase()) > -1 ||
            song.content.toLowerCase().indexOf(text.toLowerCase()) > -1
          );
        })
      });
    } else {
      this.setState({filteredSongs: this.state.songsDB});
    }
  }

  componentDidMount(){
    this.fetchData();
  }

  render() {
    if (this.state.isLoading) {
      return(
        <View>
          <Text>
            Loading...
          </Text>
        </View>
      );
    } else {
      return (
        <SongsList
          songsSection={this.getSongsSection()}
          onChangeText={this.filterSongs}
          searchTerm={this.state.searchTerm}
        />
      );
    }
  }
};