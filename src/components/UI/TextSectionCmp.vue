<template>
    <div class="text-section">
        <span class="text-section-field">
            {{ name }} : {{ description }}
        </span>
    </div>
</template>

<script lang="ts">

    export default {
        props: {
            name: { type: String, default: 'name' },
            description: { type: [ String, Number ], default: 'description' },
            size: { type: String, default: '12px' },
            textColors: { type: String, default: '$main-hover' }
        },

        setup() {
            
            return {
                
            }
        }
        
    }

</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.text-section {
    @include flexRow( flex-start, flex-start );
    min-height: 30px;
    width: 100%;
    margin: 5px 0px;

    &-field {
        @include flexRow( flex-start, flex-start );
        @include font2( v-bind( size ) );
        word-break: break-word;
        max-width: 100%;
        margin: 0px 10px;
        padding: 4px 0px;
        border-bottom: $main-border1;
        color: v-bind( textColors );

        @media screen and ( max-width: 1440px ) {
            @include font2( 12px );
        }
    }
}
</style>