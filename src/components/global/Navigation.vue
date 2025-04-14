<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<nav :layout="$route.name">
    	<ul>
            <li>
                <RouterLink to="/" class=""><span>'Sup.</span></RouterLink>
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
            <li><icon type="icon" name="iconMegaphone" />Available for hire: FT</li>
            <li><button>mode<icon type="icon" name="iconMoon" /></button></li>
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
        list-style: none;
    }

    ul + ul {
        justify-content: flex-end;
    }

    a {
        line-height: var(--text__line-height--fixed);
    }

    svg {
        height: 1.5rem;
        width: auto;
    }

    [class*="router"]:not(:first-of-type) {
        color: red;
    }
</style>