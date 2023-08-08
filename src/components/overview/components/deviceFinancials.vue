<template>
    <v-card elevation="0" class="pa-4 mt-3">
        <v-card-text>{{ props.name }}&nbsp;Financials</v-card-text>
        <apexchart type="bar" :options="chartOptions"
            :series="[{ name: 'Revenue', data: props.revenue }, { name: 'OpEx', data: props.costs },]">
        </apexchart>
    </v-card>
</template>
<script setup lang="ts">
const props = defineProps({
    name: { type: String, required: true },
    revenue: { type: Array, required: true },
    costs: { type: Array, required: true },
})
const chartOptions = {
    chart: {
        id: "Revenue-OpEx Chart",
        toolbar: {
            show: false,
        }
    },

    dataLabels: {
        enabled: true,
        enabledOnSeries: undefined,
        formatter: function (val, opts) {
            return val
        },
        textAnchor: 'middle',
        distributed: false,
        offsetX: 0,
        offsetY: 0,
        style: {
            fontSize: '10px',
            fontFamily: 'Product Sans',
            fontWeight: 'bold',
        },
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr'],
    },
    yaxis: {
        title: {
            text: 'USD',
            rotate: -90,
            offsetX: 0,
            offsetY: 0,
            style: {
                color: '#757575',
                fontSize: '12px',
                fontFamily: 'Product Sans, sans-serif',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-title',
            },
        },
    },
    colors: ['#1565C0', '#E53935'],
}
</script>