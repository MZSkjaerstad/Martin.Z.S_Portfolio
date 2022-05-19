<template>
    <Header :headerData="headerData" />
    <RouterView />
    <Footer />
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import appMixin from '../mixins/appMixin.js'
import query from '../groq/header.groq?raw'

export default {
    components: {
        Header,
        Footer
    },
    mixins: [appMixin],

    created () {
        this.sanityFetch(query)
    }
}
</script>

<style>
    @import '../style/reset.css';
    @import '../style/fonts.css';
    @import '../style/variables.css';
    @import '../style/style.css';
</style>