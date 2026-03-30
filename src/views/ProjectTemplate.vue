<script setup lang="ts">
import { defineAsyncComponent, type Component } from 'vue'
import UtilityNavigation from '@util/UtilityNavigation.vue'
// import UtilityFooter from '@util/UtilityFooter.vue'
import GlobalFooter from '@global/GlobalFooter.vue'

defineOptions({
  inheritAttrs: false,
})
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

      // to-do: convert this const to an array so i can traverse it with a next/back footer
      // Map route to component using defineAsyncComponent
      const componentMap: Record<string, Component> = {
        'hubspot-create-edit': defineAsyncComponent(
          () => import('@components/works/projects/HubspotCreateEdit.vue'),
        ),
        'hubspot-formula-tester': defineAsyncComponent(
          () => import('@components/works/projects/HubspotFormulaTester.vue'),
        ),
        'klaviyo-customer-profiles': defineAsyncComponent(
          () => import('@components/works/projects/KlaviyoCustomerProfiles.vue'),
        ),
        // 'hubspot-property-cleanup': defineAsyncComponent(
        //   () => import('@components/works/projects/HubspotPropertyCleanup.vue'),
        // ),
        // 'tentrr-discovery': defineAsyncComponent(
        //   () => import('@components/works/projects/TentrrDiscovery.vue'),
        // ),
        // 'whalar-buoy-foundations': defineAsyncComponent(() => import('@components/works/projects/WhalarBuoyFoundations.vue')),
      }

      const key = `${company}-${slug}`
      return componentMap[key] || null
    },
  },
}
</script>

<template>
  <!-- start utility nav -->
  <UtilityNavigation />
  <!-- end utility nav -->

  <component v-if="currentComponent" :is="currentComponent" />

  <!-- to-do: back and next project footer-->
  <!-- start utility nav -->
  <!-- <UtilityFooter /> -->
  <!-- end utility nav -->

  <!-- start footer -->
  <GlobalFooter />
  <!-- end footer -->
</template>

<style lang="scss" scoped></style>
