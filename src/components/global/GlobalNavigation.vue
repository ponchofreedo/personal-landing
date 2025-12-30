<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { navLinks, socialLinks } from '@data/constants'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value

  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
  } else {
    document.body.style.overflow = ''
    document.body.style.position = ''
  }
}
</script>

<template>
  <nav :layout="$route.name" class="nav__fixed">
    <div>
      <RouterLink to="/" data-route="home" :class="$route.name == 'home' ? 'active' : ''">
        <span class="text--big text--bold">&lsquo;Sup</span><span class="indicator">.</span>
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
          <span class="text--big">{{ navLink.label }}</span>
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
          ><span class="text--big">R&eacute;sum&eacute;</span>
        </a>
      </li>
      <!-- <li><button>mode<icon type="icon" name="iconMoon" /></button></li> -->
    </ul>
  </nav>
  <nav :layout="$route.name" class="nav__responsive">
    <RouterLink to="/" data-route="home" :class="$route.name == 'home' ? 'active' : ''">
      <span class="text--big text--bold">&lsquo;Sup</span><span class="indicator">.</span>
    </RouterLink>
    <button @click="toggleMenu" aria-label="Toggle Responsive Menu">
      <icon type="icon" name="iconMenu" />
    </button>
    <div v-if="isMenuOpen" class="container__responsive-nav">
      <header>
        <span class="text--big text--bold">Whattup.</span>
        <button @click="toggleMenu" aria-label="Close Responsive Menu">
          <icon type="icon" name="iconClose" />
        </button>
      </header>
      <ul class="nav__links__site">
        <li v-for="navLink in navLinks" :key="navLink.name" :data-route="navLink.name">
          <RouterLink
            :to="navLink.href"
            :class="
              navLink.name == $route.name || ($route.name == 'project' && navLink.name == 'works')
                ? 'active'
                : ''
            "
            @click="toggleMenu"
          >
            <span>{{ navLink.label }}</span>
            <icon type="icon" name="iconArrowUpRight" />
          </RouterLink>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1Ib9gDFZmR5loB7iczbViQZr49_o_fgfY/view?usp=sharing"
            target="_blank"
            ><span>R&eacute;sum&eacute;</span>
          </a>
        </li>
      </ul>
      <ul class="nav__links__social">
        <h4>Find me.</h4>
        <li v-for="socialLink in socialLinks" :key="socialLink.platform">
          <a href="">
            <span>{{ socialLink.platform }}</span>
            <icon type="icon" name="iconArrowSquareUpRight" />
          </a>
        </li>
      </ul>
    </div>
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
  @include container-max-width;
  padding: convertRem(40px) 0;
  line-height: unset;
  background-color: rgba($primary__color--background, 0.9);
  z-index: 999;

  @media (max-width: 620px) {
    justify-items: flex-start;
    gap: convertRem(24px);
    padding: convertRem(24px) 0;
  }
}

.nav {
  &__fixed {
    display: flex;

    @media (max-width: 620px) {
      display: none;
    }
  }

  &__responsive {
    display: none;
    position: relative;

    button {
      background-color: $primary__color--background--lighter;
      border: none;
      height: min-content;
      width: min-content;
      padding: convertRem(8px);
      border-radius: convertRem(8px);
      line-height: 0;
      margin-left: convertRem(16px);

      svg {
        height: convertRem(32px);
        width: convertRem(32px);
      }
    }

    @media (max-width: 620px) {
      display: flex;
      align-items: center;

      div {
        position: fixed;
        top: 0;
        left: 0;
        height: 100dvh;
        width: 100dvw;
        z-index: 9999;
      }
    }
  }
}

.container__responsive-nav {
  display: flex;
  flex-direction: column;
  background-color: $primary__color--background;
  padding: convertRem(24px);

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-bottom: convertRem(2px) solid $primary__color--border;
    padding-bottom: convertRem(24px);

    span {
      display: flex;
      flex-basis: 100%;
      justify-content: flex-start;
    }
  }

  img {
    height: convertRem(64px);
    width: convertRem(64px);
  }
}

button {
  height: auto;
  width: auto;

  svg {
    color: $primary__color--accent;
    height: convertRem(32px);
    width: auto;
  }
}

[layout='cv'] {
  margin-bottom: convertRem(40px);
  padding-top: convertRem(6px); /* optical placement to match while there's no mode switch button */
}

div,
ul {
  display: inline-flex;
  align-items: center;
  line-height: $text__line-height--fixed;

  @media (max-width: 620px) {
    align-items: flex-start;
  }
}

nav {
  justify-self: flex-start;

  a,
  span {
    color: $primary__color--accent;
    text-decoration: none;
  }
}

ul {
  justify-self: flex-end;
  list-style: none;
  gap: convertRem(24px);
  flex-wrap: wrap;

  @media (max-width: 620px) {
    justify-items: flex-start;
    width: 100%;
    gap: convertRem(8px);

    &:first-of-type {
      padding: convertRem(48px) 0;
    }
  }

  li {
    font-weight: $text__font-weight--regular;

    @media (max-width: 620px) {
      flex-basis: 100%;
    }
  }

  a,
  span {
    display: flex;
    color: $primary__color--text--darker !important;
    @include text-hover-effect(strike, 0s);
  }
}

.nav__links {
  &__site {
    li {
      padding: convertRem(16px) 0;
      @include text-style(h2, bold, inherit);
      border-bottom: convertRem(1px) solid $primary__color--border;
      align-items: center;

      a {
        align-items: center;
        gap: convertRem(8px);
      }

      svg {
        height: convertRem(32px);
        width: convertRem(32px);
      }

      &:first-child {
        padding-top: 0;
      }
    }
  }

  &__social {
    justify-self: flex-end;
    margin-top: auto;
    padding-bottom: convertRem(32px);
    li {
      display: inline-flex;
      padding: convertRem(8px) 0;
      @include text-style(h4, medium, inherit);
      align-items: center;

      a {
        align-items: center;
        gap: convertRem(8px);
      }

      svg {
        height: convertRem(20px);
        width: convertRem(20px);
      }

      &:first-child {
        padding-top: 0;
      }
    }
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
</style>
