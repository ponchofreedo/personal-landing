<script setup lang="ts">
import { defineAsyncComponent, type Component } from 'vue'
import { useRouter } from 'vue-router'
import GlobalNavigation from '@global/GlobalNavigation.vue'
import GlobalFooter from '@global/GlobalFooter.vue'

defineOptions({
  inheritAttrs: false,
})

const router = useRouter()

const goBack = () => {
  router.back()
}
</script>

<script lang="ts">
import json from '@data/projects.json'

export default {
  data() {
    return {
      projects: json.projects,
      company: this.$route.params.company,
      slug: this.$route.params.slug,
    }
  },
  computed: {
    projectExists(): boolean {
      const company = typeof this.company === 'string' ? this.company : this.company?.[0]
      const slug = typeof this.slug === 'string' ? this.slug : this.slug?.[0]

      if (!company || !slug) return false

      const companyProjects = this.projects[company as keyof typeof this.projects]
      if (!companyProjects) return false

      return !!companyProjects[slug as keyof typeof companyProjects]
    },
    currentComponent() {
      const company = typeof this.company === 'string' ? this.company : this.company?.[0]
      const slug = typeof this.slug === 'string' ? this.slug : this.slug?.[0]

      if (!company || !slug) return null

      // Map route to component using defineAsyncComponent
      const componentMap: Record<string, Component> = {
        'hubspot-create-edit': defineAsyncComponent(
          () => import('@components/works/projects/HubspotCreateEdit.vue'),
        ),
        'hubspot-formula-tester': defineAsyncComponent(
          () => import('@components/works/projects/HubspotFormulaTester.vue'),
        ),
        // 'whalar-buoy-foundations': defineAsyncComponent(() => import('@components/works/projects/WhalarBuoyFoundations.vue')),
      }

      const key = `${company}-${slug}`
      return componentMap[key] || null
    },
  },
}
</script>

<template>
  <!-- start nav -->
  <GlobalNavigation />
  <!-- end nav -->

  <!-- back link start -->
  <header>
    <RouterLink @click="goBack" to="" class="link link--back">
      <icon type="icon" name="iconArrowLeft" />
      <span>Go back</span>
    </RouterLink>
  </header>
  <!-- back link end -->

  <component v-if="currentComponent" :is="currentComponent" />

  <!-- start footer -->
  <GlobalFooter />
  <!-- end footer -->
</template>

<style lang="scss" scoped>
header {
  @include container-inner-grid;
  margin-top: convertRem(16px);
  margin-bottom: convertRem(16px);
}

#footer {
  @include container-inner-grid;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
