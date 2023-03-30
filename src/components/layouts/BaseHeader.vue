<script lang="ts" setup>
import { toggleDark } from '~/composables';
</script>

<template>
  <div class="header flex justify-between">
    <div class="left flex items-center">
      <img class="logo" src="../../assets/logo.png" />
      <div class="title">标题</div>
    </div>
    <div class="right flex items-center">
      <div class="button cursor-pointer flex items-center">
        <img class="icon" src="../../assets/u31.png" />修改密码
      </div>
      <div class="button cursor-pointer flex items-center">
        <img class="icon" src="../../assets/u27.png" />退出
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header {
  background: rgba(93, 127, 255, 1);
  padding: 10px;
  color: #fff;

  .left {
    font-size: 18px;
    gap: 10px;

    .logo {
      width: 30px;
      object-fit: cover;
    }
  }

  .right {
    font-size: 14px;
    gap: 10px;

    .button {
      gap: 10px;

      .icon {
        width: 15px;
        object-fit: cover;
      }
    }
  }
}
</style>