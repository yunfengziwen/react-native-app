
const post = (url,data)=>{
  return new Promise((resolve,reject) => {
    fetch(url,{
        method:'POST',
        header:{
            'Accept':'application/json',//告诉服务器，我们能接受json格式的返回类型，
            'Content-Type':'application/json',//告诉服务器，我们提交的数据类型
        },
        body:JSON.stringify(data),//(把你想提交得数据序列化为json字符串类型，然后提交)body中的数据就是我们需要向服务器提交的数据,比如用户名,密码等
    })//返回 服务器处理的结果
        .then(response=>response.json())
        .then(result=>{
            resolve(result)
        })
        .catch(error=> {
            reject(error)
        })
  })
};
const get = (url)=>{
  return new Promise((resolve,reject) => {
    fetch(url)//返回 服务器处理的结果
    .then(response=>response.json())
    .then(result=>{
        resolve(result)
    })
    .catch(error=> {
        reject(error)
    })
  })
};
export default {
  post,
  get
}