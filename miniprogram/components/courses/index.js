// components/courses/index.js
var XMLHttpRequest = require('xhr2');
var httpRequest = new XMLHttpRequest();  //第一步：建立所需的对象
var access_token = getApp().getOpenID()
httpRequest.open(
    'GET', 'https://oc.sjtu.edu.cn/api/v1/courses/' + access_token, true);

httpRequest.send();
httpRequest.onreadystatechange = function() {
  if (httpRequest.readyState == 4 && httpRequest.status == 200) {
    var json = httpRequest.responseText;
    console.log(json);
  }
};
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})