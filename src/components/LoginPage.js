import React, { Component } from 'react';
import { Image, Animated, Keyboard, Platform } from 'react-native';
import {
  Container,
  Text,
  View,
  Form,
  Item,
  Label,
  Input,
  Button,
  Toast,
  Content
} from 'native-base';
import { connect } from 'react-redux';

import { loginUser } from '../actions';
import Routes from '../routes'

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: undefined,
      password: undefined
    };
    this.top = new Animated.Value(10);
  }
  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._keyboardDidHide
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = () => {
    Animated.parallel([
      Animated.timing(this.top, {
        toValue: Platform.OS === "ios" ? 75 : 50,
        duration: 250
      })
    ]).start();
  };

  _keyboardDidHide = () => {
    Animated.parallel([
      Animated.timing(this.top, {
        toValue: 10,
        duration: 250
      })
    ]).start();
  };

  login() {
    const { email, password } = this.state;
    if (!email || !password) {
      Toast.show({
        text: "E-mail/password cannot be empty!",
        type: "danger",
        duration: 2500
      });
    } else {
      this.props.loginUser({ email, password })
        .then(() => {
          if (this.props.user) {
            this.props.navigation.navigate("Routes");
          } else {
            Toast.show({
              text: this.props.error,
              type: "danger",
              duration: 2500
            });
          }
        });
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content
          bounces={false}
          contentContainerStyle={{
            flex: 1,
            justifyContent: "space-around"
          }}
        >
          <Animated.Image
            source={require("./../../assets/images/superlancer_beta_logo.png")}
            style={[
              styles.logo,
              {
                top: this.top
              }
            ]}
          />
          <Form style={styles.form}>
            <Item underline>
              <Input
                onChangeText={email => this.setState({ email })}
                placeholder="E-mail"
              />
            </Item>
            <Item underline>
              <Input
                secureTextEntry
                onChangeText={password => this.setState({ password })}
                placeholder="Password"
              />
            </Item>
            <Button full style={styles.button} onPress={() => this.login()}>
              <Text>Login</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { error, loading, user } = auth;
  return { error, loading, user };
};

export default connect(mapStateToProps, { loginUser })(LoginPage);

const styles = {
  container: {
    backgroundColor: "#fff"
  },
  logo: {
    alignSelf: "center"
  },
  form: {
    paddingRight: 45,
    paddingLeft: 35,
    top: -100
  },
  button: {
    marginTop: 25,
    marginLeft: 15,
    backgroundColor: '#65c4db'
  }
};

