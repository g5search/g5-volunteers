<template>
  <div>
    <b-sidebar
      v-model="isVisible"
      type="is-light"
      :fullheight="true"
      :fullwidth="false"
      :overlay="false"
      :right="true"
    >
      <div class="p-5">
        Sidebar content
        <submit />
      </div>
    </b-sidebar>
    <b-button type="is-quaternary" @click="isVisible = !isVisible">
      Toggle Sidebar
    </b-button>
  </div>
</template>

<script lang="ts">
export default {
  data () {
    return {
      isVisible: false
    }
  }
}
</script>

<style lang="scss">

</style>
