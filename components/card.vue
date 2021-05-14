<template>
  <b-card
    :class="['brutal-card', `brutal-card__${brutalColor}`, 'my-4']"
  >
    <slot />
  </b-card>
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

<style>

</style>
