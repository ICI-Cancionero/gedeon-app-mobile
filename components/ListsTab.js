import React from 'react';
// import { Content, Spinner } from 'native-base';
import { View, Text } from 'react-native';
import PlaylistsList from './PlaylistsList';
import { colors } from './Styles';

export class ListsTab extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      listsDB: []
    };
    this.fetchData = this.fetchData.bind(this);
  }

  async fetchData() {
    let lists = [];
    try {
      let response = await fetch(
        'https://gedeon-app-rails.herokuapp.com/api/v1/playlists'
      );
      lists = await response.json();
    } catch (error) {
      console.log(error);
    }
    if (lists.length > 0) {
      this.setState({
        isLoading: false,
        listsDB: lists
      });
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
        <PlaylistsList lists={this.state.listsDB} />
      );
    }
  }
}
