import React from 'react';
import { Text, SectionList } from 'react-native';
import { Content, Item, Input } from 'native-base';
import SongItem from './SongItem';
import { styles } from './Styles';

export default class SongsList extends React.Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
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

  render() {
    return (
      <Content style={styles.container}>
        <Item rounded style={{margin: 10}}>
          <Input placeholder="Buscar cancion" onChangeText={this.handleChangeInput}/>
        </Item>
        <SectionList
          sections={this.props.songsSection}
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          keyExtractor={(item, index) => index}
        />
      </Content>
    );
  }
}