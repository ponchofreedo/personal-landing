<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<nav v-if="$route.name != 'cv'" :layout="$route.name">
    	<ul>
            <li>
                <RouterLink to="/" class=""><span>&lsquo;Sup.</span></RouterLink>
            </li>
            <!-- <li>
                <a href="https://github.com/ponchofreedo/portfolio-projects/" target="_blank">
                    <span>Works</span>
                </a>
            </li> -->
            <li>
                <RouterLink to="/about"><span>About</span></RouterLink>
            </li>
            <!-- <li>
                <RouterLink to="/cv"><span>CV</span></RouterLink>
            </li> -->
            <li>
                <a href="https://drive.google.com/file/d/1TXfsN4rRj39buzPWenTnIZ2tC2Zzx6Qk/view?usp=sharing" target="_blank"><span>R&eacute;sum&eacute;</span></a>
            </li>
        </ul>
        <ul>
            <li class="tag tag--availability">
                <icon type="icon" name="iconMegaphone" />
                <span>Available for hire</span>
            </li>
            <!-- <li><button>mode<icon type="icon" name="iconMoon" /></button></li> -->
        </ul>
    </nav>
    <nav v-else :layout="$route.name">
        <ul>
            <li>
                <RouterLink to="/" class=""><icon type="icon" name="iconArrowLeft" /><span>Back</span></RouterLink>
            </li>
        </ul>
        <!-- <ul>
            <li><button>mode<icon type="icon" name="iconMoon" /></button></li>
        </ul> -->
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
    }

    [layout="cv"] {
        margin-bottom: convertRem(40px);
        padding-top: convertRem(6px); /* optical placement to match while there's no mode switch button */
    }

    ul {
        display: inline-flex;
        align-items: center;
        list-style: none;
        gap: convertRem(24px);
        flex-wrap: wrap;
    }

    ul + ul {
        justify-content: flex-end;
    }

    li a {
        display: flex;
        gap: convertRem(4px);
        font-size: convertRem(24px);
        line-height: $text__line-height--fixed;
        color: $primary__color--text--darker;
        text-decoration: none;
    }

    nav:first-child li:first-child a {
        color: $primary__color--accent!important;
        font-weight: $text__font-weight--semibold;
    }

    [layout="cv"] a {
        font-weight: $text__font-weight--medium!important;
    }

    nav:first-child ul:first-child li a svg {
        height: convertRem(24px);
        width: auto;
        color: $primary__color--accent;
    }

    @media (max-width: 720px) {
        nav {
            flex-direction: column-reverse;
            align-items: flex-start;
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