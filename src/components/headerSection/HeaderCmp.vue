<template>
    <header class="header">
        <logo-cmp />
        <account-serv-cmp />
    </header>
</template>

<script lang="ts">
import LogoCmp from  '../UI/LogoCmp.vue'
import AccountServCmp from '../UI/AccountServCmp.vue';

    export default {

        components: {
            LogoCmp,
            AccountServCmp
        }
        
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.header {
    @include flexRow( space-between, center );
    height: 70px;
    width: 100%;
    background-color: $main-color;
}

</style>