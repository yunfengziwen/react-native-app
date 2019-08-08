import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Button,
  ScrollView,
  TextInput,
  Dimensions
} from "react-native";
import { ImgPorportion, NTitle, NInput, NButton } from "../../components";
import MoviesList from "../../components/MoviesList";
class My extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      namePlaceholder: "用户名",
      password: "",
      passwordPlaceholder: "密码"
    };
  }
  static navigationOptions = {
    headerTitle: "My",
    headerRight: (
      <Button onPress={() => alert("This is a button!")} title="Info" />
    )
  };
  pressFn = () => {
    const obj = {
      name: this.state.name,
      password: this.state.password
    };
    console.log(obj);
  };
  render() {
    return (
      <View style={styles.body}>
        <NInput
          value={this.state.name}
          placeholder={this.state.namePlaceholder}
          onChangeText={name => {
            this.setState({
              name
            });
          }}
        />
        <View style={{ height: 10 }} />
        <View>
          <NInput
            value={this.state.password}
            secureTextEntry={true}
            placeholder={this.state.passwordPlaceholder}
            onChangeText={password => {
              this.setState({
                password
              });
            }}
            secureTextEntry={this.props.secureTextEntry} //设置为密码输入框
          />
        </View>
        <NButton title="登录" pressFn={this.pressFn} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20
  },
  title: {
    marginBottom: 20
  },
  password: {
    borderColor: "red",
    borderWidth: 1,
    height: 40,
    lineHeight: 40
  },
  input: {
    width: 200,
    height: 40,
    fontSize: 20,
    color: "red" //输入框输入的文本为白色
  }
});
export default My;
