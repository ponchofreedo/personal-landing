<script setup lang="ts">
import { resourceList } from '@data/constants'
</script>

<template>
  <section id="resources">
    <main>
      <aside>
        <h2>Projects and resources.</h2>
        <small>Giving back is cool, so here's a few things I tinker with for the community.</small>
      </aside>
      <section>
        <article
          v-for="resource in resourceList"
          :key="resource.id"
          :class="resource.state ? 'resource__wip' : ''"
        >
          <a :href="resource.url" target="_blank">
            <header>
              <figure>
                <icon type="svg" :name="resource.platformIcon" />
                <figcaption>{{ resource.platform }}</figcaption>
              </figure>
              <h3>{{ resource.name }}</h3>
              <icon type="icon" name="iconArrowSquareUpRight" />
            </header>
            <p>{{ resource.detail }}</p>
          </a>
        </article>
      </section>
    </main>
  </section>
</template>

<style lang="scss" scoped>
#resources {
}

section {
  main {
    @include split-column-layout-container;
  }
}

aside {
  @include split-column-layout-side(left);
}

h2 {
  color: $primary__color--text--darker;
  margin-bottom: convertRem(8px);
}

small {
  @include text-style(small, regular, base);
  color: $primary__color--text--muted;
}

section {
  @include split-column-layout-side(right);
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: convertRem(16px);
}

article {
  display: flex;
  flex-direction: column;
  gap: convertRem(8px);
  background-color: transparent;
  border-radius: convertRem(24px);
  border-color: $primary__color--border;
  border-width: convertRem(2px);
  border-style: solid;
  transition: background-color 0.12s ease-in-out;

  &:hover {
    background-color: $primary__color--border;
  }

  a {
    display: inherit;
    flex-direction: inherit;
    gap: inherit;
    text-decoration: none;
    color: inherit;
  }
}

.resource__wip {
  transition: none;

  &:hover {
    background-color: transparent;
  }

  a {
    pointer-events: none;
  }

  header,
  p,
  svg {
    color: $primary__color--text--darker !important;
  }

  figure {
    svg {
      fill: $primary__color--text--darker !important;
    }
  }
}

header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: convertRem(16px) convertRem(24px) 0 convertRem(16px);
  justify-content: space-between;
  gap: convertRem(8px);
  color: $primary__color--accent;

  h3 {
    flex-grow: 1;
  }

  + p {
    padding-left: convertRem(72px);
    padding-right: convertRem(24px);
    padding-bottom: convertRem(24px);
  }
}

figure {
  display: flex;
  height: convertRem(48px);
  width: convertRem(48px);
  padding: convertRem(8px);
  justify-content: center;
  align-items: center;

  figcaption {
    display: none;
  }

  svg {
    height: auto;
    width: auto;
    max-height: convertRem(24px);
    max-width: convertRem(32px);
    fill: $primary__color--accent;
    color: inherit;
  }
}

h3 {
  + svg {
    height: convertRem(24px);
    width: convertRem(24px);
    color: inherit;
  }
}

p {
  color: $primary__color--text--muted;
}
</style>
