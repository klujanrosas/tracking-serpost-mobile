import React from 'react'
import { Text, View, ScrollView, Modal, TouchableOpacity } from 'react-native'
import Card from './Card'

const Confirm = ({ children, visible, onAccept, onDecline, onRequestClose, acceptText, declineText, animationType }) => {
  const { containerStyle, textStyle, cardSectionStyle } = styles

  return (
    <View>
      <Modal
        visible={visible}
        animationType={animationType}
        transparent
        onRequestClose={onRequestClose}
      >
        <ScrollView contentContainerStyle={containerStyle}>
          <Card style={cardSectionStyle}>
            {children}
            
          </Card>
          
        </ScrollView>
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.acceptButton} onPress={onAccept}>
            <Text style={styles.acceptButtonText}>
              {acceptText.toUpperCase()}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.declineButton} onPress={onDecline}>
            <Text style={styles.declineButtonText}>
              {declineText.toUpperCase()}
            </Text>
          </TouchableOpacity>          
        </View>
      </Modal>
    </View>
  )
}

const styles = {
  declineButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white'
  },
  declineButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#F34236'
  },
  acceptButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white'
  },
  acceptButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#4BAE4F'
  },
  cancelButton: {
    paddingTop: 15,
    marginBottom: 20,
    backgroundColor: 'red'
  },
  actionContainer: {
    // paddingLeft: 30,
    // paddingRight: 30,
    flexDirection: 'row',
    paddingTop: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  },
  cardSectionStyle: {
    justifyContent: 'center',
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 10
  },
}


export default Confirm
