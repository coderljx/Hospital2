<template>
  <div class="Home_body_right_top">
    <div class="Home_body_right_top1">
      <div id="a"></div>
      <div id="b"></div>
      <div id="c"></div>
    </div>
  </div>
  <div class="Home_body_right_bottom">
    <div id="d" style="height: 100%"></div>
  </div>





</template>

<script lang="ts" setup>
import {
  defineProps,
  defineEmits,
  getCurrentInstance,
  defineComponent,
  ref,
  nextTick,
  onMounted,
  onUpdated,
  reactive,
  toRefs
} from "vue"
import * as echarts from "echarts";
import {EChartsType} from "echarts/types/dist/echarts";


onMounted(() => {
  let a : EChartsType = echarts.init(document.getElementById("a") as HTMLElement);
  a.setOption({
    title: {
      text: "销量图",
    },
    textStyle: {
      fontSize: 12
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  })

  let b = echarts.init(document.getElementById("b") as HTMLElement);
  b.setOption({
    title: {
      text: "对线图",
    },
    xAxis: {
      data: ['A', 'B', 'C']
    },
    yAxis: {
      //type: 'value'
    },
    series: [
      {
        data: [120, 200, 150],
        type: 'line',
        label: {
          show: false,
          position: 'top',
          textStyle: {
            fontSize: 15
          }
        },
        emphasis: {
          label: {
            show: true
          }
        }
      }
    ]
  } ,true);

  let c = echarts.init(document.getElementById("c") as HTMLElement);
  c.setOption({
    series: [
      {
        type: 'pie',
        data: [
          {
            value: 335,
            name: '直接访问'
          },
          {
            value: 234,
            name: '联盟广告'
          },
          {
            value: 1548,
            name: '搜索引擎'
          }
        ]
      }
    ]
  }, true);

  let d = echarts.init(document.getElementById("d") as HTMLElement);
  d.setOption({
    title: {
      text: "近期访问量"
    },
    xAxis: {
      data: ['1-1', '1-10', '1-15', '1-20', '1-30']
    },
    yAxis: {},
    series: [
      {
        data: [10, 22, 28, 23, 19],
        type: 'line',
        smooth: true
      }
    ]
  }, true);
  window.onresize = () => {
    a.resize();
    b.resize();
    c.resize();
    d.resize();
  }

});

nextTick( () => {

});


</script>

<style>

/*.Home_body_right > div {*/
/*    height: 300px;*/
/*    width: 100%;*/
/*    box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 10px;*/
/*}*/


 /* tab标签页的最下层，也就是所有显示组件的直接父类   */
.el-tab-pane {
  display: flex;
  flex-direction: column;
}

.Home_body_right_top,
.Home_body_right_bottom{
  min-width: 90%;
  min-height: 300px;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 10px;
  z-index: 100;
}
.Home_body_right_bottom {
  margin-top: 35px;
}

.Home_body_right_top1 {
    min-height: 100%;
    min-width: 100%;
    display: flex;
}
.Home_body_right_top1 > div {
    flex: 1;
    margin-left: 15px;
    /*box-shadow: 5px 5px 2px #888888;*/
    /*box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 10px;*/
}
#a,
#b,
#c,
#d {
  /*z-index: 100;*/
}

</style>
