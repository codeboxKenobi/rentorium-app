<template>
    <a class="logo-ref" href="/">
        <div class="logo">
            <img class="logo-home" src="@/assets/img/home-logo.svg" alt="">
            <span class="logo-text">рент</span>
            <img class="logo-mag-glass" src="@/assets/img/mag-glass.svg" alt="">
        </div>
    </a>
</template>

<script lang="ts">
    export default {}
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.logo-ref {
    @include flexRow( center, center );
    height: 100%;
    width: auto;
    // max-width: 180px;
    text-decoration: none;
}
.logo {
    @include flexRow( center, center );
    height: 100%;
    width: 120px;

    &-text {
        @include font2( 16px );
        color: $main-white;
    }

    &-mag-glass {
        margin-top: 6px;
        margin-left: 1px;
    }
}
</style>