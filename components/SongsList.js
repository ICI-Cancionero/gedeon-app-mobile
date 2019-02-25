import React from 'react';
import { Text, View, SectionList } from 'react-native';
import SongItem from './SongItem';
import { styles } from './Styles';

export default class SongsList extends React.Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
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