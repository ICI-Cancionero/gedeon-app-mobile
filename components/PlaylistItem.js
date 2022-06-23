import React from 'react';
import { ListItem, Body, Button, Text, Content, Card, CardItem, H2, H3 } from 'native-base';
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
      <Card style={{borderWidth: 0, margin: 0, marginTop: -1}}>
        {this.props.playlist.playlist_sections.map((section) => {
          return (
            <CardItem key={section.id} style={{borderWidth: 0}}>
              <Body style={{borderWidth: 0}}>
                <H2 style={{marginBottom: 30, marginTop: 30}}>{section.name}</H2>
                {
                  section.playlist_items.map((item) => {
                    return (
                      <Content style={{marginBottom: 0}} key={item.id}>
                        <H3 style={{marginBottom: 10, paddingTop: 5, paddingBottom: 5}}>{item.position}. ({item.song.position}){item.song.title}</H3>
                        <Text style={{marginBottom: 0}}>{item.song.content}</Text>
                      </Content>
                    );
                  })
                }
              </Body>
            </CardItem>
          );
        })}
      </Card>
    );
  }

  render () {
    let displayText = this.state.displayContent ? 'Ocultar' : 'Ver';

    return (
      <Content>
        <ListItem>
          <Text>{this.props.playlist.name}</Text>
          <Button style={styles.button} light onPress={this.toggleContent}>
            <Text>{displayText}</Text>
          </Button>
        </ListItem>
        {this.state.displayContent ? this.renderPlaylistContent() : null}
      </Content>
    );
  }
}