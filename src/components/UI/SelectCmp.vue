<template>
    <div class="select-wrapper">
        <div class="select-cmp"
            @click="bSelectedField" >
            <span>{{ currentSelectName }}</span>
        </div>
        <div class="select-cmp-options" v-if="selectField">
            <span class="select-cmp-options-field"
                v-for="( field, fieldIndex ) in Object.entries( selectFieldItem )" 
                    :key="fieldIndex"
                    @click="selectFieldElem( field[ 1 ], field[ 0 ]  )"> 
                    {{ field[ 1 ] }} 
            </span>
        </div>
    </div>
</template>

<script lang="ts"> 
import { ref, computed } from 'vue'

    export default {
        props: {
            selectName: { type: String, default: '' },
            selectFieldItem: { type: Object, default: () => { return {} } }
        },

        emits: [ 'emit-select-value' ],

        setup( props: any, { emit }: any ) {
            
            const selectSize = computed(() => props.selectName.split('').length )
            const selectField = ref<boolean>( false )
            const currentSelectName = ref<string>( props.selectName )

            const bSelectedField = (): void => {
                selectField.value = !selectField.value
            }

            const selectFieldElem = ( fieldName: string, fieldKey: string ): void => {
                currentSelectName.value = fieldName
                emit( 'emit-select-value', fieldKey )
                bSelectedField()
            }

            return {
                selectSize,
                selectField,
                currentSelectName,
                bSelectedField,
                selectFieldElem
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.select-wrapper {
    @include flexCol( flex-start, flex-start )
}

.select-cmp {
    @include flexRow( flex-start, center );
    @include font2( 12px );
    height: 30px;
    min-width: 100px;
    width: calc( 15px * v-bind( selectSize ));
    padding: 0px 10px;
    margin: 0px 4px;
    border: $main-border1;
    border-radius: $main-border-radius;
    outline: none;
    color: $main-color;
    // background-color: $main-white;
    cursor: pointer;

    &:hover {
        border: $main-border1-hover;
    }

    &-options {
        @include flexCol( flex-start, flex-start );
        overflow-y: scroll;
        max-height: 300px;
        z-index: 20;
        min-width: 120px;
        width: calc( 15px * v-bind( selectSize ) );
        margin: 2px 4px;
        border: $main-border1;
        border-radius: $main-border-radius;
        outline: none;
        color: $main-color;
        background-color: $main-white;
        cursor: pointer;

        &:hover {
                // background-color: $main-hover;
                // color: $main-white;
                border: $main-border1-hover;
            }

        &-field {
            @include flexRow( flex-start, center );
            @include font2( 12px );
            min-height: 30px;
            width: calc( 100% - 10px );
            padding: 0px 10px;
            margin: 0px 0px;
            outline: none;
            color: $main-color;


            &:hover {
                background-color: $main-color;
                color: $main-white;
                border-radius: 0px 4px 4px 0px;
            }
        }
    }
}
</style>