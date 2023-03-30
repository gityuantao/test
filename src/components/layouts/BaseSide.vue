<template>
  <div class="base-side">
    <el-card class="card1">
      <template #header>
        <div class="card-header">
          <span>消息提醒</span>
        </div>
      </template>
      <div class="list">
        <div class="item">今日日报未上报，请尽快处理！</div>
      </div>
    </el-card>
    <div class="card2">
      <div class="img-box">
        <img class="img" src="../../assets/u21.png">
      </div>
      <div>要情管理</div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.base-side {
  padding: 10px;
  padding-top: 50px;
  box-shadow: var(--ep-box-shadow-light);
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 5px;

  .card1 {
    width: 200px;
    background: rgba(93, 127, 255, 0.0980392156862745);

    .card-header {
      font-size: 14px;
      color: #333333;
    }

    :deep(.ep-card__body) {
      padding: 5px;
    }

    .list {
      padding: 5px;
      background: #f2f2f2;
      min-height: 100px;
      display: flex;
      flex-direction: column;
      gap: 5px;

      .item {
        display: flex;
        align-items: center;
        gap: 5px;
        text-decoration: underline;
        cursor: pointer;

        &:hover {
          color: rgb(93, 127, 255);
        }

        &::before {
          content: '';
          display: block;
          width: 3px;
          height: 3px;
          background: #5d7fff;
          border-radius: 5px;
        }
      }
    }
  }

  .card2 {
    background: #5d7fff;
    border-radius: 5px;
    padding: 15px;
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;
    font-size: 14px;
    color: #fff;
    transition: all 0.3s;

    &:hover {
      box-shadow: 0px 2px 14px rgba(93, 127, 255, 1);
    }

    .img-box {
      width: 50px;
      height: 50px;
      border-radius: 50px;
      background: #fff;
      display: grid;
      place-content: center;

      .img {
        width: 30px;
        object-fit: cover;
      }
    }
  }
}
</style>
