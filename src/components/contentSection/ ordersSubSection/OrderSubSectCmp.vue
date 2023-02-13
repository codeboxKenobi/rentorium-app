<template>
    <order class="order">
        <div class="order-header-sort">
            <span class="order-header-sort-text">
                Локация : {{ city }}
            </span>
            <div class="order-header-sort-select">
                <select-cmp 
                    :selectName="selectDataSort.name" 
                    :selectFieldItem="selectDataSort.fieldData" 
                />
            </div>
        </div>
    </order>
</template>

<script lang="ts">
import { ref } from 'vue'
import SelectCmp from '@/components/UI/SelectCmp.vue'

import { selectDataSort } from '@/assets/static/orderSubSelect'

    interface SelectDta {
        name: string,
        fieldData: string[]
    }

    export default {
        components: {
            SelectCmp
        },

        setup() {
            let city = ref<string>( 'Ялта' )

            const selectData: SelectDta = {
                name: 'Select',
                fieldData: [
                    '',
                    '',
                    '',
                    ''
                ]
            }

            return {
                city,
                selectData,
                selectDataSort
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
    // border: $main-border1;

    &-header-sort {
        @include flexRow( space-between, flex-start );
        max-height: 32px;
        width: 98%;
        margin-top: 9px;

        &-text {
            @include flexRow( flex-start, center );
            @include font( 20px );
            height: 100%;
            color: $main-color;
        }

        &-select {
            @include flexRow( space-between, center );
        }
    }
}
</style>