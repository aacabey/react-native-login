import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Text, View, Button, Content, Icon, List, ListItem, Thumbnail, Body } from 'native-base';

export default class Sidebar extends Component {
  render() {
    var items = ['Mesajlar', 'Aldıklarım', 'Sattıklarım', 'Ayarlar', 'Çıkış Yap'];
    return (
      <Container>
        <Content padder bounces={false}>
          <ListItem avatar>
            <Body>
              <Thumbnail style={styles.image} source={require("./../../assets/images/nativebase.png")} />
            </Body>
          </ListItem>
          <List dataArray={items}
            renderRow={(item) =>
              <ListItem>
                <Text>{item}</Text>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = {
  image: {
    alignSelf: "center",
    resizeMode: "center"
  }
};
