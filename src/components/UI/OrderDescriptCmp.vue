<template>
    <div class="order-descript">
        <div class="order-descript-head">
            <span class="order-descript-head-price">
                {{ orderData.order_price }} &#8381; 
                /
                {{ orderData.order_period }} ч.
            </span>
            <div class="order-descript-head-info">
                <!-- <img src="@/assets/img/icon-info.svg" alt="I"> -->
            </div>
        </div>

        <div class="order-descript-adress">
            <text-section-cmp v-for="( field, fieldIndex) in txtSectData" 
                :key="fieldIndex"
                :name="field.name" 
                :size="textSizes[ fieldIndex ]"
                :textColors="textColors[ fieldIndex ]"
                :description="orderData[ field.description ]" />
        </div>

    </div>
</template>

<script lang="ts">
import { ref } from 'vue'

import TextSectionCmp from '../UI/TextSectionCmp.vue'
import { textSizes, textColors, txtSectData } from '@/assets/static/orderDescript'

    export default {

        components: {
            TextSectionCmp
        },

        props: {
            orderData: { type: Object, default: () => { return {} } }
        },

        setup() {

            return {
                txtSectData,
                textSizes,
                textColors
            }
        }
        
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.order-descript {
    @include flexCol( flex-start, center );
    height: 100%;
    width: 100%;

    &-head {
        @include flexRow( space-between, center );
        height: 25px;
        width: 95%;
        margin-top: 5px;

        &-price {
            @include font2( 14px );
            color: $main-color;
        }

        &-info {
            margin-top: 5px;
        }
    }

    &-adress {
        @include flexCol( flex-start, flex-start );
        height: calc( 100% - 44px );
        min-height: 115px;
        min-width: 100%;
        margin-top: 5px;
        overflow-y: scroll;
    }
}
</style>