<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

const back = () => {
  if (route.fullPath === '/department') {
    router.push('/totality')
  }
  if (route.fullPath === '/totality') {
    router.push('/department')
  }
}
const rightList = [
  {
    title: '值班领导',
    list: [
      {
        name: '指挥长',
        list: [
          { text: 'cHeader', tips: '(type：0)' }
        ]
      },
      {
        name: '副指挥长A岗',
        list: [
          { text: 'aleader', tips: '(0)' }
        ]
      },
      {
        name: '副指挥长B岗',
        list: [
          { text: 'bleader', tips: '(0)' }
        ]
      }
    ]
  },
  {
    title: '机关值班领导',
    list: [
      {
        name: '指挥中心',
        list: [
          { text: 'zbld', tips: '(type：17)' },
          { text: 'ldnumber', tips: '(17)' }
        ]
      },
      {
        name: '办公室',
        list: [
          { text: 'leader', tips: '(3)' },
          { text: 'tel', tips: '(3)' },
        ]
      },
      {
        name: '特警队',
        list: [
          { text: 'zbld', tips: '(10)' },
          { text: 'ldnumber', tips: '(10)' },
        ]
      },
      {
        name: '医院',
        list: [
          { text: 'zbld', tips: '(12)' },
          { text: 'ldnumber', tips: '(12)' },
        ]
      }
    ]
  },
  {
    title: '右侧标题C',
    list: [
      {
        name: '值班驾驶员',
        list: [
          { text: 'name1', tips: '(9)' },
          { text: 'number1', tips: '(9)' }
        ]
      },
      {
        name: '信息科值班',
        list: [
          { text: 'name1', tips: '(11)' },
          { text: 'number1', tips: '(11)' },
        ]
      },
      {
        name: '白班医院',
        list: [
          { text: 'name1', tips: '(12)' },
          { text: 'number1', tips: '(12)' },
        ]
      },
      {
        name: '夜班医院',
        list: [
          { text: 'name2', tips: '(12)' },
          { text: 'number2', tips: '(12)' },
        ]
      }
    ]
  }
]
</script>

<template>
  <el-card>
    <div class="box-card">
      <div class="header">
        <div class="title"></div>
        <div class="button" @click="back">切换<img class="img" src="../assets/u36.png" alt=""></div>
      </div>
      <div class="content">

        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
        <div class="right">
          <div class="right-content" v-for="item in rightList">
            <div class="title">{{ item.title }}</div>
            <div class="text" v-for="list in item.list">
              <div class="left">{{ list.name }}</div>:
              <div class="text-right">
                <div class="tips-box" v-for="text in list.list">
                  <div>{{ text.text }}</div>
                  <div class="tips">{{ text.tips }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
.box-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;

  .header {
    display: flex;
    justify-content: space-between;

    .title {
      color: #5D7FFF;
      font-size: 14px;
      position: relative;
      display: flex;
      align-items: center;
      gap: 5px;

      &::before {
        content: '';
        display: block;
        width: 3px;
        height: 40%;
        border-radius: 3px;
        background: #5D7FFF;
      }
    }

    .button {
      display: flex;
      align-items: center;
      gap: 5px;
      background: #5d7fff;
      border-radius: 30px;
      color: #fff;
      font-size: 8px;
      padding: 0 10px;
      transition: all .3s;
      cursor: pointer;

      &:hover {
        box-shadow: 0px 2px 14px rgba(93, 127, 255, 1);
      }

      .img {
        width: 10px;
        object-fit: cover;
      }
    }
  }

  .content {
    display: flex;
    gap: 5x;

    .right {
      display: flex;
      flex-direction: column;
      gap: 10px;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.349019607843137);
      padding: 0 10px;

      &-content {
        display: flex;
        flex-direction: column;
        gap: 5px;

        .title {
          color: #5d7fff;
          font-size: 16px;
          font-weight: 600;
          text-align: center;
        }

        .text {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;

          .left {
            white-space: nowrap;
            width: 90px;
            text-align-last: justify;
          }

          .text-right {
            display: flex;
            flex-direction: column;
            gap: 5px;
            white-space: nowrap;

            .tips-box {
              display: flex;
              align-items: center;
              gap: 5px;

              .tips {
                color: #db001b;
              }
            }
          }
        }
      }
    }
  }
}

:deep(.ep-card__body) {
  padding: 10px;

  .ep-space__item {
    flex: 1;
  }
}
</style>
