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

  interface Project {
    title: string;
    copy: {
      intro?: string;
      context?: string;
      opportunity?: string;
      goals?: string;
      creation?: string;
      manage?: string;
      retro?: string;
      [key: string]: any;
    };
    meta: {
      tags?: Record<string, string>;
      date?: string;
      slug?: string;
      href?: string;
      [key: string]: any;
    };
    team: string;
  }

  export default {
    data() {
      return {
        projects: json.projects,
        company: this.$route.params.company,
        slug: this.$route.params.slug
      };
    },
    computed: {
      project(): Project | null {
        const company = typeof this.company === 'string' ? this.company : this.company?.[0];
        const slug = typeof this.slug === 'string' ? this.slug : this.slug?.[0];
        
        if (!company || !slug) return null;
        
        const companyProjects = this.projects[company as keyof typeof this.projects];
        if (!companyProjects) return null;
        
        const result = companyProjects[slug as keyof typeof companyProjects];
        return result ? (result as Project) : null;
      }
    },
    created() {
      if (this.project) {
        console.log("I am a project");
      }
    },
  };
</script>

<template>

  <!-- start nav -->
  <Navigation />
  <!-- end nav -->
  <div v-if="project">
    <!-- header start -->
    <header>
      <img />
      <article>
        <h1>{{ project?.title }}</h1>
        <aside>
          <div>
            <em>Company</em>
            <div>{{ company }}</div>
          </div>
          <div>
            <em>Year(s)</em>
            <div>{{ project?.meta?.date }}</div>
          </div>
          <div>
            <em>Status</em>
            <ul>
              <li v-for="tag in project.meta.tags" :class="'tag' + ' ' + 'tag--' + tag">
                <icon v-if="tag == 'private'" type="icon" name="iconPrivate" />
                <icon v-if="tag == 'testing'" type="icon" name="iconLightning" />
                <svg v-if="tag == 'beta'" viewBox="0 0 18 18" height="16" width="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9" cy="9" r="8" stroke="currentColor" stroke-width="2" />
                </svg>
                <svg v-if="tag == 'in-dev'" viewBox="0 0 18 18" height="16" width="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9" cy="9" r="8" stroke="currentColor" stroke-width="2" stroke-dasharray="4" stroke-linecap="square" />
                </svg>
                <svg v-if="tag =='shipped'" viewBox="0 0 18 18" height="16" width="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9" cy="9" r="8" />
                </svg>
                <span>{{ tag }}</span>
              </li>
            </ul>
          </div>
          <div>
            <em>Team</em>
            <div v-html="project?.team"></div>
          </div>
        </aside>
        <section>
          <p>{{ project.copy.sections.intro.p1 }}</p>
        </section>
      </article>
    </header>
    <!-- header end -->
    <!-- context start -->
    <section>
      <article>
        <aside>
          <h2>{{ project?.copy?.sections?.context?.title }}</h2>
        </aside>
        <section>
          <p>{{ project?.copy?.sections?.context?.p1 }}</p>
          <p>{{ project?.copy?.sections?.context?.p2 }}</p>
        </section>
      </article>
    </section>
    <!-- context end -->
    <!-- 3-col image start -->
    <section>
      <main>
        <figure>
          <img decoding="async" loading="lazy" sizes="" />
        </figure>
        <figure>
          <img decoding="async" loading="lazy" sizes="" />
        </figure>
        <figure>
          <img decoding="async" loading="lazy" sizes="" />
        </figure>
      </main>
    </section>
    <!-- 3-col image end -->
    <!-- opportunity start -->
    <section>
      <article>
        <aside>
          <h2>{{ project?.copy?.sections?.opportunity?.title }}</h2>
        </aside>
        <section>
          <p>{{ project?.copy?.sections?.opportunity?.p1 }}</p>
          <ul>
            <li v-for="goal in project?.copy?.sections?.goals">
              <div>
                <em>Goal</em>
                <span v-html="goal.goal"></span>
              </div>
            </li>
          </ul>
        </section>
      </article>
    </section>
    <!-- opportunity end -->
    <!-- creation part 1 start -->
    <section>
      <article>
        <aside>
          <h2>{{ project?.copy?.sections?.creation?.title }}</h2>
        </aside>
        <section>
          <p>{{ project?.copy?.sections?.creation?.p1 }}</p>
        </section>
      </article>
    </section>
    <!-- creation part 1 end -->
    <!-- hero image start -->
    <section>
      <main>
        <figure>
          <img decoding="async" loading="lazy" sizes="" />
        </figure>
      </main>
    </section>
    <!-- hero image end -->
    <!-- creation part 2 start -->
    <section>
      <article>
        <aside>
          <p>{{ project?.copy?.sections?.creation?.p2 }}</p>
        </aside>
        <section>
          <p>{{ project?.copy?.sections?.creation?.p3 }}</p>
        </section>
      </article>
    </section>
    <!-- creation part 2 end -->
    <!-- hero image start -->
    <section>
      <main>
        <figure>
          <img decoding="async" loading="lazy" sizes="" />
        </figure>
      </main>
    </section>
    <!-- hero image end -->
    <!-- creation part 3 start -->
    <section>
      <article>
        <aside>
          <p>{{ project?.copy?.sections?.creation?.p4 }}</p>
        </aside>
        <section>
          <p>{{ project?.copy?.sections?.creation?.p5 }}</p>
        </section>
      </article>
    </section>
    <!-- creation part 3 end -->
    <!-- manage start -->
    <section>
      <article>
        <aside>
          <h2>{{ project?.copy?.sections?.manage?.title }}</h2>
        </aside>
        <section>
          <p>{{ project?.copy?.sections?.manage?.p1 }}</p>
          <p>{{ project?.copy?.sections?.manage?.p2 }}</p>
          <div>
            <figure>
              <img decoding="async" loading="lazy" sizes="" />
              <figcaption>{{ project?.copy?.sections?.manage?.p3 }}</figcaption>
            </figure>
            <figure>
              <img decoding="async" loading="lazy" sizes="" />
              <figcaption>{{ project?.copy?.sections?.manage?.p4 }}</figcaption>
            </figure>
          </div>
        </section>
      </article>
    </section>
    <!-- manage end -->
    <!-- retro start -->
    <section>
      <article>
        <aside>
          <h2>{{ project?.copy?.sections?.retro?.title }}</h2>
        </aside>
        <section>
          <p>{{ project?.copy?.sections?.retro?.p1 }}</p>
          <ul>
            <li v-for="goal in project?.copy?.sections?.goals">
              <div>
                <em>Goal</em>
                <span v-html="goal.goal"></span>
                <span v-html="goal.result"></span>
              </div>
            </li>
          </ul>
          <p>{{ project?.copy?.sections?.retro?.p2 }}</p>
          <p>{{ project?.copy?.sections?.retro?.p3 }}</p>
        </section>
      </article>
    </section>
    <!-- retro end -->
  </div>
  <div v-else>
    <header>
      <div>project not found</div>
    </header>
  </div>
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
