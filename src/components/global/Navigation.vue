<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<nav :layout="$route.name">
    	<ul>
            <li>
                <RouterLink to="/" class=""><span>&lsquo;Sup.</span></RouterLink>
            </li>
            <li>
                <a href="https://github.com/ponchofreedo/portfolio-projects" target="_blank">
                    <span>Works</span>
                    <icon type="icon" name="iconArrowSquareUpRight" />
                </a>
            </li>
            <!-- <li>
                <RouterLink to="/works"><span>About</span><icon type="icon" name="iconArrowSquareUpRight" /></RouterLink>
            </li>
            <li>
                <RouterLink to="/cv"><span>CV</span><icon type="icon" name="iconArrowSquareUpRight" /></RouterLink>
            </li> -->
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

    ul {
        display: inline-flex;
        align-items: center;
        list-style: none;
        gap: 24px;
        gap: 1.5rem;
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
</style>