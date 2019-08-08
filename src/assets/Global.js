
import React, { Component } from "react";
import _ from 'lodash'
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    Button,
    ScrollView,
    SectionList,
    Dimensions
} from "react-native";
const UI_STANDARD = 375;
class Constant {

    // static fontSizeXSmall = scaleFontSizeFunc(14);//字体
    static colorDefault = '#FFFFFF'; // 颜色
    static sizeMarginDefault = 10;  // 尺寸

    // 自适应屏幕（以iOS为模板）
    static scale(width) {
        return Dimensions.get('window').width / UI_STANDARD * width;
    }

}


const Log = (...params) => { // 全局Log
    if (GLOBAL.__DEV__) {
        console.log(params);
    }
}
import Api from './util/Index'; // 全局api 
// Text.render = _.wrap(Text.render, function (func, ...args) {
//   let originText = func.apply(this, args);
//   return React.cloneElement(originText, {
//       style: [
//           styles.defaultFontFamily,
//           originText.props.style
//       ]
//   });
// });
// const styles = StyleSheet.create({
//   defaultFontFamily:{
//     color:"#333",
//     fontSize: 16
//   }
// })

// 导出
global.Log = Log;
global.Api = Api;
// global.Config = Config;
global.Constant = Constant;
