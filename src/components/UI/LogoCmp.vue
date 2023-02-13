<template>
    <logo class="logo">
        <img class="logo-home" src="@/assets/img/home-logo.svg" alt="">
        <span class="logo-text">rent</span>
        <img class="logo-mag-glass" src="@/assets/img/mag-glass.svg" alt="">
        <span class="logo-text">rium</span>
    </logo>
</template>

<script lang="ts">
    export default {}
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.logo {
    @include flexRow( center, center );
    height: 100%;
    width: 180px;

    &-text {
        @include font( 16px );
        color: $main-white;
    }

    &-mag-glass {
        margin-top: 5px;
        margin-left: 2px;
    }
}
</style>