<template>

  <div>

    <search></search>


    <div class="animated bounceInLeft">
      <div style="margin-top: 20px" class="animated bounceInLeft">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="address" label="供应商编码"/>
          <el-table-column prop="address" label="供应商名称"/>
          <el-table-column prop="address" label="地址"/>
          <el-table-column prop="address" label="邮编"/>
          <el-table-column prop="" label="电话" width="180"/>
          <el-table-column prop="address" label="法定代表人"/>
          <el-table-column prop="address" label="注册资金"/>
          <el-table-column prop="address" label="开户银行"/>
          <el-table-column prop="address" label="操作" />
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
import {SuppilerBase} from "@/components/Yao_management/Suppiler/SuppilerBase";

const s = new SuppilerBase();

onMounted( () => {
  console.log( s.LoadData() );
})




</script>

<style>

</style>
