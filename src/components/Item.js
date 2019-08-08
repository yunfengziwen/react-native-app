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
    TouchableOpacity,
    Dimensions
} from "react-native";
class Item extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const win = Dimensions.get('window');
        return (
            <View style={[styles.List,{width:(win.width-60)/3}]}>
                <Image source={{uri: this.props.item.images.medium}} style={{width: 100, height: 150}}></Image>
                <Text numberOfLines={1} style={styles.ListTitle}>{this.props.item.title}</Text>
                <Text style={{color:'#999'}}>评分：<Text style={styles.rating}>{this.props.item.rating || '-'}</Text></Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    List:{
        marginLeft: 10,
        paddingBottom: 10
    },
    ListTitle:{
        marginTop: 4,
        marginBottom: 4,
    },
    rating:{
        color: '#f4d28c'
    }
})
export default Item;

