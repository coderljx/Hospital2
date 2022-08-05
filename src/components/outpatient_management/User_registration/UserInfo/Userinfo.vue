<template>

  <div class="UserInfo">
    <div class="UserInfo1 animated bounceInLeft">
      <p>患者信息</p>
      <div class="UserInfoCon">
        <div v-for=" ( items , index , i ) in Info" :key="index"    >
          <span style="float: left"> {{ InfoKey[i] }}  </span>
          <span style="float: right">  {{ items }}   </span>
          <div class="UserInfoClear"></div>
        </div>

      </div>
    </div>

    <div class="UserInfo2">
      <div class="animated bounceInLeft" style="width: 100%; height: 80%">
        <div style="margin-top: 20px; height: 100%" class="animated bounceInLeft">
          <el-table :data="tableData" border height="100%" style="width: 100%">
            <el-table-column prop="Numbers" label="就诊号" width="120"/>
            <el-table-column prop="Amount" label="付款金额" width="130"/>
            <el-table-column prop="type" label="付款类型" width="100"/>
            <el-table-column prop="name" label="挂号科室" width="130"/>
            <el-table-column prop="door" label="就诊医生" width="140"/>
            <el-table-column prop="time" label="付款时间"/>
            <el-table-column prop="" label="状态" width="110">
              <template #default="scope">
                <el-button size="mini" type="success" disabled>已结束</el-button>
              </template>
            </el-table-column>

          </el-table>
        </div>
      </div>
    </div>
  </div>

  <div class="CheckRes">

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
  toRefs, ComponentInternalInstance, Ref
} from "vue"
import {UserinfoBase} from "@/components/outpatient_management/User_registration/UserInfo/UserinfoBase";
import {RouteParams} from "vue-router";

let {proxy}: any  = (getCurrentInstance() as ComponentInternalInstance);
const Userinfo = new UserinfoBase();
const tableData: Ref<Array<object>> = ref([]);
let Info = ref({});
let keys: Ref<string[]> = ref([]);
const InfoKey = ref(["姓名","性别","年龄","联系电话","有无病史"]);


const LoadUserInfo = async function () {
  await Userinfo.LoadALlData(Number.parseInt((proxy?.$route.params.id) as string))
      .then( data => {
       // let a = JSON.parse((data.data as Array<object>) + "");
        // console.log( a );
        // console.log( proxy.$Store.state.binren );
        Info.value =  proxy.$Store.state.binren;
        try {
          tableData.value = JSON.parse((data.data as Array<object>) + "");
        }catch (e){
          tableData.value = (data.data as Array<object>);
        }
        if ( tableData.value.length == 0 )
        tableData.value.forEach(item => {
          item.Amount = (item.Amount as number).toFixed(2);
        })
      });
}

onMounted(() => {
  LoadUserInfo();

})


</script>

<style>
@import "Userinfo.css";
</style>
