<template>
    <order class="map">

    </order>
</template>

<script lang="ts">
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.map {
    @include flexRow( flex-start, center );
    height: 98%;
    width: 39%;
    margin-top: 4px;
    border: $main-border1;
}
</style>