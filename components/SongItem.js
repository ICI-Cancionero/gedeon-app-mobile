import React from 'react';
import { View } from 'react-native';
import { Button, Text, H3 } from 'native-base';
import { styles } from './Styles';

export default class SongItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayContent: false
    };
    this.toggleContent = this.toggleContent.bind(this);
  }

  toggleContent() {
    this.setState(previousState => {
      return { displayContent: !previousState.displayContent}
    })
  }

  render() {
    let displayText = this.state.displayContent ? 'Ocultar' : 'Ver';
    return (
      <View style={styles.sectionItem}>
        <View style={{flexDirection: 'row'}}>
          <H3 style={styles.title}>{this.props.song.title}</H3>
          <Button style={styles.button}light onPress={this.toggleContent}><Text>{displayText}</Text></Button>
        </View>
        {this.state.displayContent ? <Text style={styles.content}>{this.props.song.content}</Text> : null}
      </View>
    );
  }
};