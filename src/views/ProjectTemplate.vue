<script setup lang="ts">
  import { ref } from 'vue'
  import Navigation from '@global/Navigation.vue'
  import Footer from '@global/Footer.vue'

  defineOptions({
    inheritAttrs: false
  })
</script>

<script lang="ts">
  import json from '@data/projects.json'

  export default {
    data() {
      return {
        projects: json.projects,
        company: this.$route.params.company,
        slug: this.$route.params.slug
      };
    },
    computed: {
      project() {
        const company = typeof this.company === 'string' ? this.company : this.company?.[0];
        const slug = typeof this.slug === 'string' ? this.slug : this.slug?.[0];
        
        if (!company || !slug) return null;
        
        const companyProjects = this.projects[company as keyof typeof this.projects];
        if (!companyProjects) return null;
        
        return companyProjects[slug as keyof typeof companyProjects] || null;
      }
    },
    created() {
      if (this.project) {
        console.log("I am a project");
      }
    },
  };
</script>

<template v-if="project">

  <!-- start nav -->
  <Navigation />
  <!-- end nav -->

  <header>
    <img />
    <article>
      <h1>{{ project.title }}</h1>
      <aside>
        <div>
          <em>Company</em>
          <div>{{company}}</div>
        </div>
        <div>
          <em>Year(s)</em>
          <div>date</div>
        </div>
        <div>
          <em>Status</em>
          <ul>
            <li :class="'tag'">
              <!-- <icon v-if="tag == 'private'" type="icon" name="iconPrivate" />
              <icon v-if="tag == 'testing'" type="icon" name="iconLightning" />
              <svg v-if="tag == 'beta'" viewBox="0 0 18 18" height="16" width="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="9" r="8" stroke="currentColor" stroke-width="2" />
              </svg>
              <svg v-if="tag == 'in-dev'" viewBox="0 0 18 18" height="16" width="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="9" r="8" stroke="currentColor" stroke-width="2" stroke-dasharray="4" stroke-linecap="square" />
              </svg>
              <svg v-if="tag =='shipped'" viewBox="0 0 18 18" height="16" width="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="9" r="8" />
              </svg> -->
              <span>tag</span>
            </li>
          </ul>
        </div>
        <div>
          <em>Team</em>
          <div>team</div>
        </div>
      </aside>
      <section>
        <p>paragraph 1</p>
      </section>
    </article>
  </header>
  <section>
  </section>
</template>

<style lang="scss" scoped>

  ul {

  }

  li {
    text-transform: lowercase;

    span {

      &:first-letter {
        text-transform: uppercase;
      }
    }
  }

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
