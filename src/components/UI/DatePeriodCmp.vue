<template>
    <div class="date-wrapper">
        <div class="date-cmp"
            @click="bdatedField" >
            <span>{{ currentdateName }}</span>
        </div>
        <div class="date-cmp-options" v-if="dateField">
            <span class="date-cmp-options-field"
                v-for="( field, fieldIndex ) in Object.entries( dateFieldItem )" 
                    :key="fieldIndex"
                    @click="dateFieldElem( field[ 1 ], field[ 0 ]  )"> 
                    {{ field[ 1 ] }} 
            </span>
        </div>
    </div>
</template>

<script lang="ts"> 
import { ref, computed } from 'vue'

    export default {
        props: {
            dateName: { type: String, default: '' },
            dateFieldItem: { type: Object, default: () => { return {} } }
        },

        emits: [ 'emit-date-value' ],

        setup( props: any, { emit }: any ) {
            
            const dateSize = computed(() => props.dateName.split('').length )
            const dateField = ref<boolean>( false )
            const currentdateName = ref<string>( props.dateName )

            const bdatedField = (): void => {
                dateField.value = !dateField.value
            }

            const dateFieldElem = ( fieldName: string, fieldKey: string ): void => {
                currentdateName.value = fieldName
                emit( 'emit-date-value', fieldKey )
                bdatedField()
            }

            return {
                dateSize,
                dateField,
                currentdateName,
                bdatedField,
                dateFieldElem
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.date-wrapper {
    @include flexCol( flex-start, flex-start )
}

.date-cmp {
    @include flexRow( flex-start, center );
    @include font2( 12px );
    height: 30px;
    min-width: 100px;
    width: calc( 15px * v-bind( dateSize ));
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
        width: calc( 15px * v-bind( dateSize ) );
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