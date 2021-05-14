<template>
  <b-container style="margin-top: 65px;">
    <b-row>
      <b-col cols="4">
        <card v-bind="{ brutalColor: 'tertiary' }" />
        <card v-bind="{ brutalColor: 'secondary' }" />
        <card v-bind="{ brutalColor: 'quaternary' }" />
        <card v-bind="{ brutalColor: 'primary' }" />
      </b-col>
      <b-col cols="8">
        <card v-bind="{ brutalColor: 'primary' }">
          <h2>
            orgnization name
          </h2>
          <a>
            https://link.to.it
          </a>
          <p>
            A description of the things.
          </p>
          05-21-2021 — 07-08-2021
          <span>
            Contact
          </span>
        </card>
        <button class="brutal-btn brutal-btn__secondary py-2 px-3">
          Add An Opportunity
        </button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      opportunities: [
        {
          id: 1,
          name: '',
          link: '',
          description: '',
          startDate: '',
          endDate: '',
          contact: ''
        }
      ]
    }
  }
}
</script>
