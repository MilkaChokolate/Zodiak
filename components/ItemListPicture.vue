<template>
  <b-col cols="12" md="4" sm="6" class="portfolio-item">
    <b-link class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
      <b-img class="img-fluid" :src="picture" alt="" />
    </b-link>
    <div class="portfolio-caption">
      <h4>{{ title }}</h4>
      <p class="text-muted">
        {{ subtitle }}
      </p>
    </div>
  </b-col>
</template>

<script>
export default {
  name: 'ItemListPicture',
  props: {
    picture: { default: '' },
    title: { default: '' },
    subtitle: { default: '' }
  }
}
</script>

<style scoped>

</style>
