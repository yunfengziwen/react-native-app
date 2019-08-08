import React, { Component } from "react";
import { Modal, Text, TouchableHighlight, View } from "react-native";

class ModalExample extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {modalVisible, children, setModalVisible} = this.props;
    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}
        >
          <View style={{ marginTop: 22 }}>
            {children}
            <TouchableHighlight
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </Modal>
      </View>
    );
  }
}
export default ModalExample;
