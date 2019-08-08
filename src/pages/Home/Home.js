import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    Button,
    ScrollView,
    RefreshControl,
    Dimensions
} from "react-native";
import MoviesList from '../../components/MoviesList'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    static navigationOptions = ({ navigation }) => {
        console.log(navigation.state.key)
        return {
          title: navigation.state.key
        };
      };
    _onRefresh = () => {
        this.setState({refreshing: true});
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
                        <MoviesList 
                            title="正在上映的电影0"
                            url="http://api.douban.com/v2/movie/nowplaying?apikey=0df993c66c0c636e29ecbb5344252a4a"
                            onPressFn={()=>{
                                this.props.navigation.push('Details')
                            }}
                            onGoChild={(id)=>{
                                this.props.navigation.push('DetailsChild', {
                                    id: id
                                })
                            }}
                            ref="moviesList1"
                        ></MoviesList>
                    </View>
                    <View>
                        <MoviesList 
                            title="正在上映的电影1"
                            url="http://api.douban.com/v2/movie/nowplaying?apikey=0df993c66c0c636e29ecbb5344252a4a"
                            onPressFn={()=>{
                                this.props.navigation.push('Details')
                            }}
                            onGoChild={(id)=>{
                                this.props.navigation.push('DetailsChild', {
                                    id: id
                                })
                            }}
                            ref = "moviesList2"
                        ></MoviesList>
                    </View>
                    <View>
                        <MoviesList 
                            title="正在上映的电影2"
                            url="http://api.douban.com/v2/movie/nowplaying?apikey=0df993c66c0c636e29ecbb5344252a4a"
                            onPressFn={()=>{
                                this.props.navigation.push('Details')
                            }}
                            onGoChild={(id)=>{
                                this.props.navigation.push('DetailsChild', {
                                    id: id
                                })
                            }}
                            ref = "moviesList3"
                        ></MoviesList>
                    </View>
                    <View>
                        <MoviesList 
                            title="正在上映的电影3"
                            url="http://api.douban.com/v2/movie/nowplaying?apikey=0df993c66c0c636e29ecbb5344252a4a"
                            onPressFn={()=>{
                                this.props.navigation.push('Details')
                            }}
                            onGoChild={(id)=>{
                                this.props.navigation.push('DetailsChild', {
                                    id: id
                                })
                            }}
                            ref = "moviesList4"
                        ></MoviesList>
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
export default Home;

