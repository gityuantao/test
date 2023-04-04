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
                    <template #header-right>
                        <el-select v-model="value1" style="width: 200px" size="small" placeholder="Select">
                            <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value" />
                        </el-select>
                    </template>
                    <div ref="chart1Ref" class="chart"></div>
                </ListCard>
                <ListCard title="狱内病犯数变化趋势">
                    <div ref="chart5Ref" class="chart"></div>
                </ListCard>
            </el-space>
            <el-space fill direction="vertical">
                <ListCard title="昨日狱内服药罪犯占比">
                    <template #header-right>
                        <el-select v-model="value2" style="width: 200px" size="small" placeholder="Select">
                            <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value" />
                        </el-select>
                    </template>
                    <div ref="chart2Ref" class="chart"></div>
                </ListCard>
                <ListCard title="狱内服药罪犯数变化趋势">
                    <div ref="chart6Ref" class="chart"></div>
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
import { onMounted, onUnmounted, reactive, ref, watchEffect } from 'vue';
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
const value1 = ref('1')

const options1 = [
    {
        value: '1',
        label: '监区1',
        data: [
            { value: 10408, name: '健康罪犯' },
            { value: 7315, name: '狱内病犯' },
            { value: 7345, name: '狱内病犯2' },
            { value: 7325, name: '狱内病犯3' },
            { value: 7335, name: '狱内病犯4' },
        ]
    },
    {
        value: '2',
        label: '监区2',
        data: [
            { value: 485, name: '健康罪犯' },
            { value: 162, name: '狱内病犯' },
            { value: 4732, name: '狱内病犯2' },
            { value: 538, name: '狱内病犯3' },
            { value: 429, name: '狱内病犯4' },
        ]
    },
    {
        value: '3',
        label: '监区3',
        data: [
            { value: 4810, name: '健康罪犯' },
            { value: 1211, name: '狱内病犯' },
            { value: 41232, name: '狱内病犯2' },
            { value: 5143, name: '狱内病犯3' },
            { value: 4132, name: '狱内病犯4' },
        ]
    },
    {
        value: '4',
        label: '监区4',
        data: [
            { value: 4815, name: '健康罪犯' },
            { value: 1162, name: '狱内病犯' },
            { value: 41732, name: '狱内病犯2' },
            { value: 5183, name: '狱内病犯3' },
            { value: 4192, name: '狱内病犯4' },
        ]
    },
    {
        value: '5',
        label: '监区5',
        data: [
            { value: 4820, name: '健康罪犯' },
            { value: 1221, name: '狱内病犯' },
            { value: 43222, name: '狱内病犯2' },
            { value: 5233, name: '狱内病犯3' },
            { value: 4242, name: '狱内病犯4' },
        ]
    },
    {
        value: '6',
        label: '监区6',
        data: [
            { value: 4258, name: '健康罪犯' },
            { value: 1229, name: '狱内病犯' },
            { value: 42632, name: '狱内病犯2' },
            { value: 5273, name: '狱内病犯3' },
            { value: 4282, name: '狱内病犯4' },
        ]
    },
    {
        value: '7',
        label: '监区7',
        data: [
            { value: 4830, name: '健康罪犯' },
            { value: 1231, name: '狱内病犯' },
            { value: 43322, name: '狱内病犯2' },
            { value: 5343, name: '狱内病犯3' },
            { value: 4332, name: '狱内病犯4' },
        ]
    },
]

const value2 = ref('1')

const options2 = [
    {
        value: '1',
        label: '监区1',
        data: [
            { value: 3502, name: '健康罪犯' },
            { value: 2411, name: '狱内病犯' },
            { value: 462, name: '狱内病犯2' },
            { value: 2335, name: '狱内病犯3' },
            { value: 574, name: '狱内病犯4' },
        ]
    },
    {
        value: '2',
        label: '监区2',
        data: [
            { value: 21023, name: '健康罪犯' },
            { value: 341, name: '狱内病犯' },
            { value: 6425, name: '狱内病犯2' },
            { value: 7534, name: '狱内病犯3' },
            { value: 3445, name: '狱内病犯4' },
        ]
    },
    {
        value: '3',
        label: '监区3',
        data: [
            { value: 20123, name: '健康罪犯' },
            { value: 314, name: '狱内病犯' },
            { value: 6245, name: '狱内病犯2' },
            { value: 7354, name: '狱内病犯3' },
            { value: 3445, name: '狱内病犯4' },
        ]
    },
    {
        value: '4',
        label: '监区4',
        data: [
            { value: 25123, name: '健康罪犯' },
            { value: 364, name: '狱内病犯' },
            { value: 6745, name: '狱内病犯2' },
            { value: 7854, name: '狱内病犯3' },
            { value: 3945, name: '狱内病犯4' },
        ]
    },
    {
        value: '5',
        label: '监区5',
        data: [
            { value: 210123, name: '健康罪犯' },
            { value: 3114, name: '狱内病犯' },
            { value: 64125, name: '狱内病犯2' },
            { value: 75134, name: '狱内病犯3' },
            { value: 34145, name: '狱内病犯4' },
        ]
    },
    {
        value: '6',
        label: '监区6',
        data: [
            { value: 211823, name: '健康罪犯' },
            { value: 3174, name: '狱内病犯' },
            { value: 61645, name: '狱内病犯2' },
            { value: 75154, name: '狱内病犯3' },
            { value: 31945, name: '狱内病犯4' },
        ]
    },
    {
        value: '7',
        label: '监区7',
        data: [
            { value: 212203, name: '健康罪犯' },
            { value: 3214, name: '狱内病犯' },
            { value: 64225, name: '狱内病犯2' },
            { value: 75234, name: '狱内病犯3' },
            { value: 34245, name: '狱内病犯4' },
        ]
    },
]

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
const chart6Ref = ref<HTMLElement>()
const initChart = () => {
    let chart1 = echarts.init(chart1Ref.value as HTMLElement);
    let chart2 = echarts.init(chart2Ref.value as HTMLElement);
    let chart3 = echarts.init(chart3Ref.value as HTMLElement);
    let chart4 = echarts.init(chart4Ref.value as HTMLElement);
    let chart5 = echarts.init(chart5Ref.value as HTMLElement);
    let chart6 = echarts.init(chart6Ref.value as HTMLElement);
    watchEffect(() => {
        const data1 = options1.find(item => item.value === value1.value)?.data
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
                    data: data1
                }
            ]
        });
        const data2 = options2.find(item => item.value === value2.value)?.data
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
                    data: data2
                }
            ]
        });
    })
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
    chart5.setOption({
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['监区一', '监区二', '监区三', '监区四', '监区五']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '监区一',
                type: 'line',
                stack: 'Total',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '监区二',
                type: 'line',
                stack: 'Total',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '监区三',
                type: 'line',
                stack: 'Total',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '监区四',
                type: 'line',
                stack: 'Total',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '监区五',
                type: 'line',
                stack: 'Total',
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    });
    chart6.setOption({
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['监区一', '监区二', '监区三', '监区四', '监区五']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '监区一',
                type: 'line',
                stack: 'Total',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '监区二',
                type: 'line',
                stack: 'Total',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '监区三',
                type: 'line',
                stack: 'Total',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '监区四',
                type: 'line',
                stack: 'Total',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '监区五',
                type: 'line',
                stack: 'Total',
                data: [820, 932, 901, 934, 1290, 1330, 1320]
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
    max-height: calc(100vh - 75px);
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
    }
}
</style>