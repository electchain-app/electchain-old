import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import bgImage from './images/background.jpg'
import logo from './images/logo.png'
import { AntDesign } from '@expo/vector-icons';

const { width: WIDTH } = Dimensions.get('window')

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false
    }
  }

  showPass = () => {
    if (this.state.press === false) {
      this.setState({showPass: false, press: true})
    }
    else {
      this.setState({showPass: true, press: false})
    }
  }

  render() {
    return (
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.logoText}> Elections Powered by Ethereum</Text>
          </View>

          <View style={styles.inputContainer}>
            <AntDesign name='user' size={20} color={'rgba(255,255,255,0.7)'} style={styles.inputIcon}/>
            <TextInput
                style={styles.input}
                placeholder={'Username'}
                placeholderTextColor={'rgba(255,255,255,0.7)'}
                underlineColorAndroid='transparent'
            />
          </View>

          <View style={styles.inputContainer}>
            <AntDesign name='lock' size={20} color={'rgba(255,255,255,0.7)'} style={styles.inputIcon}/>
            <TextInput
                style={styles.input}
                placeholder={'Password'}
                secureTextEntry={this.state.showPass}
                placeholderTextColor={'rgba(255,255,255,0.7)'}
                underlineColorAndroid='transparent'
            />
            <TouchableOpacity style={styles.btnEye} onPress={this.showPass.bind(this)}>
              <AntDesign name={this.state.press === false ? 'eyeo' : 'eye'} size={20} color={'rgba(255,255,255,0.7)'}/>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
          <StatusBar style="auto" />
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 100
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.50
  },
  logo: {
    width: 170,
    height: 120
  },
  input: {
    width: WIDTH - 55,
    height: 25,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal: 25
  },
  inputIcon: {
    position: 'absolute',
    top: 0,
    left: 37
  },
  inputContainer: {
    marginTop: 10
  },
  btnEye: {
    position: 'absolute',
    top: 0,
    right: 37,
    opacity: 0.25
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 25,
    borderRadius: 45,
    backgroundColor: '#432577',
    justifyContent: 'center',
    marginTop: 20
  },
  text: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
    textAlign: 'center'
  }
});
