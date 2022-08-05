<template>

  <div class="drug">

    <search>

      <!--    vue3 语法， 不需要写引号，或者使用# solt名称， 必须使用template 标签-->
      <template v-slot:Add >
        <div style="float: left">
          <el-button>增加</el-button>
        </div>
      </template>

    </search>


<!-- Content-->
    <div class="animated bounceInLeft">
      <div style="margin-top: 20px" class="animated bounceInLeft">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="id" label= "药品编号"   />
          <el-table-column prop="name" label="药品名称"   />
          <el-table-column prop="create" label="生产日期" width="180" />
          <el-table-column prop="numbers" label="库存"   />
          <el-table-column prop="mound" label= "单位"   />
          <el-table-column prop="type" label= "规格"   />
          <el-table-column prop="last_time" label="有效期"   />
        </el-table>
      </div>


  </div>


    <page :count = "cooc.count"></page>

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
  toRefs, Ref
} from "vue"
import search from "@/Const/Search.vue"
import {DrugBase} from "@/components/outpatient_management/Drug/DrugBase";
import {AllUtiles} from "@/Utils/AllUtiles";
import Page from "@/Const/Page.vue";
const Drug = new DrugBase();
const  tableData = ref([{create:""}]);
const { proxy } : any  = getCurrentInstance();
const cooc :any = ref({
  count : Number
});


// 加载数据
const Load = async function ( from : number, to : number) {
  let res = Drug.GetLoad( from, to);
  await res.then( data => {
    if ( data.status == 200 ){
      tableData.value = data.data.data;
      cooc.value.count = data.data.count;
      tableData.value.forEach( item => {
        item.create = AllUtiles.ParseTime(item.create);
      })
    }
  })
}


onMounted( () => {
 Load( 0 , 12);
});

</script>

<style>
@import "Drug.css";
</style>
