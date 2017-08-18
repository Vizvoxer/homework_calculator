<template>
    <div class="c-button">
        <c-button v-for="index in buttons"> {{index}} </c-button>
    </div>
</template>

<script>
    import button from './button.vue'
    export default {
        data: function(){
            return{
                buttons: [1,2,3,4,5,6,7,8,9,0,"."]
            }
        },
        components: {
            'c-button': button
        },

    }
</script>

<style lang="scss" scoped>
    .c-button{
      display:flex;
        width:65%;
        flex-wrap:wrap;
        justify-content:space-around;
        align-items:center;
        padding:5px;
        background-color: #2B2D41;
        padding-bottom:30px;
    }
</style>
