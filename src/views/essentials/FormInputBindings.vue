<template>
  <el-card>
    <template #header>表单绑定</template>
    <el-form :model="form" label-width="auto" style="max-width: 600px" :rules="rules" ref="formRef">
      <el-form-item label="Activity name" prop="name">
        <el-input v-model.trim="form.name" />
      </el-form-item>
      <el-form-item label="Activity zone" prop="region">
        <el-select v-model="form.region" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="Number of participants" prop="participants">
        <el-input type="number" min="0" v-model.number="form.participants" />
      </el-form-item>
      <el-form-item label="Activity time">
        <el-col :span="11">
          <el-date-picker
            v-model="form.date1"
            type="date"
            placeholder="Pick a date"
            style="width: 100%"
          />
        </el-col>
        <el-col :span="2" class="text-center">
          <span class="text-gray-500">-</span>
        </el-col>
        <el-col :span="11">
          <el-time-picker
            v-model="form.date2"
            placeholder="Pick a time"
            style="width: 100%"
          />
        </el-col>
      </el-form-item>
      <el-form-item label="Instant delivery">
        <el-switch v-model="form.delivery" />
      </el-form-item>
      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox value="Online activities" name="type">
            Online activities
          </el-checkbox>
          <el-checkbox value="Promotion activities" name="type">
            Promotion activities
          </el-checkbox>
          <el-checkbox value="Offline activities" name="type">
            Offline activities
          </el-checkbox>
          <el-checkbox value="Simple brand exposure" name="type">
            Simple brand exposure
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Resources">
        <el-radio-group v-model="form.resource">
          <el-radio value="Sponsor">Sponsor</el-radio>
          <el-radio value="Venue">Venue</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item label = "Acceptthe user agreement">
        <el-checkbox v-model="form.accepted" true-value="yes" false-value="no"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Submit</el-button>
        <el-button @click="onReset">Reset</el-button>
      </el-form-item>
    </el-form>

    <el-divider></el-divider>

    <p>提交结果</p>
    <p v-if="submitted">{{ form }}</p>
    <p v-else>表单正在输入</p>

  </el-card>
  
</template>

<script lang="ts" setup>
import { ref, reactive, watch } from 'vue'
import { FormInstance, FormRules, ElMessage} from 'element-plus'

//用于检验
const formRef = ref<FormInstance> ()
const form = reactive({
  name: '',
  region: '',
  participants: 0,
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
  accepted: 'yes'
})

const checkParticipants = (rule: any, value: any, callback: any) => {
  if (!Number.isInteger(value)) {
    callback(new Error('Please input digits'))
  } else{
    if (value > 18) {
      callback(new Error('Participants must be less than 18'))
    } else {
      callback()
    }
  }
}

const rules = reactive<FormRules>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  region: [
    { required: true,  message: 'Please select Activity zone', trigger: 'change', }
  ],
  participants: [
    { required: true, validator: checkParticipants,  trigger: 'blur' }
  ],
})


const submitted = ref(false)

const onSubmit = async () => {
  if(!formRef.value) return;
  await formRef.value.validate((valid, fields) => {
    if (valid) { 
      ElMessage({
        message: '提交成功.',
        type: 'success',
      })

      submitted.value = true;
      return
    } 
    ElMessage.error('验证失败！')
  })
}

const onReset = () => {
  submitted.value = false
  form.name= '',
  form.region= '',
  form.date1= '',
  form.date2= '',
  form.delivery= false,
  form.type= [],
  form.resource=  '',
  form.desc= '',
  form.accepted= 'yes'
}

watch(form, async (newValue, oldValue) => {
  submitted.value = false;
},{ deep: true })

</script>