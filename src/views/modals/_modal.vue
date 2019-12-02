<template>
  <b-modal class="Modal" :id="id" :title="title" size="xl" scrollable hide-footer>
    <slot />
  </b-modal>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    id: String,
    title: String,
  },
};
</script>
