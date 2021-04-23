<template>
  <div>
    <b-field label="Who are You?" label-position="inside">
      <b-select v-model="hours.userId" expanded>
        <option value="1">
          David Miller
        </option>
        <option value="2">
          Mandy Dalrymple
        </option>
        <option value="3">
          Liz Hoffman
        </option>
        <option value="4">
          Johnny Archer
        </option>
        <option value="5">
          Tyler Hasenoehrl
        </option>
        <option value="6">
          Colin McCullough
        </option>
      </b-select>
    </b-field>
    {{ userId }}
    <b-field label="Which Organization" label-position="inside">
      <b-taginput
        v-model="hours.organization"
        ellipsis
        placeholder="Add an organization"
      />
    </b-field>
    <b-field label-position="inside" label="Description">
      <b-input v-model="hours.description" />
    </b-field>
    <b-button
      type="is-primary"
    >
      Submit
    </b-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Hours } from '../mixins/types'
export default Vue.extend({
  data () {
    return {
      hours: {
        userId: 0,
        organization: [],
        description: '',
        hours: 0,
        date: ''
      } as Hours
    }
  },
  computed: {
    userId (): number {
      return this.hours.userId
    }
  },
  methods: {
    async onSubmit (): Promise<string> {
      const res = await this.$axios.$post('')
      return res.status
    }
  }
})
</script>

<style>

</style>
