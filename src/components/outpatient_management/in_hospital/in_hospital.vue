<template>

  <div class="">

    <search></search>

    <div class="animated bounceInLeft">
      <div style="margin-top: 20px" class="animated bounceInLeft">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="address" label= "姓名"   />
          <el-table-column prop="address" label="性别"   />
          <el-table-column prop="address" label="年龄"   />
          <el-table-column prop="address" label="科室"   />
          <el-table-column prop="address" label="床号"   />
          <el-table-column prop="address" label="入院日期"   />
          <el-table-column prop="address" label="联系电话"   />


        </el-table>
      </div>


    </div>
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
import Search from "@/Const/Search.vue";
const tableData  = ref([]);

</script>

<style>

</style>
