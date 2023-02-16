<template>
    <div class="map">
        <!-- <datepicker /> -->
    </div>
</template>

<script lang="ts">
// import Datepicker from '@/components/UI/datepicker/Datepicker.vue'

    export default {
        components: {
            // Datepicker
        }
        
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.map {
    @include flexRow( center, center );
    height: 98%;
    width: 39%;
    margin-top: 4px;
    border: $main-border1;
}
</style>