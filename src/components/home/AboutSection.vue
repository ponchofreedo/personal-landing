<script setup lang="ts">
  import { ref } from 'vue'

  const facts = ref([
    { id: 1, content: 'Hardcore Star Wars nerd.' },
    { id: 2, content: 'Casual maker of tasty things.' },
    { id: 3, content: 'Liker of all furry and fluffy four-legged friends.' },
    { id: 4, content: 'Occasionally I still get to grapple and play lacrosse.' }
  ])

  const links = ref([
    { id: 1, name: 'Klaviyo', href: 'https://www.klaviyo.com', location: '_blank', hasBrand: 'true'},
    { id: 2, name: 'Order', href: 'https://www.order.co', location: '_blank', hasBrand: 'true'},
    { id: 3, name: 'Tentrr', href: 'https://www.instagram.com/tentrr', location: '_blank', hasBrand: 'true'},
    { id: 4, name: 'Priceline', href: 'https://www.priceline.com', location: '_blank', hasBrand: 'true'},
    { id: 5, name: 'DigitalSurgeons', href: 'https://www.digitalsurgeons.com', location: '_blank', hasBrand: 'true'}
  ])
</script>

<template>
  <aside class="container--tight left">
    <h2 class="section__title">About.</h2>
  </aside>
  <main class="container--simple right">
    <article class="facts__container">
      <ul>
        <li v-for="fact in facts" :content="fact.content">
          <em :class="{ 'emphasis': fact.id === 1 }">{{ fact.content }}</em>
        </li>
      </ul>
    </article>
    <article>
      <p class="text--as-h3">I would call myself a reformed graphic and web designer who now practices UX and product design with a healthy dose of advocating for better designer-developer relations. For the past 10+ years I’ve been learning and applying my hybrid mindset to teams and building great products that solve complex problems with less friction in the process.</p>
      <section class="facts__container--split">
        <p class="text--as-h3">With a more pragmatic approach, I enjoy crafting systems and breaking larger epics into bite-sized stories. Trying so solve puzzles; that’s what drives me to want to learn and improve. Whether it's starting a design systems initiative, forming a cross-functional guild, or mentoring more junior designers, I've really come to appreciate this field and all the avenues it affords. It makes the mission of building empathy and achieving balance between user and business needs that much more exciting.</p>
        <figure>
          <div>
            <img class="it-me" src="@img/it-me.png" />
            <img class="it-obi" src="@img/it-obi.png" />
          </div>
          <small>These will never not be the best photos I’ve ever taken or had taken.</small>
        </figure>
      </section>
      <p class="text--as-h3">I have experience helping startup teams achieve success and growth, maturing growth-stage teams by building more lucrative experiences, and iterating in the fast-paced environments of mature and public teams. No matter the scene, it all boils down to finding ways to <b>raise the value of design</b> and <b>advocate for the right solutions at the right time</b>.</p>
      <p class="text--as-h3">When I'm not at my keyboard, which is some weeks not often enough, I like to trade it for a kitchen knife, lacrosse stick, or a soldering iron. If one of those isn't available, then the leash for my lovable rascal of a rescue dog, Obi (short for Obi-Dog Kenobi), is most definitely available.</p>
    </article>
  </main>
</template>

<style scoped>
  article {
    display: flex;
    flex-direction: column;
    padding-bottom: 2.5rem;
  }

  article + article,
  p + p {
    margin-top: 2.5rem;
  }

  article section {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .facts__container {
    border-bottom: 0.125rem solid var(--base__color--gray-3);
  }

  .facts__container--split {
    display: grid;
    grid-template-columns: 1fr 1fr;
    -moz-column-gap: calc((var(--base__font-size) * 2.5) * 1px);
    -moz-column-gap: calc((var(--base__font-size) * 2.5) / var(--base__font-size) * 1rem);
    column-gap: calc((var(--base__font-size) * 2.5) * 1px);
    column-gap: calc((var(--base__font-size) * 2.5) / var(--base__font-size) * 1rem);
  }

  @media (min-width: 100rem) {
    .facts__container--split {
      grid-template-columns: 1fr auto;
      -moz-column-gap: calc((var(--base__font-size) * 4) * 1px);
      -moz-column-gap: calc((var(--base__font-size) * 4) / var(--base__font-size) * 1rem);
      column-gap: calc((var(--base__font-size) * 4) * 1px);
      column-gap: calc((var(--base__font-size) * 4) / var(--base__font-size) * 1rem);
    }
  }

  .facts__container--split p {
    justify-self: flex-start;
  }

  .facts__container--split figure {
    justify-self: center;
    align-content: space-around;
  }

  figure div {
    position: relative;
    margin-bottom: 1rem;
  }

  .it-me {
    height: 25rem;
    width: 25rem;
  }

  .it-obi {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
    outline-style: solid;
    outline-width: 1rem;
    outline-color: white;
  }

  small {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
</style>