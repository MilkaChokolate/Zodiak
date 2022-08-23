<template>
  <div>
    <header-block />

    <!-- About -->
    <block-wrap id="about">
      <title-block title="About" subtitle="Lorem ipsum dolor sit amet consectetur." />
      <b-row>
        <b-col cols="12">
          <timeline :data-timeline="timeline" />
        </b-col>
      </b-row>
    </block-wrap>
    <!-- Services -->
    <block-wrap id="services">
      <title-block title="Services" subtitle="Lorem ipsum dolor sit amet consectetur." />
      <b-row class="text-center">
        <b-col cols="12" md="4">
          <item-list-icon
            icon="fa-shopping-cart"
            title="E-Commerce"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
          />
        </b-col>
        <b-col cols="12" md="4">
          <item-list-icon
            icon="fa-laptop"
            title="Responsive Design"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
          />
        </b-col>
        <b-col cols="12" md="4">
          <item-list-icon
            icon="fa-lock"
            title="Web Security"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
          />
        </b-col>
      </b-row>
    </block-wrap>
    <!-- Portfolio -->
    <block-wrap id="portfolio" :light="true">
      <title-block title="Portfolio" subtitle="Lorem ipsum dolor sit amet consectetur." />
      <wrap-list-picture>
        <item-list-picture
          picture="/img/portfolio/01-thumbnail.jpg"
          title="Threads"
          subtitle="Illustration"
        />
        <item-list-picture
          picture="/img/portfolio/01-thumbnail.jpg"
          title="Threads"
          subtitle="Illustration"
        />
        <item-list-picture
          picture="/img/portfolio/01-thumbnail.jpg"
          title="Threads"
          subtitle="Illustration"
        />
      </wrap-list-picture>
    </block-wrap>
    <!-- Team -->
    <section id="team" class="bg-light page-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">
              Our Amazing Team
            </h2>
            <h3 class="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <div class="team-member">
              <img class="mx-auto rounded-circle" src="img/team/1.jpg" alt="">
              <h4>Kay Garland</h4>
              <p class="text-muted">
                Lead Designer
              </p>
              <ul class="list-inline social-buttons">
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-twitter" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-facebook-f" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="team-member">
              <img class="mx-auto rounded-circle" src="img/team/2.jpg" alt="">
              <h4>Larry Parker</h4>
              <p class="text-muted">
                Lead Marketer
              </p>
              <ul class="list-inline social-buttons">
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-twitter" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-facebook-f" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="team-member">
              <img class="mx-auto rounded-circle" src="img/team/3.jpg" alt="">
              <h4>Diana Pertersen</h4>
              <p class="text-muted">
                Lead Developer
              </p>
              <ul class="list-inline social-buttons">
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-twitter" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-facebook-f" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <p class="large text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque,
              laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="page-section">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">
            Contact Us
          </h2>
          <h3 class="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
        <!-- * * * * * * * * * * * * * * *-->
        <!-- * * SB Forms Contact Form * *-->
        <!-- * * * * * * * * * * * * * * *-->
        <!-- This form is pre-integrated with SB Forms.-->
        <!-- To make this form functional, sign up at-->
        <!-- https://startbootstrap.com/solution/contact-forms-->
        <!-- to get an API token!-->
        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
          <div class="row align-items-stretch mb-5">
            <div class="col-md-6">
              <div class="form-group">
                <!-- Name input-->
                <input id="name" class="form-control" type="text" placeholder="Your Name *" data-sb-validations="required">
                <div class="invalid-feedback" data-sb-feedback="name:required">
                  A name is required.
                </div>
              </div>
              <div class="form-group">
                <!-- Email address input-->
                <input id="email" class="form-control" type="email" placeholder="Your Email *" data-sb-validations="required,email">
                <div class="invalid-feedback" data-sb-feedback="email:required">
                  An email is required.
                </div>
                <div class="invalid-feedback" data-sb-feedback="email:email">
                  Email is not valid.
                </div>
              </div>
              <div class="form-group mb-md-0">
                <!-- Phone number input-->
                <input id="phone" class="form-control" type="tel" placeholder="Your Phone *" data-sb-validations="required">
                <div class="invalid-feedback" data-sb-feedback="phone:required">
                  A phone number is required.
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group form-group-textarea mb-md-0">
                <!-- Message input-->
                <textarea id="message" class="form-control" placeholder="Your Message *" data-sb-validations="required" />
                <div class="invalid-feedback" data-sb-feedback="message:required">
                  A message is required.
                </div>
              </div>
            </div>
          </div>
          <!-- Submit success message-->
          <!---->
          <!-- This is what your users will see when the form-->
          <!-- has successfully submitted-->
          <div id="submitSuccessMessage" class="d-none">
            <div class="text-center text-white mb-3">
              <div class="fw-bolder">
                Form submission successful!
              </div>
              To activate this form, sign up at
              <br>
              <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
            </div>
          </div>
          <!-- Submit error message-->
          <!---->
          <!-- This is what your users will see when there is-->
          <!-- an error submitting the form-->
          <div id="submitErrorMessage" class="d-none">
            <div class="text-center text-danger mb-3">
              Error sending message!
            </div>
          </div>
          <!-- Submit Button-->
          <div class="text-center">
            <button id="submitButton" class="btn btn-primary btn-xl text-uppercase" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>

    <!-- Clients -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-6">
            <a href="#">
              <img class="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt="">
            </a>
          </div>
          <div class="col-md-3 col-sm-6">
            <a href="#">
              <img class="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt="">
            </a>
          </div>
          <div class="col-md-3 col-sm-6">
            <a href="#">
              <img class="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt="">
            </a>
          </div>
          <div class="col-md-3 col-sm-6">
            <a href="#">
              <img class="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt="">
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-4">
            <span class="copyright">Copyright &copy; Your Website 2021</span>
          </div>
          <div class="col-md-4">
            <ul class="list-inline social-buttons">
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-twitter" />
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-facebook-f" />
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-linkedin-in" />
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <ul class="list-inline quicklinks">
              <li class="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    <!-- Portfolio Modal -->
    <div id="portfolioModal2" class="portfolio-modal modal fade" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl" />
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="modal-body">
                  <!-- Project Details Go Here -->
                  <h2 class="text-uppercase">
                    Project Name
                  </h2>
                  <p class="item-intro text-muted">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <img class="img-fluid d-block mx-auto" src="img/portfolio/02-full.jpg" alt="">
                  <p>
                    Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos
                    deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores
                    repudiandae, nostrum, reiciendis facere nemo!
                  </p>
                  <ul class="list-inline">
                    <li>Date: January 2017</li>
                    <li>Client: Explore</li>
                    <li>Category: Graphic Design</li>
                  </ul>
                  <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fas fa-times" />
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBlock from '../components/HeaderBlock'
import BlockWrap from '../components/BlockWrap'
import TitleBlock from '../components/TitleBlock'
import ItemListIcon from '../components/ItemListIcon'
import WrapListPicture from '../components/WrapListPicture'
import ItemListPicture from '../components/ItemListPicture'
import Timeline from '../components/Timeline'

export default {
  components: {
    Timeline,
    ItemListPicture,
    WrapListPicture,
    ItemListIcon,
    TitleBlock,
    BlockWrap,
    HeaderBlock
  },

  data () {
    return {
      timeline: [
        {
          picture: '/img/about/1.jpg',
          head: {
            title: 'July 2014',
            subtitle: 'Phase Two Expansion'
          },
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
              '                Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam,\n' +
              '                recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium\n' +
              '                consectetur!'
        },
        {
          picture: '/img/about/1.jpg',
          head: {
            title: 'July 2014',
            subtitle: 'Phase Two Expansion'
          },
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
              '                Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam,\n' +
              '                recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium\n' +
              '                consectetur!'
        },
        {
          picture: '/img/about/1.jpg',
          head: {
            title: 'July 2014',
            subtitle: 'Phase Two Expansion'
          },
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
              '                Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam,\n' +
              '                recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium\n' +
              '                consectetur!'
        }
      ]
    }
  }
}
</script>
