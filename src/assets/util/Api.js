// const post = (url,data)=>{
//   fetch(url,{
//       method:'POST',
//       header:{
//           'Accept':'application/json',//告诉服务器，我们能接受json格式的返回类型，
//           'Content-Type':'application/json',//告诉服务器，我们提交的数据类型
//       },
//       body:JSON.stringify(data),//(把你想提交得数据序列化为json字符串类型，然后提交)body中的数据就是我们需要向服务器提交的数据,比如用户名,密码等
//   })//返回 服务器处理的结果
//       .then(response=>response.json())
//       .then(result=>{
//           this.setState({
//               result:JSON.stringify(result),//序列化：转换为一个 (字符串)JSON字符串
//           });
//       })
//       .catch(error=> {
//           this.setState({
//               result: JSON.stringify(error),//把错误信息格式化为字符串
//           })
//       })
// };
// const get = (url)=>{
//   fetch(url)//返回 服务器处理的结果
//       .then(response=>response.json())
//       .then(result=>{
//           this.setState({
//               result:JSON.stringify(result),//序列化：转换为一个 (字符串)JSON字符串
//           });
//       })
//       .catch(error=> {
//           this.setState({
//               result: JSON.stringify(error),//把错误信息格式化为字符串
//           })
//       })
// };
// export default {
//   post,
//   get
// }