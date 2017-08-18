<template>
    <div>
    <input inputmode="numeric" class="c-output" :value="result" readonly>
        <!--{{result}}-->
    </div>
</template>

<script>
    export default {
        computed:{
            result(){
                return this.$store.state.output
            }

        }

    }
</script>

<style lang="scss" scoped>
    .c-output{
        width:100%;
        height:100px;
        display:flex;
        border:none;
        justify-content: center;
        align-items:center;
        color:white;
        font-size:38px;
        background: #fe386b; /* Old browsers */
        background: -moz-linear-gradient(left, #fe386b 0%, #fc3a4b 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(left, #fe386b 0%,#fc3a4b 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to right, #fe386b 0%,#fc3a4b 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fe386b', endColorstr='#fc3a4b',GradientType=1 ); /* IE6-9 */
    }
</style>
