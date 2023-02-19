<template>
    <div class="control">
        <div class="control-city-section">
            <select-cmp :selectName="selectCitySort.name" 
                    :selectFieldItem="selectCitySort.fieldData"
                    @emit-select-value="emitSelectValue" />
        </div>
        <div class="control-period-section"></div>
        <div class="control-map-section"></div>
    </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { deepClone } from '@/assets/utils/utils'
import { citySelectFilter } from '@/assets/utils/citySelectFilter'
import { selectSearch } from '@/assets/utils/orderSelectFilter'
import { selectCitySort } from '@/assets/static/controlCitySelect'
import SelectCmp from '../UI/SelectCmp.vue';

    export default {
        components: {
            SelectCmp
        },

        setup() {
            const store = useStore()

            const emitSelectValue = ( key: string, data: string ): void => {
                store.commit( 'resetAllOrders' )
                const sortedCityOrders = citySelectFilter( deepClone( store.getters.getAllOrders ), data )
                store.commit( 'setAllOrders', sortedCityOrders )
            }

            return {
                selectCitySort,
                emitSelectValue
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.control {
    @include flexRow( space-between, center );
    height: 45px;
    width: 100%;
    margin-top: 4px;
    padding: 0px 15px 0px 18px;
    border-bottom: $main-border1;

    &-city-section {
        height: 30px;
        width: calc( 100% / 3 - 20px );
        // background-color: #c44848;
    }

    &-period-section {
        height: 30px;
        width: calc( 100% / 3 - 20px );
        background-color: #a8b486;
    }

    &-map-section {
        height: 30px;
        width: calc( 100% / 3 - 20px );
        background-color: #8696b4;
    }
}
</style>