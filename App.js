import React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { createStackNavigator, createAppContainer,createBottomTabNavigator } from 'react-navigation'; // Version can be specified in package.json
import Home from "./src/pages/Home/Home";
import Details from "./src/pages/Home/Details";
import DetailsChild from "./src/pages/Home/DetailsChild";
import My from "./src/pages/My/My";
import Found from "./src/pages/Found/Found";
import Player from "./src/pages/Home/Player";
import './src/assets/Global';

const styles = StyleSheet.create({
  icon: {
    width:22,
    height:22
  }
})
const getTabBarIcon = (navigation, focused, tintColor ) => {
  const { routeName } = navigation.state;
  let iconImg;
  if (routeName === '主页') {
    iconImg = focused ? require('./src/assets/img/icon/homepage_fill.png'): require('./src/assets/img/icon/homepage.png')
  } else if (routeName === '发现') {
    iconImg = focused ? require('./src/assets/img/icon/hot_fill.png'): require('./src/assets/img/icon/hot.png')
  } else if (routeName === '我的') {
    iconImg = focused ? require('./src/assets/img/icon/mine_fill.png'): require('./src/assets/img/icon/mine.png')
  }
  return <Image source={iconImg} style={styles.icon}/>
};

const TabNavigator = createBottomTabNavigator({
  '主页': { screen: Home },
  '发现': { screen: Found },
  '我的': { screen: My },
}
,
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'gray',
    },
    initialRouteName: "主页"
  });

const RootStack = createStackNavigator(
  {
    
    Home: {
      screen: TabNavigator,
      navigationOptions: ({navigation}) => ({
        headerTitle: (
          navigation.state.index == 0 ? '首页' : navigation.state.index == 1 ? '发现' : '我的'
        ),
        // headerRight: ( 
        //   navigation.state.index == 1 && (
        //     < Button onPress = {
        //       () => console.log(navigation.state)
        //     }
        //     title = "按钮" />
        //   )
        // ),
      })
    },
    Details: {
      screen: Details,
      navigationOptions: () => ({
        title: `列表详情`
      })
    },
    DetailsChild: {
      screen: DetailsChild,
      navigationOptions: () => ({
        title: `详情`
      })
    },
    Player: {
      screen: Player,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
