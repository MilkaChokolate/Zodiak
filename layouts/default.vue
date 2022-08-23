<template>
  <div>
    <!-- Navigation -->
    <b-navbar id="mainNav" toggleable="lg" class="fixed-top navbar-shrink">
      <b-container>
        <b-link href="#page-top" class="navbar-brand js-scroll-trigger">
          Our Studio
        </b-link>
        <b-navbar-toggle
          target="nav-collapse"
          class="navbar-toggler navbar-toggler-right"
        >
          Menu<i class="fas fa-bars" />
        </b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="text-uppercase ml-auto">
            <b-nav-item href="#about" link-classes="js-scroll-trigger">
              About
            </b-nav-item>
            <b-nav-item href="#services" link-classes="js-scroll-trigger">
              Services
            </b-nav-item>
            <b-nav-item href="#portfolio" link-classes="js-scroll-trigger">
              Portfolio
            </b-nav-item>
            <b-nav-item href="#team" link-classes="js-scroll-trigger">
              Team
            </b-nav-item>
            <b-nav-item id="order-btn" href="#contact" link-classes="js-scroll-trigger">
              Order a project
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <nuxt />
  </div>
</template>
