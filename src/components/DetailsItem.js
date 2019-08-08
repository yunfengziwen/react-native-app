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
class DetailsaItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: [],
            loaded: true
        };
        this.title = this.props.title;
    }
    render() {
        return (
            <View>
                <Text style={styles.title}>{this.title}</Text>
                <FlatList
                    data={this.state.listData}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={()=>{
                            this.props.onGoChild(item.id)
                        }}>
                            <Item item={item}></Item>
                        </TouchableOpacity>
                    )}
                    numColumns = {3}
                    keyExtractor = {(item) => item.id}
                />
            </View>
        );
    }
    componentWillMount() {
        this.fetchData(); 
    }
    fetchData() {
        let {url} = this.props;
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
    title: {
       height: 44,
       textAlign :'center',
       lineHeight :44
    }
})
export default DetailsaItem;

