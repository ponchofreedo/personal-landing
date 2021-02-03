<template>
  <svg width="24" height="24" viewBox="0 0 24 24" :fill="svgFill" :class="arrowClass" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 24C5.3724 24 0 18.6276 0 12C0 5.3724 5.3724 0 12 0C18.6276 0 24 5.3724 24 12C24 18.6276 18.6276 24 12 24ZM5.40002 11.9915L12 18.6L18.6 11.9915L16.9266 10.316L13.1892 14.0582V5.40002L10.8024 5.40857V14.0668L7.06482 10.3245L5.40002 11.9915Z" fill="inherit"/>
  </svg>
</template>

<script>
  export default {
    name: 'CircleArrow',
    props: {
      arrowClass: String,
      svgFill: String
    }
  }
</script>

<style scoped>

.circle-arrow__up {
  transform: rotate(180deg);
}

.circle-arrow__down {
  transform: rotate(0deg);
}

</style>
