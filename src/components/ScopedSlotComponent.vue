<template>
  <div class="namedSlotProps">
    <p>命名作用域插槽：</p>
    <slot name="namedSlotProps" :message="message"></slot>
  </div>
  <div>
    <p>列表渲染：</p>
    <ul style="margin: 0;padding: 0;">
      <li v-for="item in items" style="list-style-type: none; margin: 0;">
        <slot name="item" v-bind="item"></slot>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { fakerZH_CN as faker } from '@faker-js/faker'


const message = ref("hello")

const updateMessage = () => {
  message.value = faker.word.noun()
}

const items = ref([])

const updateItems = () => {
  items.value.length = 0;
  for (let index = 0; index < 10; index++) {
    items.value.push(faker.airline.airline())
  }
}

onMounted(() => {
  setInterval(() => {
    updateMessage()
    updateItems()
  }, 1000);
});

</script>

<style scoped></style>