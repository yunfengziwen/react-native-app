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
    RefreshControl
} from "react-native";
import ListItem from '../../components/DetailsItem'
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false
        };
    }
    _onRefresh = () => {
        this.setState({
            refreshing: true
        });
        Promise.all(Object.values(this.refs).map(element => {
            element.fetchData();
        })).then(() => {
            this.setState({
                refreshing: false
            });
        });
    }
    render() {
        return (
            <View style={styles.body}>
                <ScrollView contentContainerStyle={styles.contentContainer_w} refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />
                    }>
                    <View>
                        <ListItem
                            title="正在上映的电影"
                            url="http://api.douban.com/v2/movie/nowplaying?apikey=0df993c66c0c636e29ecbb5344252a4a"
                            onPressFn={()=>{
                                this.props.navigation.push('Home')
                            }}
                            onGoChild={(id)=>{
                                this.props.navigation.push('DetailsChild', {
                                    id: id
                                })
                            }}
                            ref = 'ListItem'
                        ></ListItem>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    contentContainer_w:{
        padding: 12,
        paddingBottom:50,
    },
    contentContainer:{
        padding: 12
    },
})
export default Details;

