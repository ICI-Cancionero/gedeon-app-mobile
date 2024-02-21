import React from 'react';
// import { ListItem, Body, Button, Text, Content, Card, CardItem, H2, H3 } from 'native-base';
import { ScrollView, View, Text, Pressable } from 'react-native';
import { styles } from './Styles';

export default class PlayListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayContent: false
    };
    this.toggleContent = this.toggleContent.bind(this);
    this.renderPlaylistContent = this.renderPlaylistContent.bind(this);
  }

  toggleContent() {
    this.setState(previousState => {
      return { displayContent: !previousState.displayContent}
    })
  }

  renderPlaylistContent() {
    return (
      <ScrollView style={{borderWidth: 0, margin: 0, marginTop: -1}}>
        {this.props.playlist.playlist_sections.map((section) => {
          return (
            <View key={section.id} style={{borderWidth: 0, margin: 10}}>
              <View style={{borderWidth: 0}}>
                <Text style={{marginBottom: 30, marginTop: 30}}>{section.name}</Text>
                {
                  section.playlist_items.map((item) => {
                    return (
                      <View style={{marginBottom: 0}} key={item.id}>
                        <Text style={{marginBottom: 10, paddingTop: 5, paddingBottom: 5}}>{item.position}. ({item.song.position}){item.song.title}</Text>
                        <Text style={{marginBottom: 0}}>{item.song.content}</Text>
                      </View>
                    );
                  })
                }
              </View>
            </View>
          );
        })}
      </ScrollView>
    );
  }

  render () {
    let displayText = this.state.displayContent ? 'Ocultar' : 'Ver';

    return (
      <View>
        <View>
          <Text style={styles.title}>{this.props.playlist.name}</Text>
          <Pressable style={styles.button} onPress={this.toggleContent}>
            <Text style={styles.title}>{displayText}</Text>
          </Pressable>
        </View>
        {this.state.displayContent ? this.renderPlaylistContent() : null}
      </View>
    );
  }
}