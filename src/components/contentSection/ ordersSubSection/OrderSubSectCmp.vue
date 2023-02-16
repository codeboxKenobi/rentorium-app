<template>
    <div class="order">
        <div class="order-header-sort">
            <span class="order-header-sort-text">
                Локация : {{ city }}
            </span>
            <div class="order-header-sort-select">
                <select-cmp 
                    :selectName="selectDataSort.name" 
                    :selectFieldItem="selectDataSort.fieldData"
                    @emit-select-value="emitSelectValue"
                />
            </div>
        </div>
        <div class="order-section">
            <order-cmp v-for="( order, orderIndex ) in currentOrdersData" 
                :key="orderIndex" 
                :orderData="order"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { ref, reactive, computed } from 'vue'

import SelectCmp from '@/components/UI/SelectCmp.vue'
import OrderCmp from '@/components/UI/OrderCmp.vue'
import { selectDataSort } from '@/assets/static/orderSubSelect'
import { mockOrdersData } from '@/assets/mockData/mockOrders'

import { selectSearch } from '@/assets/utils/orderSelectFilter'

    export default {
        components: {
            SelectCmp,
            OrderCmp
        },

        setup() {
            let city = ref<string>( 'Ялта' )
            const tmpVal = ref( '' )
            const emitSelectValue = ( data: string ): void => {
                tmpVal.value = data
            }

            let currentOrdersData = computed(() => selectSearch( mockOrdersData, tmpVal.value ) )

            return {
                city,
                selectDataSort,
                mockOrdersData,
                currentOrdersData,
                emitSelectValue
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.order {
    @include flexCol( flex-start, center );
    height: 100%;
    width: 59%;
    margin-right: 10px;

    &-header-sort {
        @include flexRow( space-between, flex-start );
        max-height: 30px;
        width: 98%;
        margin-top: 10px;

        &-text {
            @include flexRow( flex-start, center );
            @include font2( 16px );
            height: 100%;
            color: $main-color;
        }

        &-select {
            @include flexRow( space-between, center );
        }
    }

    &-section {
        @include flexRow( space-between, flex-start );
        flex-wrap: wrap;
        overflow-y: scroll;
        height: 100%;
        width: 99%;
        margin: 4px 5px 2px 0px;
    }

    ::-webkit-scrollbar {
        width: 2px;
    }

    ::-webkit-scrollbar-thumb {
        width: 2x;
        background-color: $main-color
    }

}
</style>