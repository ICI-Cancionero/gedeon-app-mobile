import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
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
          <Text style={styles.title}>{this.props.song.title}</Text>
          <Button style={styles.button}light onPress={this.toggleContent}><Text>{displayText}</Text></Button>
        </View>
        {this.state.displayContent ? <Text style={styles.content}>{this.props.song.content}</Text> : null}
      </View>
    );
  }
};