<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, onUnmounted, ref } from 'vue';
onMounted(() => {
  initChart();
});
onUnmounted(() => {
  echarts.dispose;
});

const chart1Ref = ref<HTMLElement>()
const chart2Ref = ref<HTMLElement>()
const chart3Ref = ref<HTMLElement>()
const initChart = () => {
  let chart1 = echarts.init(chart1Ref.value as HTMLElement);
  let chart2 = echarts.init(chart2Ref.value as HTMLElement);
  let chart3 = echarts.init(chart3Ref.value as HTMLElement);
  chart1.setOption({
    xAxis: {
      type: 'category',
      data: ['数据1', '数据2', '数据3', '数据4', '数据5']
    },
    yAxis: {
      type: 'value'
    },
    grid: {
      top: 10,
      bottom: 20
    },
    legend: {},
    series: [
      {
        data: [120, 200, 150, 80, 70],
        type: 'bar',
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold'
          }
        },
      }
    ]
  });
  chart2.setOption({
    legend: {
      orient: 'vertical',
      left: 10,
      top: 10,
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold'
          }
        },
        data: [
          { value: 1048, name: '健康罪犯' },
          { value: 735, name: '狱内病犯' },
          { value: 735, name: '狱内病犯2' },
          { value: 735, name: '狱内病犯3' },
          { value: 735, name: '狱内病犯4' },
        ]
      }
    ]
  });
  chart3.setOption({
    legend: {
      orient: 'vertical',
      left: 10,
      top: 10,
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold'
          }
        },
        data: [
          { value: 1048, name: '未服药罪犯' },
          { value: 735, name: '服药罪犯' },
        ]
      }
    ]
  });
  window.onresize = function () {
    chart1.resize();
    chart2.resize();
    chart3.resize();
  };
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
        <div class="title">部门态势123</div>
        <div class="button">返回 <img class="img" src="../assets/u36.png" alt=""></div>
      </div>
      <div class="content">
        <div class="left">
          <el-space>
            <ListCard title="今日值班领导" slot-empty="DutyHeader"></ListCard>
            <ListCard title="执勤民警数" slot-empty="b1"></ListCard>
            <ListCard title="值班民警数" slot-empty="b2"></ListCard>
            <ListCard title="带班民警数" slot-empty="b3"></ListCard>
            <ListCard title="带班民警数" slot-empty="b5"></ListCard>
          </el-space>

          <el-space>
            <el-space fill direction="vertical">
              <ListCard title="昨日夜班有无异常" slot-empty="无"></ListCard>
              <ListCard title="今日日报上报状态" slot-empty="未填报"></ListCard>
            </el-space>
            <el-space fill direction="vertical">
              <ListCard title="昨日有无未处理重大事项" slot-empty="无"></ListCard>
              <ListCard title="今日有无上报重大事项" slot-empty="无"></ListCard>
            </el-space>
            <ListCard title="狱内罪犯异动最近一周统计">
              <div ref="chart1Ref" class="chart"></div>
            </ListCard>
          </el-space>
          <el-space>
            <el-space fill direction="vertical">
              <ListCard title="昨日狱内病犯占比" slot-empty="无">
                <div ref="chart2Ref" class="chart"></div>
              </ListCard>
              <ListCard title="狱内病犯数变化趋势">
                <div class="empty">
                  <div> culprit2</div>
                  <div> 一周曲线</div>
                </div>
              </ListCard>
            </el-space>
            <el-space fill direction="vertical">
              <ListCard title="昨日狱内服药罪犯占比" slot-empty="无">
                <div ref="chart3Ref" class="chart"></div>
              </ListCard>
              <ListCard title="狱内服药罪犯数变化趋势">
                <div class="empty">
                  <div> culprit5</div>
                  <div> 一周曲线</div>
                </div>
              </ListCard>
            </el-space>
          </el-space>
        </div>
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

    .left {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

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

  .empty {
    font-size: 24px;
    color: #5d7fff;
    text-align: center;
    padding: 10px 0;
  }

  .chart {
    width: 335px;
    height: 145px;
  }
}

:deep(.ep-card__body) {
  padding: 10px;

  .ep-space__item {
    flex: 1;
  }
}
</style>
