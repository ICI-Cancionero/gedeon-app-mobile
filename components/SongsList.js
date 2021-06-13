import React from 'react';
import { Text, SectionList } from 'react-native';
import { Item, Input, View } from 'native-base';
import SongItem from './SongItem';
import { styles } from './Styles';

export default class SongsList extends React.Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  renderItem ({item}) {
    return (
      <SongItem song={item}/>
    );
  }

  renderSectionHeader ({section}) {
    return (
      <Text style={styles.sectionHeader}>{section.initial}</Text>
    );
  }

  handleChangeInput (text) {
    this.props.onChangeText(text);
  }

  handleKeyPress ({ nativeEvent }) {
    if (nativeEvent.key == 'Backspace') {
      this.props.onChangeText(this.props.searchTerm.slice(0, -1));
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Item rounded style={{margin: 10}}>
          <Input
            placeholder="Buscar una canción"
            onChangeText={this.handleChangeInput}
            onKeyPress={this.handleKeyPress}
            value={this.props.searchTerm}
          />
        </Item>
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