<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<nav v-if="$route.name != 'cv'" :layout="$route.name">
    	<ul>
            <li>
                <RouterLink to="/" class=""><span>&lsquo;Sup.</span></RouterLink>
            </li>
            <li>
                <a href="https://github.com/ponchofreedo/portfolio-projects/" target="_blank">
                    <span>Works</span><icon type="icon" name="iconArrowSquareUpRight" />
                </a>
            </li>
            <!-- <li>
                <RouterLink to="/about"><span>About</span><icon type="icon" name="iconPackage" /></RouterLink>
            </li> -->
            <li>
                <RouterLink to="/cv">
                    <span>CV</span>
                    <icon type="icon" name="iconArrowSquareUpRight" />
                </RouterLink>
            </li>
            <!-- <li>
                <a href="https://1drv.ms/b/s!AiXwFLoNRqBCifMJqJtyZbbOOAROcA?e=INJVuT" target="_blank">
                    <span>Resume</span>
                    <icon type="icon" name="iconDownload" />
                </a>
            </li> -->
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
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: convertRem(40px);
        line-height: unset;
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
        height: 24px;
        height: 1.5rem;
        width: auto;
        color: var(--base__color--green-400);
    }

    @media (max-width: 720px) {
        nav {
            flex-direction: column-reverse;
            align-items: flex-start;
            margin-top: 24px;
            margin-top: 1.5rem;
            gap: 16px;
            gap: 1rem;
        }
    }

    @media (max-width: 500px) {
        ul {
            gap: 16px 24px;
            gap: 1rem 1.5rem;
        }

        ul:first-of-type li:first-child {
            flex-basis: 100%;
            order: -999; /* override order to guarantee it stays on top */
        }
    }
</style>