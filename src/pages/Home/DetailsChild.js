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
    Dimensions,
    TouchableOpacity,
    Modal,
    TouchableHighlight,
    ActivityIndicator
} from "react-native";
import {ImgPorportion, NTitle, NModel, NVideo} from '../../components'
import {commonStyle} from '../../assets/css/commonStyle'

function Writers(props) {
    return (
        <View style={styles.Writers}>
            <Text numberOfLines={1} style={{marginBottom: 10}}>{props.item.name}</Text>
            <ImgPorportion
                imgUrl={props.item.avatars['medium']}
                width={100}
            ></ImgPorportion>
        </View>
    )
  }
class DetailsChild extends Component {
    constructor(props) {
        super(props);
        this.player = null
        this.state = {
            loaded : false,
        };
    }
    render() {
        const width = Dimensions.get('window').width;
        if (!this.state.loaded) {
            return (
                <View style={styles.loadingView}>
                    <ActivityIndicator animating={true} size="small"/>
                </View>
            )
        }
        return (
          
            <View style={{position:'relative'}}>
                <View style={styles.ImageWarp}>
                    <ImgPorportion
                        imgUrl={this.state.listData.images.medium}
                        width={width}
                    ></ImgPorportion>
                    <View style={styles.ImageWarpGray}></View>
                </View>
                <View style={styles.ImageWarpSmall}>
                    <TouchableOpacity onPress={()=>{
                        const obj = {
                            url: this.state.listData.blooper_urls[1] || this.state.listData.trailer_urls[1],
                            title: this.state.listData.title,
                        }
                        this.props.navigation.push('Player', obj)
                    }}>
                        <ImgPorportion
                            imgUrl={this.state.listData.images.medium}
                            width={100}
                        ></ImgPorportion>
                    </TouchableOpacity>
                    <View style={styles.TitleWarp}>
                        <Text style={styles.Title} numberOfLines={2}>{this.state.listData.title}</Text>
                        <Text style={styles.Score}>{this.state.listData.rating.average}</Text>
                        <Text style={{color:commonStyle.textGrayColor}}>{this.state.listData.reviews_count}人评价</Text>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.Main}>
                        <Text>{this.state.listData.durations} ({this.state.listData.languages})</Text>
                        <FlatList
                            data={this.state.listData.tags}
                            renderItem={({item}) => (
                                <Text style={[{width:(width - 80)/6},styles.FlatListTag]} numberOfLines={1}>{item}</Text>
                            )}
                            numColumns = {6}
                            keyExtractor = {(item) => item}
                        ></FlatList>
                        <FlatList
                            data={this.state.listData.pubdates}
                            renderItem={({item}) => (
                                <Text>{item}上映</Text>
                            )}
                            style={{marginBottom:10,marginTop:10}}
                            keyExtractor = {(item) => item}
                        ></FlatList>
                        <NTitle title={'导演简介'}></NTitle>
                        <FlatList
                            data={this.state.listData.writers}
                            renderItem={({item}) => (
                                <Writers item={item}></Writers>
                            )}
                            horizontal = {true}
                            style={{marginBottom:10}}
                            keyExtractor = {(item) => item.id}
                        ></FlatList>
                        <NTitle title={'剧情简介'}></NTitle>
                        <Text style={styles.Summary}>&nbsp;&nbsp;{this.state.listData.summary}</Text>
                    </View>
                    </ScrollView>
            </View>
        );
    }
    componentWillMount() {
        const id = this.props.navigation.getParam('id')
        this.fetchData(id);
    }
    fetchData(id) {
        let url = `https://api.douban.com/v2/movie/subject/${id}?apikey=0df993c66c0c636e29ecbb5344252a4a`;
        Api.get(url).then(ret => {
                console.log(ret);
                this.setState({
                    listData: ret,
                    loaded: true
                });
            });
    }

}

const win = Dimensions.get('window');
const styles = StyleSheet.create({
    Banner:{
        width: win.width,
    },
    ImageWarp:{
        width: win.width,
        height:180,
        overflow:'hidden'
    },
    ImageWarpSmall:{
        position:'absolute',
        top:60,
        left:20,
        flex:1,
        flexDirection: 'row',
        zIndex:10
    },
    ImageWarpGray:{
        width: win.width,
        height:180,
        backgroundColor:'rgba(0,0,0,0.6)',
        position:'absolute',
        top:0,
        left:0 ,
        zIndex:11
    },
    TitleWarp:{
        marginLeft: 20,
        marginTop:10
    },
    Title:{
        color:commonStyle.white,
        fontSize: 16,
        width:win.width - 20 -20 - 100 - 20
    },
    Score:{
        color:commonStyle.white,
        fontSize: 20, 
        paddingTop:10,
        paddingBottom:10,
    },
    Main:{
        marginTop: 20,
        padding:20,
        paddingBottom: 250
    },
    FlatListTag:{
        marginRight:6,
        marginTop:6,
        height:30,
        lineHeight:30,
        borderWidth:1,
        borderColor:commonStyle.lineColor,
        textAlign:'center'
    },
    Summary:{
        lineHeight:22,
        fontSize:16,
        color:'#666',
        // textText:2
    },
    Writers:{
        marginRight: 10,
        width: 100
    }
})
export default DetailsChild;

