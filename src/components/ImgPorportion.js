import React, { Component } from "react";
import {
    Image,
    StyleSheet,
} from "react-native";
class ImgPorportion extends Component {
    constructor(props) {
        super(props);
        this.state={
          width: 0,
          height: 0
        }
    }
    render() {
        return (
          <Image style={{width: this.state.width, height:this.state.height}} source={{uri: this.props.imgUrl}} />
        );
    }
    componentWillMount(){
      Image.getSize(this.props.imgUrl,(width,height) => {
          let proportion = height/width;
          width && height && this.setState({
            width :this.props.width,
            height :this.props.width * proportion
          })
      })
    }
}
const styles = StyleSheet.create({
})
export default ImgPorportion;
