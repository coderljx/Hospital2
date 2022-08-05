<template>

  <div class="searchs">
    <div class="searchs_home">
      <div >
        <el-input
            v-model="input2"
            class="w-50 m-2"
            placeholder="查询"
            :prefix-icon="Search"
        />
      </div>

      <div>
        <slot name="Add"></slot>
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
import { Search} from "@element-plus/icons-vue";

</script>

<style>
.searchs {
  width: 100%;
  margin: 5px auto;
  height: 50px;
}
.searchs_home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 5px
}

.searchs_home > :nth-child(1){
  margin-left: 50px;
  height: 50%;
  width: 440px;
}
.searchs_home > :nth-child(2) {
  flex: 1;
  margin-left: 20px;
}
.el-input__inner {
  height: 28px;
}
</style>
