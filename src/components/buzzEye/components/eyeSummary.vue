<template>
  <v-card elevation="0" class="mt-3">
    <v-row class="d-flex justify-space-between">
      <div>
        <v-card-text>{{ props.name }}&nbsp;Financials</v-card-text>
      </div>
      <v-btn @click.stop="() => { }" size="50" elevation="0" icon="mdi-fullscreen" class="ma-3 text-green" />
    </v-row>
    <apexchart :options="chartOptions" :series="[
      {
        name: 'Revenue',
        type: 'column',
        data: props.revenue,
      }, {
        name: 'OpEx',
        type: 'column',
        data: props.costs
      }
    ]">
    </apexchart>
  </v-card>
</template>
<script setup lang="ts">
const props = defineProps({
  name: { type: String, required: true },
  revenue: { type: Array, required: true },
  costs: { type: Array, required: true },
  hours: { type: Array, required: true },
})
const chartOptions = {
  chart: {
    id: "Revenue-OpEx Chart",
    toolbar: {
      show: false,
    },
    type: 'line',
    stacked: false,
  },

  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: [1, 1]
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr'],
  },
  yaxis: [
    {
      seriesName: 'Revenue',
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#000'
      },
      labels: {
        style: {
          colors: '#000',
        },
      },
      title: {
        text: "USD",
        style: {
          color: '#000',
        }
      }
    },
  ],
  tooltip: {
    fixed: {
      enabled: true,
      position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
      offsetY: 30,
      offsetX: 60
    },
  },
  legend: {
    horizontalAlign: 'left',
    offsetX: 40
  },
  colors: ['#1565C0', '#FEB019'],
}
</script>