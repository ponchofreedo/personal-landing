<script setup lang="ts">
defineProps<{
  greeting: string
}>()
</script>

<template>
  <nav class="container__simple">
    <h1>{{ greeting }}<span>.</span></h1>
    <ul>
      <li>
        <a href="https://github.com/ponchofreedo/portfolio-projects/">
          <h4>Work things.</h4>
          <p>They're in GitHub :/.</p>
        </a>
      </li>
      <li>
        <a href="https://1drv.ms/b/s!AiXwFLoNRqBChfAgVS4nN7C18OcttQ?e=ZEJ7nV">
          <h4>R&eacute;sum&eacute;.</h4>
          <p>...and OneDrive.</p>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  h1,
  h4,
  a {
    color: var(--primart__color-text);
  }

  h1 span {
    color: var(--primary__color--theme);
  }

  a {
    text-decoration: none;
  }
</style>
