<template>
  <div class="header">
    <slot name="header"></slot>
  </div>
  <div v-if="$slots.default" class="content">
    <slot></slot>
  </div>
  <div v-if="$slots.footer" class="footer">
    <slot name="footer"></slot>
  </div>
  <div v-if="$slots.dynamicSlotName1" style="background-color: lightcoral; padding: 5px; min-height: 50px;">
    <slot name="dynamicSlotName1">
      <p>动态插槽1</p>
    </slot>
  </div>
  <div v-if="$slots.dynamicSlotName2" style="background-color: lightgreen; padding: 5px; min-height: 50px;">
    <slot name="dynamicSlotName2">
      <p>动态插槽2</p>
    </slot>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const props = defineProps();

const emits = defineEmits();

onMounted(() => {

});

</script>

<style scoped>
.header {
  padding: 5px;
  background-color: cornflowerblue;
  min-height: 50px;
}

.content {
  padding: 5px;
  min-height: 50px;
}

.footer {
  padding: 5px;
  background-color: lightgray;
  min-height: 50px;
}
</style>