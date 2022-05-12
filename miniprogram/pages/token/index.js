// pages/token/index.js
Page({
  data: {
    token: '',
  },
  onTokenInput(e) {
    this.setData({
      token: e.detail.value,
    });
  },
  async saveToken() {
    const db = await getApp().database();
    // 在数据库中新建待办事项，并填入已编辑对信息
    db.collection("user").add({
      data: {
        date: this.data.date,
        token: this.data.token,
      },
    });
  },
});
