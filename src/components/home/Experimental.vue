<script setup lang="ts">
</script>

<template>
	<section id="fun-section">
        <main>
            <aside>
                <h2>Current keyboard.</h2>
                <small>Yes, I'm that kind of nerd.</small>
            </aside>
            <section>
                <article>
                    <div>
                        <em>Model</em>
                        <h3>Prototypist J-01 rev.1</h3>
                        <p>FR4 plate</p>
                    </div>
                    <div>
                        <em>Color</em>
                        <h3>Navy blue</h3>
                    </div>
                    <div>
                        <em>Switches</em>
                        <h3>Bolsa Supply Zaku</h3>
                        <p>TX film (0.125mm, black), 205g0</p>
                    </div>
                    <div>
                        <em>Stabilizers</em>
                        <h3>C3 Bushido</h3>
                        <p>205g0</p>
                    </div>
                    <div>
                        <em>Keycaps</em>
                        <h3>GMK Striker R2</h3>
                    </div>
                </article>
                <footer>
                    <p>See full details on <a href="https://ponchofreedo.notion.site/J-01-137b7761b90d4d8da36e184d5c9d697f" target="_blank" class="link link--inline">Notion<icon type="icon" name="iconArrowSquareUpRight" /></a></p>
                </footer>
            </section>
        </main>
    </section>
</template>

<style lang="scss" scoped>
    @use "sass:math";

    section {
        
        #fun-section {
        }

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
        width: 100%;
        @include split-column-layout-side(right);
    }

    article {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: convertRem(32px) convertRem(40px);

        div {
            display: flex;
            flex-direction: column;
            padding: 0;
            gap: convertRem(4px);
        }
    }

    em {
        @include text-style(p, bold, fixed);
        color: $primary__color--text--darker; 
    }

    h3 {
        color: $primary__color--text;
    }

    p {
        color: $primary__color--text--muted;
    }

    footer {
        display: flex;
        flex-direction: column;
        margin-top: convertRem(32px);

        p {
            color: $primary__color--text;
        }
    }

    footer p + p {
        margin-top: convertRem(16px);
    }

    @media (max-width: 720px) {
        h4 {
            margin-bottom: convertRem(24px);
        }

        article {
            padding: convertRem(32px) 0 convertRem(40px);
        }

        li:last-child {
            flex-basis: 100%;
            margin-top: convertRem(8px);
            margin-left: 0;

        }

        li:last-child::before {
            display: none;
            margin: 0;
        }
    }
</style>