<template>
    <div class="account">
        <span class="account-user-name">
            mihail.pisarev@gmail.com
        </span>
        <img class="account-button" 
            src="@/assets/img/account-icon.svg" 
            alt="Вoйти"
            @click="clickHandler"
        >
    </div>
    <div class="account-menu" 
        v-if="accountMenu"
        ref="target"
        on-click-outside="closeMenu"
    >
        <span class="account-menu-item"
            v-for="( field, fieldIndex) in menuFieldData" 
            :key="fieldIndex"
            @click="menuItemHandler( field )"
        >
            {{ field }}
        </span>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { menuFieldData } from '@/assets/static/accountMenu'

    export default {

        emits: [ 'click-handler', 'menu-item-handler' ],

        setup( props: any, { emit }: any ) {
            const accountMenu = ref( false )
            const target = ref(null)

            onClickOutside( target, (event) => closeMenu())

            const clickHandler = (): void => {
                accountMenu.value = !accountMenu.value
                emit( 'click-handler' )
            }

            const closeMenu = (): void => {
                accountMenu.value = false
            }
            
            const menuItemHandler = ( data: string ): void => {
                emit( 'menu-item-handler', data  )
                closeMenu()
            }

            return {
                accountMenu,
                target,
                menuFieldData,
                clickHandler,
                closeMenu,
                menuItemHandler,
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.account {
    @include flexRow( space-between, center );
    height: 100%;
    margin: 0px 15px;

    &-user-name {
        @include flexRow( center, center );
        @include font2( 13px );
        height: 30px;
        width: auto;
        margin: 0px 15px;
        padding: 0px 10px;
        color: $main-white;
        border: $main-border1;
        border-radius: $main-border-radius;

        @media screen and ( max-width: 440px ) {
            display: none;
        }
    }
}

.account-menu {
    @include flexCol( flex-start, flex-start );
    position: absolute;
    top: 70px;
    right: 0;
    height: auto;
    width: 200px;
    border: $main-border1;
    border-radius: 0px 0px 0px 4px;
    background-color: $main-white;

    &-item {
        @include flexRow( flex-start, center );
        @include font2( 12px );
        color: $main-color;
        min-height: 30px;
        width: calc( 100% - 10px );
        padding: 0px 10px;

        &:hover {
            background-color: $main-color;
            color: $main-white;
            border-radius: 0px 4px 4px 0px;
        }
    }
}
</style>