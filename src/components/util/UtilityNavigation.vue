<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.back()
}
</script>

<template>
  <!-- back link start -->
  <nav>
    <ul>
      <li>
        <RouterLink @click="goBack" to="" class="link link--breadcrumb">
          <icon type="icon" class="icon--bigger" name="iconArrowLeft" />
          <span>Go back</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
  <!-- back link end -->
</template>

<style lang="scss" scoped>
nav {
  @include container-max-width;
  @include container-responsive-padding;
  display: flex;
  flex-direction: column;
  padding-block: convertRem(40px);

  @media (max-width: 980px) {
    padding-block: convertRem(24px);
  }
}

ul {
  display: flex;
  flex-basis: 100%;
  flex-direction: row;
  align-items: flex-start;
  list-style: none;
  flex-wrap: wrap;
  background-color: $primary__color--background--lighter;
  padding: convertRem(16px) convertRem(20px);
  border-radius: convertRem(8px);

  &:first-child {
    color: $primary__color--text--muted !important;
  }
}

a,
li {
  color: inherit !important;
}

li {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: convertRem(8px);
  @include text-style(p, medium, fixed);
}
</style>
