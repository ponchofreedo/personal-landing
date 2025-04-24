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
                <RouterLink to="/works"><span>Works</span><icon type="icon" name="iconPackage" /></RouterLink>
            </li> -->
            <!-- <li>
                <RouterLink to="/about"><span>About</span><icon type="icon" name="iconPackage" /></RouterLink>
            </li> -->
            <li>
                <RouterLink to="/cv"><span>CV</span><icon type="icon" name="iconGradHat" /></RouterLink>
            </li>
            <li>
                <a href="https://1drv.ms/b/s!AiXwFLoNRqBCifMJqJtyZbbOOAROcA?e=INJVuT" target="_blank">
                    <span>Resume</span>
                    <icon type="icon" name="iconDownload" />
                </a>
            </li>
        </ul>
        <ul>
            <li class="tag tag--availability">
                <icon type="icon" name="iconMegaphone" />
                <span>Available for hire: FT</span>
            </li>
            <!-- <li><button>mode<icon type="icon" name="iconMoon" /></button></li> -->
        </ul>
    </nav>
    <nav v-else :layout="$route.name">
        <ul>
            <li>
                <RouterLink to="" v-on:click="$router.back()" class=""><icon type="icon" name="iconArrowLeft" /><span>Back</span></RouterLink>
            </li>
        </ul>
        <!-- <ul>
            <li><button>mode<icon type="icon" name="iconMoon" /></button></li>
        </ul> -->
    </nav>
</template>

<style scoped>
    nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 40px;
        margin-top: 2.5rem;
        line-height: unset;
    }

    [layout="cv"] {
        margin-bottom: 24px;
        margin-bottom: 1.5rem;
    }

    ul {
        display: inline-flex;
        align-items: center;
        list-style: none;
        gap: 24px;
        gap: 1.5rem;
        flex-wrap: wrap;
    }

    ul + ul {
        justify-content: flex-end;
    }

    li a {
        display: flex;
        gap: 4px;
        gap: 0.24rem;
        font-size: 24px;
        font-size: 1.5rem;
        line-height: var(--text__line-height--fixed);
        color: var(--base__color--neutral-50);
        text-decoration: none;
    }

    nav:first-child li:first-child a {
        color: var(--base__color--green-400)!important;
        font-weight: var(--text__font-weight--semibold);
    }

    [layout="cv"] a {
        font-weight: var(--text__font-weight--medium)!important;
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
        }
    }
</style>