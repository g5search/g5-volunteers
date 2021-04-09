<template>
  <div>
    {{ hours }}
  </div>
</template>

<script lang="ts">

interface Hours {
  userId: number,
  organization: string,
  description: string,
  hours: number,
  date: string
}

export default {
  data () {
    return {
      hours: {
        userId: 0,
        organization: '',
        description: '',
        hours: 0,
        date: ''
      } as Hours
    }
  }
}
</script>

<style>

</style>
