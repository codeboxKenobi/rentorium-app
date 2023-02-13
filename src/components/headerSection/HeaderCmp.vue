<template>
    <header class="header">
        <logo-cmp />
    </header>
</template>

<script lang="ts">
import LogoCmp from  '../UI/LogoCmp.vue'

    export default {

        components: {
            LogoCmp
        }
        
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.header {
    height: 70px;
    width: 100%;
    background-color: $main-color;
}

</style>