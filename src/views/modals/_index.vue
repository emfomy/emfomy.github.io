<template>
  <div>
    <Isvd />
    <Pass />
    <Hwe />
    <Cosmel />
  </div>
</template>

<script>
import Isvd from './isvd.vue';
import Pass from './pass.vue';
import Hwe from './hwe.vue';
import Cosmel from './cosmel.vue';

export default {
  name: 'Modals',
  components: {
    Isvd,
    Pass,
    Hwe,
    Cosmel,
  },
};
</script>
