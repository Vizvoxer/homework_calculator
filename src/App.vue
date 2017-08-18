<template>
<div id="app">
    <v-calculator></v-calculator>
</div>
</template>

<script>
    import calculator from './components/calculator.vue'

    export default {
  name: 'app',
    components: {
      'v-calculator' : calculator,

    }

}
</script>

<style lang="scss">
    body{
     overflow:hidden;
        background-color: #3B3E5C;
        display:flex;
        justify-content:center;
    }

</style>
