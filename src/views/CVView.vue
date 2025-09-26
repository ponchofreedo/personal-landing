<script setup lang="ts">
  import { onMounted } from 'vue'
  import { RouterLink, RouterView } from 'vue-router'
  import Navigation from '@global/Navigation.vue'
  import Footer from '@global/Footer.vue'

  onMounted(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    })
  })
</script>

<script lang="ts">
</script>

<template>
  <Navigation />

  <header>
    <h1>CV.</h1>
    <p class="text--big">Grab a copy of <a href="https://1drv.ms/b/s!AiXwFLoNRqBCifMJqJtyZbbOOAROcA?e=PPKF25" target="_blank" class="link link--inline">my r&eacute;sum&eacute;<icon type="icon" name="iconDownload" /></a>
    </p>
  </header>

  <section id="experience">
    <h4>Work experience.</h4>
    <article name="whalar">
      <aside>
        <a href="https://whalar.com" target="_blank">
          <figure>
            <icon type="svg" name="brandWhalar" height="24" />
            <figcaption alt="Whalar logo">Whalar</figcaption>
          </figure>
        </a>
      </aside>
      <section>
        <h3>Contract Lead Product Designer, Foam</h3>
        <em class="text--big">Whalar</em>
        <div>
          <span class="text--body">January 2025 &ndash; March 2025</span>
          <span class="text--body">Remote</span>
          <span class="text--body">Freelance</span>
        </div>
        <p>Recently I joined up with the <a href="https://foam.io" target="_blank" class="link link--inline">Foam</a> product team at <a href="https://www.whalar.com/" target="_blank" class="link link--inline">Whalar</a> to kickstart their design systems efforts and help with some complicated flows.</p>
      </section>
    </article>
    <article name="freelance">
      <aside>
        <figure>
        </figure>
      </aside>
      <section>
        <h3>Freelance Product Designer</h3>
        <div>
          <span class="text--body">Jane 2016 &ndash; present</span>
        </div>
        <p>Over the years I’ve worked with some stealth startups, new ventures, and existing teams in various industries (sports data science, AI, mar-tech) to help develop their early product concepts or establish design foundations. I’ve also taken some small opportunities to lend a hand with optimizing design system components in Figma, tackle CSS puzzles and optimizations, or put my web designer hat back on for non-profit organizations.</p>
      </section>
    </article>
    <article name="hubspot">
      <aside>
        <a href="https://hubspot.com" target="_blank">
          <figure>
            <icon type="svg" name="brandHubSpot" height="32" />
            <figcaption alt="HubSpot logo">HubSpot</figcaption>
          </figure>
        </a>
      </aside>
      <section>
        <h3>Senior Product Designer I</h3>
        <em class="text--big">HubSpot</em>
        <div>
          <span class="text--body">June 2023 &ndash; August 2024</span>
          <span class="text--body">Remote</span>
        </div>
        <p>I joined the CRM Data Management team at <a href="https://hubspot.com" target="_blank" class="link link--inline">HubSpot</a> as a design lead building scalable property management experiences. Also partnered with the design systems team to adopt some federated process initiatives to improve things like handoff and visibility.</p>
      </section>
    </article>
    <article name="klaviyo">
      <aside>
        <a href="https://klaviyo.com" target="_blank">
          <figure>
            <icon type="svg" name="brandKlaviyo" height="32" />
            <figcaption alt="Klaviyo logo">Klaviyo</figcaption>
          </figure>
        </a>
      </aside>
      <section>
        <h3>Senior Product Designer, Data Infrastructure</h3>
        <em class="text--big">Klaviyo</em>
        <div>
          <span class="text--body">March 2021 &ndash; March 2023</span>
          <span class="text--body">Remote</span>
        </div>
        <p>I was the lead designer for several data infrastructure features at <a href="https://klaviyo.com" target="_blank" class="link link--inline">Klaviyo</a>, including customer profiles, subscription and consent management, and segmentation. My focus was on evolving antiquated core tools and building newer, more powerful tools for marketers. Also got to help drive our internal design systems initiative and start building out a dedicated team.</p>
      </section>
    </article>
    <article name="order">
      <aside>
        <a href="https://order.co" target="_blank">
          <figure>
            <icon type="svg" name="brandOrder" height="32" />
            <figcaption alt="Order logo">Order</figcaption>
          </figure>
        </a>
      </aside>
      <section>
        <h3>Senior Product Designer</h3>
        <em class="text--big">Order</em>
        <div>
          <span class="text--body">January 2020 &ndash; February 2021</span>
          <span class="text--body">New York, NY and Remote</span>
        </div>
        <p><a href="https://order.co" target="_blank" class="link link--inline">Order</a> (f.k.a. Negotiatus when I joined) was my first lead product design position where I concepted and delivered new flagship products, including invoice submission and bill pay products, that were key to closing their Series B round.</p>
      </section>
    </article>
    <article name="tentrr">
      <aside>
        <figure>
          <icon type="svg" name="brandTentrr" height="32" />
          <figcaption alt="Tentrr logo">Tentrr</figcaption>
        </figure>
      </aside>
      <section>
        <h3>Senior Designer</h3>
        <em class="text--big">Tentrr (defunct)</em>
        <div>
          <span class="text--body">February 2018 &ndash; January 2020</span>
          <span class="text--body">New York, NY</span>
        </div>
        <p>Tentrr was the first startup I joined. I got to touch everything like new brand collateral, redesigning the entire web product, building a new management-side experience, and committing production code on the daily. Unfortunately they officially closed up shop, like many other startups, towards the end of 2023.</p>
      </section>
    </article>
    <article name="priceline">
      <aside>
        <a href="https://priceline.com" target="_blank">
          <figure>
            <icon type="svg" name="brandPriceline" height="26" />
            <figcaption alt="Priceline logo">priceline.com</figcaption>
          </figure>
        </a>
      </aside>
      <section>
        <article>
          <h3>UI/UX Designer</h3>
          <em class="text--big">priceline.com</em>
          <div>
            <span class="text--body">March 2015 &ndash; February 2017</span>
            <span class="text--body">Norwalk, CT and New York, NY</span>
          </div>
          <p>Started to pivot away from email marketing as a primary workload and transitioned into being a designer for end of transaction experiences; post-booking, on your trip, and some support areas on web, mobile, and in the customer’s inbox. I also got to work with other members of the design team on our first design systems iterations and integrations.</p>
        </article>
        <article>
          <h3>Associate Web Designer</h3>
          <div>
            <span class="text--body">November 2013 &ndash; February 2015</span>
            <span class="text--body">Norwalk, CT and New York, NY</span>
          </div>
          <p>Worked primarily on email marketing and also on internal marketing tools. If I wasn’t rebuilding one of hundreds of promotional or transactional email templates, I was designing (and sometimes building) admin dashboards for the email marketing, SEM, and ad sales teams.</p>
        </article>
        <article>
          <h3>Web Design Intern</h3>
          <div>
            <span class="text--body">June 2013 &ndash; October 2013</span>
            <span class="text--body">Norwalk, CT</span>
          </div>
          <p>At <a href="https://priceline.com" target="_blank" class="link link--inline">priceline</a>, I started out as an intern on the social media and email marketing team. I was offered a full-time position after 5 months of internship.</p>
        </article>
      </section>
    </article>
    <article name="digitalsurgeons">
      <aside>
        <a href="https://digitalsurgeons.com" target="_blank">
          <figure>
            <icon type="svg" name="brandDigitalSurgeons" height="17" />
            <figcaption alt="Digital Surgeons logo">Digital Surgeons</figcaption>
          </figure>
        </a>
      </aside>
      <section>
        <h3>Design Intern</h3>
        <em class="text--big">Digital Surgeons</em>
        <div>
          <span class="text--body">May 2012 &ndash; August 2012</span>
          <span class="text--body">New Haven, CT</span>
        </div>
        <p>In the summer before my senior year of college, I had an internship with a senior designer at <a href="https://digitalsurgeons.com" target="_blank" class="link link--inline">Digital Surgeons</a>, a small design studio doing big projects. Fun fact: I barely knew HTML or CSS before I started this internship, and never wrote any code while there, but somehow after a long summer mostly working in Photoshop, I somehow learned pretty fluent HTML and CSS. ¯\_(ツ)_/¯.</p>
      </section>
    </article>
  </section>

  <section id="education">
    <h4>Education.</h4>
    <article name="quinnipiac">
      <aside>
        <a href="https://quinnipiac.edu" target="_blank">
          <figure>
            <icon type="svg" name="brandQuinnipiac" height="32" />
            <figcaption alt="Quinnipiac University logo">Quinnipiac University</figcaption>
          </figure>
        </a>
      </aside>
      <section>
        <h3>BA, Interactive Digital Design</h3>
        <h3>Minor, Computer Science</h3>
        <em class="text--big">Quinnipiac University</em>
        <div>
          <span class="text--body">Graduated, May 2013</span>
          <span class="text--body">Hamden, CT</span>
        </div>
      </section>
    </article>
  </section>

  <Footer />

</template>

<style lang="scss" scoped>
  nav,
  header,
  #experience,
  #education,
  footer {
    padding: 0 64px;
    padding: 0 4rem;
  }

  #education,
  footer {
    margin-top: 120px;
  }

  header,
  footer {
    margin-bottom: 120px;
    margin-bottom: 7.5rem;
  }

  h1,
  h4 {
    color: var(--base__color--green-400);
  }

  header p {
    margin-top: 16px;
    margin-top: 1rem;
  }

  header a {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    gap: 0.25rem;
  }

  header svg {
    height: 20px;
    height: 1.25rem;
    width: auto;
  }

  article {
    padding: 40px 0;
    padding: 2.5rem 0;
    display: flex;
    flex-direction: row;
    gap: 40px;
    gap: 2.5rem;
  }

  article + article {
    border-top-style: solid;
    border-top-width: 2px;
    border-top-width: 0.125rem;
    border-top-color: var(--base__color--neutral-500);
  }

  aside {
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    width: 120px;
    width: 7.5rem;
  }

  aside a {
    display: inline-flex;
    line-height:normal;
    height: min-content;
  }

  figure {
    display: inherit;
    align-items: center;
    height: 40px;
    height: 2.5rem;
    border-radius: 16px;
    border-radius: 1rem;
    border-color: var(--base__color--neutral-500);
    padding-top: 2px; /* optical adjustment */
    padding-top: 0.125rem; /* optical adjustment */
  }

  figcaption {
    display: none;
    text-align: center;
  }

  figure svg {
    height: auto;
    min-height: 16px;
    min-height: 1rem;
    width: auto;
    margin: 0 auto;
  }

  [name="priceline"] section {
    flex-direction: column;
  }

  [name="priceline"] article {
    flex-direction: inherit;
    padding: 0;
    gap: 0;
    border: none;
  }

  [name="priceline"] article + article {
    padding-top: 40px;
  }

  figure,
  h3 {
    color: var(--base__color--green-100);
  }

  em,
  p {
    color: var(--base__color--neutral-50);
  }

  span:not(a span) {
    color: var(--base__color--neutral-200);
  }

  div { 
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-top: 8px;
    margin-top: 0.5rem;
    margin-bottom: 16px;
    margin-bottom: 1rem;
  }

  @media (max-width: 800px) {
    nav,
    header,
    section,
    #experience,
    #education,
    footer {
      padding: 0;
    }

    header {
      margin-bottom: 80px;
      margin-bottom: 5rem;
    }
  }

  @media (max-width: 720px) {
    article[name] {
      flex-direction: column;
      gap: 16px;
      gap: 1rem;
    }

    article[name] svg {
      height: 24px;
    }

    [name="freelance"] aside,
    em {
      display: none!important;
    }

    span {
      font-size: 14px;
      font-size: 0.875rem;
      line-height: var(--text__line-height--display--mod);
    }
  }
</style>
