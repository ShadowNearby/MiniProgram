const cloud = require("wx-server-sdk");
const XMLHttpRequest = require("xhr2");
var httpRequest = new XMLHttpRequest(); //第一步：建立所需的对象

cloud.init({
  // 初始化云开发环境
  env: cloud.DYNAMIC_CURRENT_ENV, // 当前环境的常量
});
const db = cloud.database();
const openid = getApp().getOpenID().openid
const token = "?access_token=" + getApp().getOpenID().token;
exports.main = async (event, term) => {
  httpRequest.open(
    "GET",
    "https://oc.sjtu.edu.cn/api/v1/courses/" + token,
    true
  );

  httpRequest.send();
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
      var responce = JSON.parse(httpRequest.responseText);
      for (var i = 0, l = responce.length; i < l; i++) {
        if (responce[i].enrollment_term_id == term) {
          db.collection('courses').add({
            course:{
              _openid: openid,
              id:responce[i].id,
              name:responce[i].name,
            }
          })
        }
      }
    }
  };
};