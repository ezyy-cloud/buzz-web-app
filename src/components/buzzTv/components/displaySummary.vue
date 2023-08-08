<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    display: {
        type: Object,
        required: true,
    }
})
const display = props.display
const powerOnStatus = ref(display.status);
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
    width: [4, 1, 1]
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr'],
  },
  yaxis: [
    {
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
        }
      },
      title: {
        text: "Uptime (Hrs)",
        style: {
          color: '#000',
        }
      },
      tooltip: {
        enabled: true
      }
    },
    {
      seriesName: 'Revenue',
      opposite: true,
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
  colors: ['#1565C0', '#FEB019', '#E53935'],
}
</script>
<template>
  <v-card elevation="0" class="mt-3">
    <v-row class="d-flex justify-space-between">
      <div>
        <v-card-text>{{ display.name }}&nbsp;Financials</v-card-text>
      </div>
      <v-btn-toggle :v-model="powerOnStatus" class="ma-3">
        <v-btn @click.stop="() => { }" size="50" color="red" style="background: green; color: white" icon="mdi-power" />
      </v-btn-toggle>
    </v-row>
    <apexchart :options="chartOptions" :series="[
      {
        name: 'Hours',
        type: 'line',
        data: display.hours,
      }, {
        name: 'Ad-Revenue',
        type: 'column',
        data: display.revenue,
      }, {
        name: 'OpEx',
        type: 'column',
        data: display.costs
      }
    ]">
    </apexchart>
  </v-card>
</template>
