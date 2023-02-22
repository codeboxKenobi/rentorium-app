<template>
    <div class="map">
        <!-- <datepicker /> -->
        <date-period-cmp />
    </div>
</template>

<script lang="ts">
// import Datepicker from '@/components/UI/datepicker/Datepicker.vue'
import DatePeriodCmp from '@/components/UI/DatePeriodCmp.vue';
    export default {
        components: {
            // Datepicker,
            DatePeriodCmp
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.map {
    @include flexCol( flex-start, center );
    height: 98%;
    width: 39%;
    margin-top: 4px;
    // border: $main-border1;
}
</style>