<template>
  <header-cmp />
  <control-sect-cmp />
  <content-sect-cmp />
</template>

<script lang="ts">
import HeaderCmp from './components/headerSection/HeaderCmp.vue'
import ControlSectCmp from './components/controlSection/ControlSectCmp.vue'
import ContentSectCmp from './components/contentSection/ContentSectCmp.vue';

  export default {
    components: {
      HeaderCmp,
      ControlSectCmp,
      ContentSectCmp
    },
    
    setup() {

      return {

      }
    }
  }
</script>

<style lang="scss">
@import '~/src/assets/styles/custom.scss';
@import '~/src/assets/styles/datepicker.scss';
@import '~/src/assets/styles/main.css';

#app {
  @include flexCol( flex-start, center );
  height: 100vh;
  width: 100vw;
}
</style>
