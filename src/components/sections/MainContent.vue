<script>
</script>

<template>
  <section class="container__grid">
    <article class="container__simple theme__highlight">
      <div>
        <h1>'Sup</h1>
        <h2>I'm Zach &mdash; a product designer who enjoys crafting frictionless experiences for real people with real needs. Recently, I was building core data management experiences at <a href="https://www.klaviyo.com" target="_blank">Klaviyo</a>.</h2>
        <p>Previously crafted thoughtful spend and purchasing experiences at <a href="https://www.order.co" target="_blank">Order.co</a>, went beyond camping at <a href="https://www.tentrr.com" target="_blank">Tentrr</a>, built best in class travel experiences at <a href="https://www.priceline.com" target="_blank">priceline</a>, and learned to push pixel performance at <a href="https://www.digitalsurgeons.com" target="_blank">Digital Surgeons</a>.</p>
        <ul>
          <li>
            <a href="https://1drv.ms/b/s!AiXwFLoNRqBChfAgVS4nN7C18OcttQ?e=ZEJ7nV" target="_blank">R&eacute;sum&eacute;</a>
          </li>
          <li>
            <a href="https://github.com/ponchofreedo/portfolio-projects" target="_blank">Projects</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/zpfreed" target="_blank">LinkedIn</a>
          </li>
          <li>
            <a href="https://www.instagram.com/ponchofreedo" target="_blank">Instagram</a>
          </li>
          <li>
            <a href="https://www.dribbble.com/ponchofreedo" target="_blank">Dribbble</a>
          </li>
        </ul>
      </div>
    </article>
  </section>
</template>

<style lang="scss" scoped>

div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin-top: auto;
  margin-bottom: auto;

  @media (max-width: 719px) {
    margin-top: 4rem;
    height: auto;
  }

  h1 {
    margin-bottom: 1rem;
    margin-left: -1rem;
  }

  h2 {
    margin-bottom: 1.5rem;
  }

  p {
    margin-bottom: 2rem;
  }
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 0.5rem;

  li {
    display: inline-flex;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}

</style>
