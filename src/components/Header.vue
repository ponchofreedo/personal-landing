<template>
  <section class="container container--octo">
    <ul>
      <li>Product designerd.</li>
      <li>Maker of tasty things.</li>
      <li>Mediocre funny man.</li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'Header',
    props: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

section {
  grid-area: header;
  margin-top: var(--base__spacing-2);
  background-color: var(--primary__color);
}
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
