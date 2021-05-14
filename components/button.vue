<template>
  <button
    :class="['brutal-btn', `brutal-btn__${brutalColor}`, 'my-4']"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    brutalColor: {
      type: String,
      default: 'primary'
    }
  }
}
</script>

<style lang="scss">

</style>
