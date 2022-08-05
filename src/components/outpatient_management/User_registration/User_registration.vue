<template>
  <!-- 新增弹出窗口-->
  <el-dialog v-model="val.isshow"
             title="新增挂号"
  >

    <div class="User">

        <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="rules"
            label-width="120px"
            class="demo-ruleForm"
        >
          <el-form-item label="姓名"  required="true"   >
            <el-input v-model="ruleForm.name" />
          </el-form-item>
          <el-form-item label="性别" required="true" >
            <el-input v-model="ruleForm.sex"   />
          </el-form-item>
          <el-form-item label="身份证"  required="true" >
            <el-input v-model="ruleForm.card"  />
          </el-form-item>
          <el-form-item label="住址" required="true" >
            <el-input v-model="ruleForm.home"   />
          </el-form-item>
          <el-form-item label="挂号科室" >
            <el-select >
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)"
            >挂号</el-button
            >

          </el-form-item>
        </el-form>


    </div>

  </el-dialog>


  <search>
    <!--    vue3 语法， 不需要写引号，或者使用# solt名称， 必须使用template 标签-->
    <template v-slot:Add>
      <div>
        <el-button v-on:click=" val.isshow = true">新增挂号</el-button>
      </div>
    </template>

  </search>

  <!--  显示当前所有病患的信息 -->
  <div v-if="val.ShowUser" class="animated bounceInLeft"
       style="height: 80%; width: 99%; margin: 0px auto; box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 5px">
    <div style="margin-top: 20px; height: 100%" class="animated bounceInLeft">
      <el-table :data="tableData" height="100%" style="width: 100%"
                :row-style="tableRowStyle"
      >
        <el-table-column prop="name" label="姓名" width="80"/>
        <el-table-column prop="sex" label="性别" width="70"/>
        <el-table-column prop="identity_card" label="身份证" width="200"/>
        <el-table-column prop="home" label="家庭地址"/>
        <el-table-column prop="age" label="年龄" width="70"/>
        <el-table-column prop="create" label="挂号时间" width="200"/>
        <el-table-column prop="photo" label="联系方式" width="150"/>
        <!--        <el-table-column prop="history" label="状态">-->
        <!--          <template #default="scope">-->
        <!--            <el-button size="mini" type="success" disabled>正常</el-button>-->
        <!--          </template>-->
        <!--        </el-table-column>-->

        <el-table-column label="操作" width="100">
          <template #default="scope">
            <el-icon>
              <EditPen @click="Edit(scope)"/>
            </el-icon>
            <el-icon style="margin-left: 5px">
              <Delete @click="Deletes(scope)"/>
            </el-icon>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>

  <!--  显示路由-->
  <div v-else style="width: 100%; height: 80%">
    <RouterView/>
  </div>


  <page :count="val.count"></page>

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
  toRefs,
  Ref,
  ComponentPublicInstance,
  ComponentInternalInstance
} from "vue"
import {User_registration} from "../User_registration/User_registrationBase"
import {ElMessage} from 'element-plus';
import {AxiosResponse} from "axios";
import {EditPen, Delete, Soccer} from "@element-plus/icons-vue";
import Store from "@/Store/Store";
import search from "../../../Const/Search.vue"
import Page from "../../../Const/Page.vue"


import type { FormInstance, FormRules } from 'element-plus'
import {AllUtiles} from "@/Utils/AllUtiles";

const ruleForm = reactive({
  name: '',
  sex : "",
  home : "",
  card : ""
})

// const rules = reactive<FormRules>({
//   name: [
//     { required: true, message: 'Please input Activity name', trigger: 'blur' },
//     { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
//   ]
// })

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}



const userRegistration = new User_registration();
let {proxy}: any = (getCurrentInstance() as ComponentInternalInstance);
// element el-table 需要的是数组
let tableData = ref([{create: ""}]);
const val = ref({
  isshow : false,
  count : 0, // 接口返回的条数
  ShowUser : true // 是否显示用户详情
})



const InitValue = async function (form: number, to: number) {
  let res: Promise<AxiosResponse> = userRegistration.Load(form, to);
  await res.then(data => {
    window.alert("11");
    tableData.value = data.data.data;
    val.value.count = Number.parseInt(data.data.count);
    tableData.value.forEach(item => {
      item.create = AllUtiles.ParseTime( item.create );
    })
  });
}

const tableRowStyle = ({row, rowIndex}: any): string => 'background-color:white;font-size : 16px';


onMounted(() => {
  InitValue(0, 12);
});

const Edit = function (scope: any) {
  val.value.ShowUser = !val.value.ShowUser;
  proxy.$Store.commit("Setbinren", {
    name: scope.row.name,
    sex: scope.row.sex,
    age: scope.row.age,
    photo: scope.row.photo,
    history: scope.row.history
  });
  if (window.location.pathname.indexOf("userinfo") === -1) {
    proxy.$router.push(window.location.pathname + `/userinfo/${scope.row.id}`);
  }
}

const Deletes = (scope: any) => {
  let res = userRegistration.Delete(scope);
  res.then(data => {
    if (data.msg as string === "删除成功") {
      InitValue(0, 15);
      ElMessage({
        message: "删除成功",
        type: "success",
        showClose: true
      });
    } else {
      ElMessage({
        message: "删除失败",
        type: "error"
      });
    }
  });
}


</script>

<style>
@import "User_registration.css";
</style>
