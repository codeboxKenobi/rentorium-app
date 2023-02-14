<template>
    <div class="order-item">
        <div class="order-item-image">
            <img class="order-item-image-el" 
                src="@/assets/img/mockImage/home-img.jpg" 
                alt="Фoтo"
            >
        </div>
        <div class="order-item-description">
            <order-descript-cmp :orderData="orderData" />
        </div>

        <div class="order-item-description-buttons">
            <button-cmp :loading="false" btnName="Подробнее" />
        </div>
    </div>
</template>

<script lang="ts">
import OrderDescriptCmp from './OrderDescriptCmp.vue';
import ButtonCmp from './ButtonCmp.vue';

    export default {
        components: {
            OrderDescriptCmp,
            ButtonCmp
        },

        props: {
            orderData: { tupe: Object, default: () => { return {} } }
        },
        
        setup() {

            return {
                
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.order-item {
    @include flexCol( space-between, center );
    height: 400px;
    min-width: 31%;
    max-width: 220px;
    margin: 10px 5px;
    border: $main-border1;
    border-radius: $main-border-radius;
    box-shadow: $main-shadow;

    @media screen and ( max-width: 1280px ) {
        width: 100%;
        max-width: 100%;
    }

    &-image {
        @include flexCol( flex-start, center );
        height: 45%;
        width: 100%;
        
        &-el {
            height: 100%;
            width: 100%;
            background-size: 20%;
            background-repeat: no-repeat;
        }
    }

    &-description {
        @include flexRow( space-between, center );
        min-height: 44.5%;
        width: 100%;
        border-top: $main-border1;

        &-buttons {
            @include flexRow( flex-end, center );
            min-height: 30px;
            width: 95%;
            margin-bottom: 10px;
        }
    }
}
</style>