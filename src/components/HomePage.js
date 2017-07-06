import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Text,
  View,
  Button,
  Toast,
  Content,
  Header,
  Title,
  Left,
  Body,
  Right,
  Icon,
  Card,
  CardItem,
  H3
} from "native-base";

export default class HomePage extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>FreeLancer</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => alert("We love you too!")}>
              <Icon name="heart" />
            </Button>
          </Right>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <H3 style={styles.h3}>Hey there!</H3>
                <Text style={styles.text}>
                  This is the NativeBase boilerplate. We've added a few example
                  screens to help you get started. Click on the menu button to
                  check them out. This kit comes with react-navigation as well,
                  we've got you covered!
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Image
            source={require("./../../assets/images/fireworks.gif")}
            style={styles.image}
          />
        </Content>
      </Container>
    );
  }
}

const styles = {
  h3: {
    marginBottom: 5
  },
  text: {
    fontSize: 16,
    lineHeight: 20
  },
  image: {
    width: 220,
    height: 220,
    alignSelf: "center",
    marginTop: 40
  }
};