<template>
    <a class="logo-ref" href="/">
        <div class="logo">
            <img class="logo-home" src="@/assets/img/home-logo.svg" alt="">
            <span class="logo-text">Рентo</span>
            <!-- <img class="logo-mag-glass" src="@/assets/img/mag-glass.svg" alt=""> -->
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
    // width: 120px;
    margin-left: 15px;

    &-text {
        @include flexRow( center, flex-end );
        @include font2( 1.1rem );
        color: $main-white;
        font-weight: bold;
        letter-spacing: 0.1rem;
        margin: 6px 1px 0px 1px;
    }

    &-mag-glass {
        @include flexRow( center, flex-end );
        margin-top: 12px; 
        // margin-left: 1px;
    }
}
</style>