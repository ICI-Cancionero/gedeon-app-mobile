import React, { PureComponent } from 'react';
import { Text, SectionList, View, TextInput, SafeAreaView } from 'react-native';
//import { Item, Input, View } from 'native-base';
import { SongItem } from './SongItem';
import { styles, colors } from './Styles';

export class SongsList extends PureComponent {
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
      <View style={{height: "92%", marginTop: 10, marginBottom: 50}}>
        <TextInput
          placeholder="Buscar una canción"
          placeholderTextColor="gray"
          onChangeText={this.handleChangeInput}
          onKeyPress={this.handleKeyPress}
          value={this.props.searchTerm}
          style={styles.textField}
        />
        <View style={styles.container}>
          <SectionList
            sections={this.props.songsSection}
            renderItem={this.renderItem}
            renderSectionHeader={this.renderSectionHeader}
            keyExtractor={(item, index) => item.id }
            style={{flex: 1}}
          />
        </View>
      </View>
    );
  }
}