<template>
  <div class="footer">
    <div class="container footer-wrapper">
      <div class="footer-left">
        <p>分够平台是一家专注于四川学子的高考志愿填报系统！</p>
        <div class="contact">
          <a href="javascript:;">关于我们</a>
          <a href="javascript:;">联系我们</a>
          <a href="javascript:;">帮助中心</a>
        </div>
        <p class="copyright">@2019 - 2022 分够公司 版权所有</p>
      </div>
      <div class="footer-right">
        <a
          href="javascript"
          class="android"
        >
          <Icon
            class="android-icon"
            type="logo-android"
          />
          <div class="and-des">
            <p>android</p>
            <p>下载</p>
          </div>
        </a>
        <a
          href="javascript:;"
          class="focus-me"
        >
          <span>关注我们:</span>
          <span class="wx-icon">
            <Icon type="ios-chatbubbles" />
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #474443;
  padding: 20px 0 40px;
  color: #fff;
  font-size: 14px;

  .footer-wrapper {
    display: flex;
    justify-content: space-between;

    .footer-left {
      p {
        margin: 10px 0;
        font-weight: bold;
      }
      .copyright {
        font-weight: normal;
      }
      .contact {
        a {
          font-weight: bold;
          color: #fff;
          margin-right: 10px;
        }
      }
      .copyright {
        color: #b8b6b6;
      }
    }

    .footer-right {
      .android {
        background-color: #000;
        border: 1px solid rgb(187, 185, 185);
        display: flex;
        padding: 3px 20px;
        border-radius: 8px;
        color: #fff;
        .android-icon {
          font-size: 28px;
          margin-right: 4px;
          margin-top: 5px;
        }
      }
      .focus-me {
        display: block;
        margin-top: 15px;
        color: #fff;
        .wx-icon {
          display: inline-block;
          width: 28px;
          height: 28px;
          line-height: 28px;
          border-radius: 14px;
          text-align: center;
          background-color: #fff;
          font-size: 15px;
          color: #000;
          font-weight: bold;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
