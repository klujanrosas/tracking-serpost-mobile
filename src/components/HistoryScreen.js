import _ from 'lodash'
import store from 'react-native-simple-store'
import React, { Component }  from 'react'
import { View, ScrollView, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { HistoryItem } from '../components/common'
import { addPackage, trackingTextChange } from '../actions'


class HistoryScreen extends Component {

  _onLoadItem(pack) {
    console.log(pack)
    this.props.trackingTextChange(pack.packageTrackingNumber)
    this.props.navigation.navigate('Home')
  } 

  _renderPackages() {
    if (_.isEmpty(this.props.packages)) {
      return <Text>Parece que aún no has guardado paquetes.</Text>
    }
    return this.props.packages.map(pack => {
      return (
        <HistoryItem key={pack.packageTrackingNumber} item={pack} onPress={this._onLoadItem.bind(this, pack)} />
      )
    })
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{ flex: 1, padding: 36 }} >       
          {this._renderPackages()}
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    packages: state.packages
  }
}

export default connect(mapStateToProps, { addPackage, trackingTextChange })(HistoryScreen)
