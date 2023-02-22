<template>
    <div class="content">
        <order-sub-sect-cmp />
        <!-- <map-sub-sect-cmp /> -->
    </div>
</template>

<script lang="ts">
import OrderSubSectCmp from './ ordersSubSection/OrderSubSectCmp.vue';
import MapSubSectCmp from '../contentSection/mapSubSection/MapSubSectCmp.vue'

    export default {
        components: {
            OrderSubSectCmp,
            MapSubSectCmp
        }
    }

</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.content {
    @include flexRow( center, center );
    height: calc( 100vh - 125px );
    width: 100%;
    margin-top: 4px;
}
</style>