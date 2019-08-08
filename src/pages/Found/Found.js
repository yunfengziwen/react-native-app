import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    TextInput,
    Button,
    ScrollView,
    SectionList,
    Dimensions
} from "react-native";
import MoviesList from '../../components/MoviesList'
import {
    ImgPorportion,
    NTitle,
    NInput,
    NVideo,
    NButton
} from '../../components'
class Found extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            placeholder: '请输入查询内容'
        };
    }
    static navigationOptions = {
        headerTitle: 'Found',
        headerRight: (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
          />
        ),
      }
    getInfo() {
    }
    pressFn = () => {
        console.log(2)
    }
    render() {
        return (
            <View style={styles.body}>
                <Text style={styles.title}>请输入查询内容</Text>
                <NInput 
                    placeholder = {
                        this.state.placeholder
                    }
                    value = {this.state.text} 
                    onChangeText={(text)=>{
                        this.setState({text})
                    }}></NInput>
                <NButton title='搜索' pressFn={this.pressFn} ></NButton>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    body:{
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    title: {
        marginBottom: 20
    }
})
export default Found;

