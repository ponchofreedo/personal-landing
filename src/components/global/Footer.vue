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
            },
            scrollToTop() {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    };
</script>

<template>
	<footer id="footer" v-if="$route.name === 'home'" :layout="$route.name">
        <main>
            <aside>
                <b>Colophon.</b>
                <p>This site is meant to be a playground for experimentation. Designed in <a href="https://figma.com" target="_blank">Figma</a>, built with <a href="https://vuejs.org" target="_blank">Vue</a>, authored in <a href="https://sublimetext.com" target="_blank">Sublime Text</a> (yes, I'm a VS Code holdout...for now), and shipped with <a href="https://vercel.com" target="_blank">Vercel</a>. Type set in <a href="https://pangrampangram.com/products/neue-montreal" target="_blank">Neue Montreal</a> by Mats Desjardins from <a href="https://pangrampangram.com/" target="_blank">Pangram Pangram Foundry</a>. Built with controlled chaos and my take on Thomas Keller's <a href="https://youtube.com/watch?v=Bt8YgEr-9is" target="_blank">roast chicken</a> recipe. Also built with <a href="https://instagram.com/obi_dog__kenobi_/" target="_blank">my dog</a> at my feet.</p>
            </aside>
            <section>
                <RouterLink to="" v-on:click.native="scrollToTop()" id="anchor">
                    <icon type="icon" name="iconArrowSquareUp" />
                </RouterLink>
                <p>&copy; 2025 Zach Freed &mdash; <span>{{ randomCatchphrase }}</span></p>
            </section>
        </main>
    </footer>
    <footer id="footer" v-else :layout="$route.name">
        <article>
            <ul>
                <li id="anchor">
                    <RouterLink to="" v-on:click.native="scrollToTop()">
                        <icon type="icon" name="iconArrowSquareUp" />
                    </RouterLink>
                </li>
                <li>
                    <a href="https://linkedin.com/in/zpfreed" target="_blank">
                        <icon type="svg" name="brandLinkedIn" />
                    </a>
                </li>
                <li>
                    <a href="https://figma.com/@ponchofreedo" target="_blank">
                        <icon type="svg" name="brandFigmaOutlined" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/ponchofreedo" target="_blank">
                        <icon type="svg" name="brandGithub" />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com/ponchofreedo" target="_blank">
                        <icon type="svg" name="brandInstagram" />
                    </a>
                </li>
            </ul>
            <p>&copy; 2025 Zach Freed &mdash; <span>{{ randomCatchphrase }}</span></p>
        </article>
    </footer>
</template>

<style lang="scss" scoped>
    
    footer {
        font-size: convertRem(14px);
        color: $primary__color--text--darker;

        &:not([layout="home"]) {
            margin: convertRem(40px) 0!important;
        }

        p {
            margin-top: convertRem(8px);
            font-size: inherit;
            line-height: $text__line-height--ui;
        }

        a {
            color: inherit;
            @include text-style(inherit, medium, inherit);
        }
    }

    footer {

        main {
            @include split-column-layout-container;
        }
    }

    aside {
        @include split-column-layout-side(left);
    }

    section {
        @include split-column-layout-side(right);
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: convertRem(16px);
        padding-left: convertRem(20px);
        align-items: flex-end;
        align-self: flex-end;
    }

    article {
        display: flex;
        flex-direction: row;
        gap: convertRem(8px);

        &:not([layout="home"]) {
            align-items: center;
            justify-content: space-between;
        }

        p {
            margin-top: 0;
        }
    }

    ul {
        display: flex;
        gap: convertRem(32px);
        list-style: none;
    }

    li {
        display: inline-flex;
        height: fit-content;
        width: fit-content;
        vertical-align: baseline;
        align-self: center;
        color: $primary__color--accent;

        svg {
            height: convertRem(24px);
            width: auto;
            color: currentColor;
        }

        &#anchor {
            align-self: flex-end;

            svg {
                height: convertRem(32px);
            }
        }
    }


</style>