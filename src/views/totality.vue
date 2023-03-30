<template>
    <div class="totality">
        <el-space>
            <ListCard title="今日之情模式" slot-empty="b9"></ListCard>
            <ListCard title="总执勤警力" slot-empty="b1"></ListCard>
            <ListCard title="监管区内执勤警力" slot-empty="b2"></ListCard>
            <ListCard title="总备勤警力" slot-empty="b3"></ListCard>
            <ListCard title="值班警力" slot-empty="b5"></ListCard>
        </el-space>
        <el-space>
            <ListCard title="各监区概况">
                <el-table :data="tableData">
                    <el-table-column prop="data0" label="监区" />
                    <el-table-column prop="data1" label="今日值班领导" />
                    <el-table-column prop="data2" label="执勤民警数" />
                    <el-table-column prop="data3" label="值班民警数" />
                    <el-table-column prop="data4" label="带班民警数" />
                    <el-table-column prop="data5" label="备勤民警数" />
                    <el-table-column prop="data6" label="昨日在押罪犯数" />
                    <el-table-column prop="data7" label="昨日在册罪犯数" />
                </el-table>
            </ListCard>
        </el-space>

        <el-space>
            <el-space fill direction="vertical">
                <ListCard title="昨日狱内病犯占比">
                    <div ref="chart1Ref" class="chart"></div>
                </ListCard>
                <ListCard title="狱内病犯数变化趋势">
                    <div class="empty">
                        <div>culprit2</div>
                        <div>一周曲线</div>
                        <div>7个部门一个部门一条线</div>
                    </div>
                </ListCard>
            </el-space>
            <el-space fill direction="vertical">
                <ListCard title="昨日狱内服药罪犯占比">
                    <div ref="chart2Ref" class="chart"></div>
                </ListCard>
                <ListCard title="狱内服药罪犯数变化趋势">
                    <div class="empty">
                        <div>culprit5</div>
                        <div>一周曲线</div>
                        <div>7个部门一个部门一条线</div>
                    </div>
                </ListCard>
            </el-space>
        </el-space>
        <el-space>
            <ListCard title="狱内罪犯异动最近一周统计">
                <div ref="chart3Ref" class="chart"></div>
            </ListCard>
        </el-space>
        <el-space>
            <ListCard title="狱内罪犯移动最近一月统计">
                <div ref="chart4Ref" class="chart"></div>
            </ListCard>
        </el-space>
    </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, onUnmounted, ref } from 'vue';
const tableData: any = []
for (let i = 0; i < 10; i++) {
    tableData.push(
        {
            data0: '00000',
            data1: '11111',
            data2: '22222',
            data3: '33333',
            data4: '44444',
            data5: '55555',
            data6: '66666',
            data7: '77777',
        },)
}
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
const initChart = () => {
    let chart1 = echarts.init(chart1Ref.value as HTMLElement);
    let chart2 = echarts.init(chart2Ref.value as HTMLElement);
    let chart3 = echarts.init(chart3Ref.value as HTMLElement);
    let chart4 = echarts.init(chart4Ref.value as HTMLElement);
    chart1.setOption({
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
            right: 10,
            top: 10,
        },
        tooltip: {},
        xAxis: {
            type: 'category',
            data: ['部门0', '部门1', '部门2', '部门3', '部门4']
        },
        yAxis: {
            type: 'value'
        },
        grid: {
            top: 10,
            right: '15%',
            bottom: 20,
            left: 40,
        },
        series: [
            {
                name: '罪犯家庭变故',
                data: [100, 2000, 1000, 100, 100],
                type: 'bar',
            },
            {
                name: '罪犯提审情况',
                data: [110, 2101, 1110, 110, 110],
                type: 'bar',
            },
            {
                name: '罪犯违规违纪',
                data: [120, 2202, 1220, 220, 220],
                type: 'bar',
            },
            {
                name: '罪犯自杀自残',
                data: [130, 2303, 1330, 330, 330],
                type: 'bar',
            },
            {
                name: '罪犯预谋征兆',
                data: [140, 2404, 1440, 440, 440],
                type: 'bar',
            }
        ]
    });
    chart4.setOption({
        legend: {
            orient: 'vertical',
            right: 10,
            top: 10,
        },
        tooltip: {},
        xAxis: {
            type: 'category',
            data: ['部门0', '部门1', '部门2', '部门3', '部门4']
        },
        yAxis: {
            type: 'value'
        },
        grid: {
            top: 10,
            right: '15%',
            bottom: 20,
            left: 40,
        },
        series: [
            {
                name: '罪犯家庭变故',
                data: [100, 2000, 1000, 100, 100],
                type: 'bar',
            },
            {
                name: '罪犯提审情况',
                data: [110, 2101, 1110, 110, 110],
                type: 'bar',
            },
            {
                name: '罪犯违规违纪',
                data: [120, 2202, 1220, 220, 220],
                type: 'bar',
            },
            {
                name: '罪犯自杀自残',
                data: [130, 2303, 1330, 330, 330],
                type: 'bar',
            },
            {
                name: '罪犯预谋征兆',
                data: [140, 2404, 1440, 440, 440],
                type: 'bar',
            }
        ]
    });
    window.onresize = function () {
        chart4.resize();
    };
}
</script>
<style lang="scss" scoped>
.totality {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-height: calc(100vh - 120px);
    overflow: auto;
    flex: 1;

    .chart {
        width: 100%;
        height: 145px;
    }

    .empty {
        font-size: 24px;
        color: #5d7fff;
        text-align: center;
        padding: 10px 0;
    }
}
</style>