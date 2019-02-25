import React from 'react';
import { Text, View, Button } from 'react-native';
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
    let displayText = this.state.displayContent ? 'Ocultar canción' : 'Ver canción';
    return (
      <View style={styles.sectionItem}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.title}>{this.props.song.title}</Text>
          <Button style={{flex: 1}} title={displayText} onPress={this.toggleContent} />
        </View>
        {this.state.displayContent ? <Text style={styles.content}>{this.props.song.content}</Text> : null}
      </View>
    );
  }
};