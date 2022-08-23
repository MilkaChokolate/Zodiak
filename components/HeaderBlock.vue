<template>
  <header class="masthead">
    <div class="container">
      <div class="intro-text">
        <div class="intro-lead-in">{{ title }}</div>
        <div class="intro-heading text-uppercase">{{ bigTitle }}</div>
        <b-link class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">{{ buttonText }}</b-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderBlock',
  data () {
    return {
      title: 'Welcome To Our Studio!',
      bigTitle: 'It\'s Nice To Meet You',
      buttonText: 'Tell Me More'
    }
  }
}
</script>

<style scoped>

</style>
