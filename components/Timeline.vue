<template>
  <ul class="timeline">
    <li v-for="(item, key) in dataTimeline" :key="key" :class="{'timeline-inverted': key%2 === 0}">
      <div v-if="item.picture" class="timeline-image">
        <b-img class="rounded-circle img-fluid" :src="item.picture" alt="" />
      </div>
      <div class="timeline-panel">
        <div class="timeline-heading">
          <h4>{{ item.head.title }}</h4>
          <h4 class="subheading">{{ item.head.subtitle }}</h4>
        </div>
        <div class="timeline-body">
          <p class="text-muted" v-html="item.description"></p>
        </div>
      </div>
    </li>

    <li class="timeline-inverted">
      <div class="timeline-image">
        <h4 v-html="finalTimeline"></h4>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Timeline',
  props: {
    dataTimeline: { default: [] }
  },
  data() {
    return {
      finalTimeline: 'Be Part\n' +
        '                    <br>Of Our\n' +
        '                    <br>Story!'
    }
  }
}
</script>

<style scoped>

</style>
