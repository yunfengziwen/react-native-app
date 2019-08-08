import React, { Component } from "react";
import {
    Text,
    StyleSheet,
    View,
    Dimensions
} from "react-native";
import {NVideo} from '../../components'
class Player extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      const url = this.props.navigation.getParam('url')
      const title = this.props.navigation.getParam('title')
        return  <NVideo url={url} title={title}></NVideo>
    }
    
}
export default Player;

