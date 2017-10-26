const jwt = require('jsonwebtoken');
const FB = require('fb');

class Login {
  static login(body){
    return new Promise(function(resolve,reject){
      let fb = new FB.Facebook({
        accessToken: body.accessToken,
        appId: process.env.FBAPPID,
        appSecret: process.env.FBAPPSECRET
      })

      // fb.api(body.userId, function(response){
      //   if (response.error) {
      //     reject(response.error);
      //   } else {
      //     console.log(response);
      //     let token = jwt.sign({
      //       id: response.id,
      //       name: response.name
      //     },process.env.APPSECRET);
      //     resolve(token)
      //   }
      // })

      fb.api('me',{fields:['id','name','email','picture.type(large)'],access_token:body.accessToken},function(response){
        if (response.error) {
            reject(response.error);
        } else {
          console.log('response',response.picture.data.url);
          let token = jwt.sign({
            id: response.id,
            name: response.name,
            email: response.email,
            imageUrl: response.picture.data.url
          },process.env.APPSECRET);
          resolve(token)
        }
      })
    })
  }
}

module.exports = Login;
