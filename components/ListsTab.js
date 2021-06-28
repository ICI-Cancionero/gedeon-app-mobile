import React from 'react';
import { Content, Spinner } from 'native-base';
import PlaylistsList from './PlaylistsList';
import { colors } from './Styles';

export default class ListsTab extends React.Component {

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
    this.fetchData().done();
  }

  render() {
    if (this.state.isLoading) {
      return(
        <Content>
          <Spinner color={colors.blackPurple}/>
        </Content>
      );
    } else {
      return (
        <PlaylistsList lists={this.state.listsDB} />
      );
    }
  }
}
