import React, { Component } from "react";
import {
    Text,
} from "react-native";
import {commonStyle} from '../assets/css/commonStyle'
class NTitle extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Text style={{marginTop:10,marginBottom:10,color:commonStyle.textGrayColor}}>{this.props.title}</Text>
    }
}
export default NTitle;

