<template>
    <div class="app">
        <v-output></v-output>
        <v-buttons></v-buttons>
        <v-operations></v-operations>
    </div>
</template>

<script>
    import buttons from './buttons.vue'
    import operations from './operationalButtons.vue'
    import output from './output.vue'
    import Vue from 'vue'
    export default {
        name: 'app',
        components: {
            'v-buttons' : buttons,
            'v-operations': operations,
            'v-output': output
        }

    }
</script>

<style lang="scss">
    #app{
        width:338px;
        box-shadow:0 0 12px 3px rgba(20,20,20,0.6);
        display:flex;
        flex-wrap:wrap;
        position:relative;

    }
</style>
