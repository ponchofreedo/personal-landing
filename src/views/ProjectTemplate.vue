<script setup lang="ts">
  import { ref, defineAsyncComponent } from 'vue'
  import { useRouter } from 'vue-router'
  // import { projectMap } from '@data/constants'
  import Navigation from '@global/Navigation.vue'
  import Footer from '@global/Footer.vue'

  defineOptions({
    inheritAttrs: false
  })

  const router = useRouter();

  const goBack = () => {
    router.back();
  };
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
    img: {
      fileName?: string;
      alt?: string;
      [key: string]: any;
    }
    company: string;
    company_url: string;
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
      projectExists(): boolean {
        const company = typeof this.company === 'string' ? this.company : this.company?.[0];
        const slug = typeof this.slug === 'string' ? this.slug : this.slug?.[0];
        
        if (!company || !slug) return false;
        
        const companyProjects = this.projects[company as keyof typeof this.projects];
        if (!companyProjects) return false;
        
        return !!companyProjects[slug as keyof typeof companyProjects];
      },
      currentComponent() {
        const company = typeof this.company === 'string' ? this.company : this.company?.[0];
        const slug = typeof this.slug === 'string' ? this.slug : this.slug?.[0];
        
        if (!company || !slug) return null;
        
        // Map route to component using defineAsyncComponent
        const componentMap: Record<string, any> = {
          'hubspot-create-edit': defineAsyncComponent(() => import('@components/works/projects/HubspotCreateEdit.vue')),
          'hubspot-formula-tester': defineAsyncComponent(() => import('@components/works/projects/HubspotFormulaTester.vue')),
          // 'whalar-buoy-foundations': defineAsyncComponent(() => import('@components/works/projects/WhalarBuoyFoundations.vue')),
        };
        
        const key = `${company}-${slug}`;
        return componentMap[key] || null;
      }
    }
  };
</script>

<template>

  <!-- start nav -->
  <Navigation />
  <!-- end nav -->
  
  <!-- back link start -->
  <header>
    <RouterLink 
      @click="goBack"
      to=""
      class="link link--back">
      <icon type="icon" name="iconArrowLeft" />
      <span>Go back</span>
    </RouterLink>
  </header>
  <!-- back link end -->

  <component
    v-if="currentComponent"
    :is="currentComponent" />

  <!-- start footer -->
  <Footer />
  <!-- end footer -->
</template>

<style lang="scss" scoped>

  header {
    @include inner-flex-container;
    margin-top: convertRem(16px);
    margin-bottom: convertRem(16px);
  }

  #footer {
    @include inner-flex-container;
  }

  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
</style>
