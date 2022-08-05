<template>

  <div class="demo-pagination-block">
    <el-pagination
        background
        :page-sizes="[20,50,100]"
        layout=" prev, pager , next, total , sizes"
        v-bind:total= "count"
    />
    <div class="clear"></div>
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
  toRefs, watch
} from "vue"
import {prop} from "vue-class-component";

 defineProps({
  count : {
    type : Number,
    required : true
  }
});


</script>

<style>
 .demo-pagination-block {
   margin-top: 20px;
 }
 .demo-pagination-block > div {
   float: right;
 }
 .demo-pagination-block > .clear::after {
   content: "";
   clear: both;
 }
</style>
