import _ from 'lodash'
import store from 'react-native-simple-store'
import React, { Component }  from 'react'
import codePush from 'react-native-code-push'
import {
  View,
  KeyboardAvoidingView, 
  Text,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity
} from 'react-native'
import Timeline from 'react-native-timeline-listview'
import { connect } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'
import { fetchCaptcha, captchaTextChange, packageNameTextChange, trackingTextChange, trackPackage, loadPackages, addPackage } from '../actions'
import { Card, Confirm } from './common'

const DEVICE_SIZE = {
  ancho: Dimensions.get('window').width,
  alto: Dimensions.get('window').height
}

class HomeScreen extends Component {
  state = {
    modalVisible: false,
    saveModalVisible: false,
  }

  componentDidMount() {
    codePush.sync()
    this.props.loadPackages()
    this.props.fetchCaptcha()
    setTimeout(() => {
      SplashScreen.hide()
    }, 600)
  }

  _renderCaptcha() {
    if (!this.props.captcha) {
      return <Text>Cargando...</Text>
    }
    return (
      <TouchableOpacity
        onPress={() => this.props.fetchCaptcha()}
      >
        <Image
          style={{ width: DEVICE_SIZE.ancho * 0.30, height: DEVICE_SIZE.alto * 0.05 }}
          source={{ uri: this.props.captcha }} />
      </TouchableOpacity>
    )
  }

  _onCaptchaTextChange(text) {
    this.props.captchaTextChange(text)
  }

  _onTrackingTextChange(text) {
    this.props.trackingTextChange(text)
  }

  _onPackageNameTextChange(text) {
    this.props.packageNameTextChange(text)
  }

  _onRastrearClick() {
    this.props.trackPackage({ captchaText: this.props.captchaText, trackingText: this.props.trackingText })
  }

  _onAccept() {

    this.setState({ modalVisible: false, saveModalVisible: true })
    console.log('Accepted')
  }

  _onCancel() {
    this.setState({ modalVisible: false })
    console.log('Declined')
  }

  _renderTrackingInfo() {
    if (_.isEmpty(this.props.trackingInfo)) {
      return <Text>Parece que no hay resultados.</Text>
    }
    const data = this.props.trackingInfo.map(item => {
      return {
        title: item.time.split('-')[0].trim(),
        description: item.event,
        time: item.time.split('-')[1].trim()
      }
    })
    return (
      <Timeline
        data={data}
      />
    )
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.trackingInfo !== null && nextProps.trackingInfo !== this.props.trackingInfo) {
      this.setState({ modalVisible: true })
    }
  }

  _onSavePackage() {
    console.log('saving package')
    store.get('currentTrackingNumber').then(val => {
      this.props.addPackage({
        packageName: this.props.packageNameText,
        packageTrackingNumber: val
      })
    })
    this.setState({ saveModalVisible: false })
  }

  _onDeclinePackage() {
    this.setState({ saveModalVisible: false })
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <Card>
          <View style={styles.captchaContainer}>
            {this._renderCaptcha()}
          </View>
          <Text style={styles.instructions}>Ingresa los caracteres de la imagen:</Text>
          <TextInput
            style={styles.inputStyle}
            autoCorrect={false}
            underlineColorAndroid='transparent'
            value={this.props.captchaText}
            onChangeText={this._onCaptchaTextChange.bind(this)}
            ref='captchaInput'
            returnKeyType='next'
            onSubmitEditing={() => this.refs.trackingInput.focus()}
          />
          <Text style={styles.instructions}>Ingresa tu código de rastreo:</Text>
          <TextInput
            style={styles.inputStyle}
            autoCorrect={false}
            underlineColorAndroid='transparent'
            value={this.props.trackingText}
            onChangeText={this._onTrackingTextChange.bind(this)}
            ref='trackingInput'
            returnKeyType='next'
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this._onRastrearClick.bind(this)}
          >
            <Text style={styles.buttonText}>RASTREAR</Text>
          </TouchableOpacity>
        </Card>
        <Confirm
          visible={this.state.modalVisible}
          onAccept={this._onAccept.bind(this)}
          onDecline={this._onCancel.bind(this)}
          acceptText="Guardar búsqueda"
          declineText="Ya vi lo que buscaba"
          animationType="fade"
        >
          {this._renderTrackingInfo()}
        </Confirm>
        <Confirm
          visible={this.state.saveModalVisible}
          onAccept={this._onSavePackage.bind(this)}
          onDecline={this._onDeclinePackage.bind(this)}
          acceptText="Guardar"
          declineText="Cancelar"
          animationType="slide"
        >
          <Text style={styles.instructions}>Ponle un nombre a este paquete:</Text>
          <TextInput
            style={styles.inputStyle}
            autoCorrect={false}
            underlineColorAndroid='transparent'
            value={this.props.packageNameText}
            onChangeText={this._onPackageNameTextChange.bind(this)}
            ref='packageNameInput'
            returnKeyType='go'
          />
        </Confirm>
      </KeyboardAvoidingView>
    )
  }
}

const styles = {
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFEB3B'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    height: 40,
    borderRadius: 15,
    backgroundColor: '#2196F3'
  },
  instructions: {
    fontSize: 15
  },
  inputStyle: {
    height: 50,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#55acee',
    margin: 10,
    fontSize: 19,
    justifyContent: 'center',
    alignContent: 'center'
  },
  captchaContainer: {
    marginTop: 25,
    marginBottom: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    padding: 15,
    flex: 1,
    borderColor: 'rgba(255,0,255,1)',
  }
}

const mapStateToProps = state => {
  const { captchaText, trackingText, trackingInfo, packageNameText } = state.form
  return {
    captcha: state.captcha,
    captchaText,
    trackingText,
    trackingInfo,
    packageNameText
  }
}

export default connect(mapStateToProps, { fetchCaptcha, captchaTextChange, trackingTextChange, trackPackage, loadPackages, packageNameTextChange, addPackage })(HomeScreen)