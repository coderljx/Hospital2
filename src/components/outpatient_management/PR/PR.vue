<template>

  <div>


    <div class="animated bounceInLeft">
      <div style="margin-top: 20px" class="animated bounceInLeft">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="address" label="序号"/>
          <el-table-column prop="address" label="药品编码"/>
          <el-table-column prop="address" label="药品名称"/>
          <el-table-column prop="address" label="规格"/>
          <el-table-column prop="" label= "类型"/>
          <el-table-column prop="address" label="供应商"/>
          <el-table-column prop="address" label="生产厂家"/>
          <el-table-column prop="address" label="单位"/>
          <el-table-column prop="address" label="整件数"/>
          <el-table-column prop="address" label="批发价"/>
          <el-table-column prop="address" label="零售价"/>
          <el-table-column prop="address" label="会员价"/>


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


</script>

<style>

</style>
