<template>
  <b-button
    v-b-toggle="target"
    class="Opener text-center w-100 collapsed text-dark font-weight-bold"
    size="sm"
    variant="milk-light"
  >
    <fa-icon class="OpenerInner1" icon="chevron-down" />
    <span class="OpenerText mx-2" />
    <fa-icon class="OpenerInner2" icon="chevron-down" />
  </b-button>
</template>

<script>
export default {
  props: {
    target: String,
  },
};
</script>

<style scoped lang="scss">
.Opener {
  .OpenerText:before,
  .OpenerText:after {
    transition: opacity 0.5s ease;
  }

  .OpenerText:before {
    content: 'More';
  }

  .OpenerText:after {
    content: 'Hide';
  }

  &:not(.collapsed) .OpenerText:before,
  &.collapsed .OpenerText:after {
    content: '';
    opacity: 0;
  }

  .OpenerInner1,
  .OpenerInner2 {
    transition: transform 0.5s ease;
    transform: rotate(0);
  }

  &:not(.collapsed) .OpenerInner1 {
    transform: rotate(-180deg);
  }

  &:not(.collapsed) .OpenerInner2 {
    transform: rotate(180deg);
  }
}
</style>
