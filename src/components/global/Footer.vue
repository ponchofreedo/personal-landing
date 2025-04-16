<script setup lang="ts">
    import { ref } from 'vue'
</script>

<script lang="ts">
    // this will render a random catchphrase in the footer next to the copyright. later, come back and add the hover interaction to show a gif in the background similar to how Mattan does his. 
    export default {
        data() {
            return {
                catchphrases: ref([
                    { who: 'Stone Cold Steve Austin', phrase: 'Gimme a Hell Yeah!' },
                    { who: 'Stone Cold Steve Austin', phrase: 'What?' },
                    { who: 'Stone Cold Steve Austin', phrase: 'And that\'s the bottom line...' },
                    { who: 'Mick Foley', phrase: 'Have a nice day!' },
                    { who: 'Cactus Jack', phrase: 'Bang Bang!' },
                    { who: 'Dude Love', phrase: 'Oooooow have mercy!' },
                    { who: 'Booker T', phrase: 'Can you dig it, sucka?' },
                    { who: 'Bret Hart', phrase: 'The best there is...' },
                    { who: 'Chris Jericho', phrase: 'You just made the list!' },
                    { who: 'DX', phrase: 'If you\'re not down with that...' },
                    { who: 'DX', phrase: '...we got TWO WORDS for ya!' },
                    { who: 'Hacksaw Jim Duggan', phrase: 'HOOOOOOOOOO!' },
                    { who: 'Kurt Angle', phrase: 'It\'s true...it\'s damn true.' },
                    { who: 'NWO', phrase: 'NWO for life.' },
                    { who: 'Road Dogg', phrase: 'Oh, you did\'t know?' },
                    { who: 'Ric Flair', phrase: 'WOOOOOOOOOOOOOO!' },
                    { who: 'Macho Man Randy Savage', phrase: 'OHHHHH YEAAAAAAAAH!' },
                    { who: 'The Rock', phrase: 'Know your role...' },
                    { who: 'The Rock', phrase: 'Finally...' },
                    { who: 'The Rock', phrase: 'If you smelllllLlLlLlLlL...' },
                    { who: 'Ron Simmons', phrase: 'DAMN!' },
                    { who: 'Dudley Boyz', phrase: 'GET THE TABLES!' },
                    { who: 'Teddy Long', phrase: 'Holla, holla holla!' }
                ]),
                randomCatchphrase: '',
                randomWrestler: '',
            };
        },
        mounted() {
            this.getRandomCatchphrase();
        },
        methods: {
            getRandomCatchphrase() {
                if (this.catchphrases.length > 0) {
                    const randomIndex = Math.floor(Math.random() * this.catchphrases.length);
                    this.randomWrestler = this.catchphrases[randomIndex].who;
                    this.randomCatchphrase = this.catchphrases[randomIndex].phrase;
                }
            }
        }
    };
</script>

<template>
	<footer v-if="$route.name === 'home'" :layout="$route.name">
        <article>
            <section>
                <b>Colophon.</b>
                <p>This site is meant to be a playground for experimentation. Designed in <a href="https://figma.com" target="_blank">Figma</a>, built with <a href="https://vuejs.org" target="_blank">Vue</a>, authored in <a href="https://sublimetext.com" target="_blank">Sublime Text</a> (yes, I'm a VS Code holdout...for now), and shipped with <a href="https://vercel.com" target="_blank">Vercel</a>. Type set in <a href="https://pangrampangram.com/products/neue-montreal" target="_blank">Neue Montreal</a> by Mats Desjardins from <a href="https://pangrampangram.com/" target="_blank">Pangram Pangram Foundry</a>. Built with controlled chaos and my take on Thomas Keller's <a href="https://youtube.com/watch?v=Bt8YgEr-9is" target="_blank">roast chicken</a> recipe. Also built with <a href="https://instagram.com/obi_dog__kenobi_/" target="_blank">my dog</a> at my feet.</p>
            </section>
            <section>
                <a id="anchor" href="#app">
                    <icon type="icon" name="iconArrowSquareUp" />
                </a>
                <p>&copy; 2025 Zach Freed &mdash; <span>{{ randomCatchphrase }}</span></p>
            </section>
        </article>
    </footer>
    <footer v-else-if="$route.name === 'cv'">
        This should only show in the CV view
    </footer>
</template>

<style scoped>
    h1 {
        font-weight: var(--text__font-weight--medium);
    }

    article {
        display: flex;
        flex-direction: row;
        gap: 40px;
        gap: 2.5rem;
        margin-top: 24px;
        margin-top: 1.25rem;
    }

    article section {
        display: inherit;
        flex-direction: column;
        flex-basis: 50%;
        gap: 8px;
        gap: 0.5rem;
    }

    article section+section {
        align-self: flex-end;
        justify-content: right;
        text-align: right;
    }

    b,
    p {
        font-size: 14px;
        font-size: calc((14/16) * 1rem);
    }

    a {
        font-weight: var(--text__font-weight--medium);
    }

    b,
    p,
    a { 
        color: var(--base__color--green-700)
    }

    #anchor {
        width: fit-content;
        align-self: flex-end;
    }

    #anchor svg {
        height: 24px;
        height: 1.5rem;
        width: auto;
    }

    @media (max-width: 720px) {
        article {
            flex-direction: column;
            gap: 40px;
            gap: 2.5rem;
        }

        article section {
            display: inherit;
            flex-direction: inherit;
        }

        article section+section {
            flex-direction: column-reverse;
            align-self: flex-start;
            justify-content: flex-start;
            text-align: left;
        }

        #anchor {
            align-self: flex-start;
        }
    }
</style>