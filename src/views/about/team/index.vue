<template>
  <section class="dexta-section center light" id="teamMember">
    <div class="dexta-section-content">
      <h1 class="text-6xl font-semibold mb-6">{{ $t('title') }}</h1>
    </div>
    <div class="teamContainer__FJdW0">
      <div class="team__384od">
        <div class="peopleContainer__3q9vc">
          <span>
            <person-card :person="team[0]" />
            <person-card :person="team[1]" />
            <person-card :person="team[2]" />
            <person-card :person="team[3]" />
          </span>
          <br />
          <span>
            <person-card :person="team[4]" />
            <person-card :person="team[5]" />

            <person-card :person="team[6]" />

            <person-card :person="team[7]" />
          </span>
          <br />

          <span>
            <person-card :person="team[8]" />
            <person-card :person="team[9]" />
            <person-card :person="team[10]" />
            <person-card :person="team[11]" /> </span
          ><br />

          <span>
            <person-card :person="team[12]" />
          </span>
          <br />
          <h1 class="my-6 text-5xl font-semibold">Dexta 的朋友们</h1>
          <span>
            <person-card :person="team[13]" />
            <person-card :person="team[14]" />
            <person-card :person="team[15]" />
            <person-card :person="team[16]" />
            <person-card :person="team[17]" />
            <person-card :person="team[18]" />
            <person-card :person="team[19]" />
            <person-card :person="team[20]" /> </span
          ><br /><span>
            <person-card :person="team[21]" />
            <person-card :person="team[22]" />
            <person-card :person="team[23]" />
            <person-card :person="team[24]" />
            <br />
            <person-card :person="team[25]" />
            <person-card :person="team[26]" />
            <person-card :person="team[27]" />
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import personCard from './person'
import zh from './zh.json'
import en from './en.json'
export default {
  components: { personCard, zh },
  computed: {
    team() {
      return this.$store.state.lang == 'zh' ? zh : en
    },
  },
}
</script>

<i18n>
{
  "en": {
    "title": "Team Members"
    
  },
  "zh": {
    "title": "团队成员"
  }
}
</i18n>

<style></style>
