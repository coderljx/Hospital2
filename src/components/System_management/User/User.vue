<template>


  <div style="margin-top: 20px; height: 100%" class="animated bounceInLeft">
    <el-table :data="tableData" border style="width: 100%;height: 100%"
              v-loading="loading"
              element-loading-text="Loading..."
              :element-loading-spinner="svg"
              element-loading-svg-view-box="-10, -10, 50, 50"
              element-loading-background="rgba(122, 122, 122, 0.8)"
    >
      <el-table-column prop="" label="用户名" width="100" />
      <el-table-column prop="" label="入职时间" width="100" />
      <el-table-column prop="" label="手机号" width="120" />
      <el-table-column prop="" label="身份证" width="160" />
      <el-table-column prop="" label="是否在职"   />

    </el-table>


<!--   分页-->

   <Page></Page>

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
import Page from "@/Const/Page.vue";

let loading = ref(false);


</script>

<style>
@import "User.css";
</style>
