<template>
    <div class="date-period">
        <datepicker />
    </div>
</template>

<script lang="ts">
import Datepicker from '@/components/UI/datepicker/Datepicker.vue'

    export default {
        components: {
            Datepicker
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.date-period {
    @include flexCol( flex-start, flex-start );
    height: 60%;
    width: 100%;
    margin-top: 3px;
}
</style>