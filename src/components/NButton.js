import React, { Component } from "react";
import {
  Button,
  View
} from "react-native";
class NButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {title} = this.props;
    return (
      <View
        style={{
          marginTop: 20,
          height: 40,
          backgroundColor: "green",
          borderRadius: 4
        }}
      >
        <Button
          onPress={() => {
            this.props.pressFn()
          }}
          title = {
            title
          }
          color="#fff"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
export default NButton;
