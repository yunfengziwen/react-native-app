import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    Button,
    ScrollView,
    SectionList,
    TouchableOpacity
} from "react-native";
import json from '../../test.json'
import Item from './Item'
class MoveiesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: [],
            loaded: true
        };
        this.title = this.props.title;
        this.url = this.props.url;
        // this.fetchData = this.fetchData.bind(this);
    }
    render() {
        return (
            <View>
                <View style={styles.Header}>
                    <View style={styles.Block}></View>
                    <Text style={styles.title}>{this.title}</Text>
                    <Text style={styles.Pos} onPress={this.props.onPressFn}>更多</Text>
                </View>
                <FlatList
                    data={this.state.listData}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={()=>{
                            this.props.onGoChild(item.id)
                        }}>
                            <Item item={item}></Item>
                        </TouchableOpacity>
                    )}
                    horizontal = {true}
                    keyExtractor = {(item) => item.id}
                />
            </View>
        );
    }
    componentWillMount() {
        this.fetchData(); 
        // this.setState({
        //     listData: json.entries,
        //     loaded: true
        // });
    }
    fetchData() {
        console.log(this.props.title);
        let url = this.url;
        fetch(url)
            .then(response => response.json())
            .then(ret => {
                console.log(ret);
                this.setState({
                    listData: ret.entries,
                    loaded: true
                });
            });
    }

}
const styles = StyleSheet.create({
    Header: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 44,
      lineHeight: 44,
    },
    Block: {
        width: 2,
        height: 18,
        backgroundColor: 'green',
        marginRight: 10
    },
    Pos: {
      position: 'absolute',
      right: 0,
      color: 'green'
    },
    title:{
        color:'#666',
    },
})
export default MoveiesList;

