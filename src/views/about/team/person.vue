<template>
  <div class="peopleAndTeamTitleContainer__30ihV">
    <div class="teamTitle__JZazN">
      <h3>{{ person.title ? person.title : '' }}</h3>
    </div>
    <div class="people__rn6L3">
      <img :src="person.avatar" />
      <div class="">
        <h3 class="text-lg font-bold name__3qBij">{{ person.name }}</h3>
        <span class="">{{ person.job }}</span>
      </div>
      <div class="descriptionContainer__TOnhq">
        <p class="description__LsTbO" v-html="trans(person.desc)"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['person'],
  methods: {
    trans(text) {
      //   console.log(text)
      return text.replace('\n', '<br/>')
    },
  },
}
</script>

<style></style>
