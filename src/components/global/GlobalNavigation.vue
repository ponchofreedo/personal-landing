<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { navLinks } from '@data/constants'
</script>

<template>
  <nav :layout="$route.name">
    <div>
      <RouterLink to="/" data-route="home" :class="$route.name == 'home' ? 'active' : ''">
        <span>&lsquo;Sup</span><span class="indicator">.</span>
      </RouterLink>
    </div>
    <ul>
      <li v-for="navLink in navLinks" :key="navLink.name" :data-route="navLink.name">
        <RouterLink
          :to="navLink.href"
          :class="
            navLink.name == $route.name || ($route.name == 'project' && navLink.name == 'works')
              ? 'active'
              : ''
          "
        >
          <span>{{ navLink.label }}</span>
          <span
            v-if="
              ($route.name == navLink.name && $route.name != 'home') ||
              ($route.name == 'project' && navLink.name == 'works')
            "
            class="indicator"
            >.
          </span>
        </RouterLink>
      </li>
      <li>
        <a
          href="https://drive.google.com/file/d/1Ib9gDFZmR5loB7iczbViQZr49_o_fgfY/view?usp=sharing"
          target="_blank"
          ><span>R&eacute;sum&eacute;</span>
        </a>
      </li>
      <!-- <li><button>mode<icon type="icon" name="iconMoon" /></button></li> -->
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  flex: 0 0 100%;
  justify-content: space-between;
  padding: convertRem(40px) 0;
  line-height: unset;
  @include container-width(0);
  background-color: rgba($primary__color--background, 0.9);
  z-index: 999;
}

[layout='cv'] {
  margin-bottom: convertRem(40px);
  padding-top: convertRem(6px); /* optical placement to match while there's no mode switch button */
}

div,
ul {
  display: inline-flex;
  align-items: center;
  @include text-style(big, regular, fixed);
}

div {
  justify-self: flex-start;

  a {
    @include text-style(inherit, bold, inherit);
    color: $primary__color--accent !important;
    text-decoration: none !important;
  }
}

ul {
  justify-self: flex-end;
  list-style: none;
  gap: convertRem(24px);
  flex-wrap: wrap;

  a {
    display: flex;
    color: $primary__color--text--darker;
    @include text-hover-effect(strike, 0s);
  }
}

.active {
  &:not([data-route='home']) {
    @include text-style(inherit, bold, inherit);
    color: $primary__color--text;
    text-decoration: none !important;

    span:first-child {
      text-decoration-line: line-through;
      text-decoration-color: inherit;
      text-decoration-thickness: convertRem(4px);
    }
  }

  .indicator {
    color: $primary__color--accent;
  }
}

span {
  + span {
    color: $primary__color--accent;
  }
}

nav:first-child ul:first-child li a svg {
  height: convertRem(24px);
  width: auto;
  color: $primary__color--accent;
}

@media (max-width: 720px) {
  nav {
    flex-direction: column;
    justify-items: center;
    margin-top: convertRem(24px);
    gap: convertRem(16px);
  }
}

@media (max-width: 500px) {
  ul {
    gap: convertRem(16px) convertRem(24px);
  }

  ul:first-of-type li:first-child {
    flex-basis: 100%;
    order: -999; /* override order to guarantee it stays on top */
  }
}
</style>
