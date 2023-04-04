<template>
    <div class="department">
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
                    <div ref="chart4Ref" class="chart"></div>
                </ListCard>
            </el-space>
            <el-space fill direction="vertical">
                <ListCard title="昨日狱内服药罪犯占比" slot-empty="无">
                    <div ref="chart3Ref" class="chart"></div>
                </ListCard>
                <ListCard title="狱内服药罪犯数变化趋势">
                    <div ref="chart5Ref" class="chart"></div>
                </ListCard>
            </el-space>
        </el-space>
    </div>
</template>

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
const chart4Ref = ref<HTMLElement>()
const chart5Ref = ref<HTMLElement>()
const initChart = () => {
    let chart1 = echarts.init(chart1Ref.value as HTMLElement);
    let chart2 = echarts.init(chart2Ref.value as HTMLElement);
    let chart3 = echarts.init(chart3Ref.value as HTMLElement);
    let chart4 = echarts.init(chart4Ref.value as HTMLElement);
    let chart5 = echarts.init(chart5Ref.value as HTMLElement);
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
                center: ['60%', '50%'],
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
                center: ['60%', '50%'],
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
    chart4.setOption({
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            top: 10,
            bottom: 20
        },
        xAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line'
            }
        ]
    });
    chart5.setOption({
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            top: 10,
            bottom: 20
        },
        xAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line'
            }
        ]
    });
    window.onresize = function () {
        chart1.resize();
        chart2.resize();
        chart3.resize();
    };
}
</script>
<style lang="scss" scoped>
.department {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;

    .chart {
        width: 337px;
        height: 100px;
    }

    .empty {
        font-size: 24px;
        color: #5d7fff;
        text-align: center;
        padding: 10px 0;
    }
}
</style>