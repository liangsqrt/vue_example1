<template>
  <div class="header">
    <div class="container">
      <div class="title">分够</div>
      <div class="user">
        <div
          v-if="showSearch"
          class="search"
        >
          <Select
            v-model="model1"
            style="width:76px"
            placeholder="课程"
          >
            <Option
              v-for="item in SearchList"
              :value="item.value"
              :key="item.value"
              :selected="item.selected"
            >{{ item.label }}</Option>
          </Select>
          <Input
            search
            placeholder="搜索课程"
            style="color: #fff;"
          />

        </div>
        <div class="user-info">
          <div class="user-left">
            <a href="#"><span>我的学习</span></a>
            <a href="#">
              <Icon
                type="md-alarm"
                size="20"
              /></a>
            <a href="#">
              <Icon
                type="md-cart"
                size="20"
              /></a>

          </div>|
          <div class="user-right">
            <a
              href="#"
              class="username"
            >里昂</a>
            <a
              href="javascript:;"
              class="avater"
            ></a>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      SearchList: [
        {
          value: "课程",
          label: "课程"
        },
        {
          value: "学科",
          label: "学科"
        },
        {
          value: "分数",
          label: "分数"
        }
      ],
      model1: ""
    };
  },
  props: {
    showSearch: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/config.scss";
@import "../assets/scss/base.scss";
.header {
  height: 60px;
  line-height: 60px;
  background-color: $colorI;

  .container {
    display: flex;
    justify-content: space-between;

    .title {
      color: $colorG;
      font-size: $fontG;
    }
    .user {
      display: flex;

      .search {
        margin-right: 45px;
        display: flex;
        margin-top: 10px;
        height: 40px;
        line-height: 40px;
        padding: 5px 12px 0px;
        width: 260px;
        border-radius: 20px;
        background-color: rgba($color: #fff, $alpha: 0.5);
      }

      .user-info {
        display: flex;
        color: $colorG;

        .user-left {
          margin-right: 5px;
        }

        .user-right {
          display: flex;
          align-items: center;
          margin-left: 15px;

          .avater {
            width: 40px;
            height: 40px;
            border-radius: 40px;
            background: url("/imgs/avater.jpg") no-repeat;
            background-size: contain;
          }
        }

        a {
          color: #fff;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.search {
  .ivu-input,
  .ivu-select-selection {
    background-color: transparent;
    border: none;
  }
  .ivu-input-icon,
  .ivu-input,
  .ivu-select,
  .ivu-select-arrow,
  .ivu-select-single .ivu-select-selection .ivu-select-placeholder {
    color: #fff;
  }

  .ivu-input:hover,
  .ivu-input:focus {
    border-color: none;
    outline: none;
  }
}
</style>

