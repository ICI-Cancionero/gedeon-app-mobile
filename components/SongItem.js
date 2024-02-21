import React, { PureComponent } from 'react';
import { View, Pressable, Text } from 'react-native';
//import { Button, Text, H3 } from 'native-base';
import { styles } from './Styles';

export class SongItem extends React.Component {
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

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.displayContent !== nextState.displayContent
  }

  render() {
    let displayText = this.state.displayContent ? 'Ocultar' : 'Ver';
    let { song } = this.props;

    return (
      <View style={styles.sectionItem}>
        <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, justifyContent: 'space-between'}}>
          <Text style={styles.title}>
            {song.position}. {song.title}
          </Text>
          <Pressable style={styles.button} onPress={this.toggleContent}><Text style={styles.buttonText}>{displayText}</Text></Pressable>
        </View>
        {this.state.displayContent ? <Text style={styles.content}>{song.content}</Text> : null}
      </View>
    );
  }
};