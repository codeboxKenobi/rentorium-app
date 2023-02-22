<template>
    <button :class="[ loading ? 'load-class' : 'button-cmp' ]" 
        type="button"
        @click="clickHandler" >
        {{ loading ? '' : btnName }}
        <spinner-cmp v-if="loading" />
    </button>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
import SpinnerCmp from './SpinnerCmp.vue'

export default {
    props: {
        loading: { type: Boolean, default: false },
        btnName: { type: String, default: 'Btn' }
    },

    emits: [ 'click-handler' ],

    components: {
        SpinnerCmp
    },

    setup( props: any, { emit }: any ) {
        const loading = computed(() => props.loading )
        const buttonSize = ref( props.btnName.split('').length )
        
        const clickHandler = (): void => {
            emit( 'click-handler' )
        }

        return {
            loading,
            buttonSize,
            clickHandler,
        }
    }
}

</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.button-cmp {
    @include flexRow( center, center );
    @include font2( 11px );
    height: 30px;
    margin: 0px 4px;
    padding: 4px 0px;
    width: calc( 10px * v-bind( buttonSize ) );
    border: $main-border1;
    border-radius: $main-border-radius;
    outline: none;
    color: $main-color;
    cursor: pointer;

    &:hover {
        border: $main-border1-hover;
        color: $main-color;
    }
}

.load-class {
    @include btn( v-bind( buttonSize ) )
}
</style>