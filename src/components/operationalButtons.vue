<template>
    <div class="c-buttons">
        <button @click="clear">AC</button>
        <div class="delegator" @click="setOperation">
            <button>+</button>
             <button>-</button>
            <button>*</button>
            <button>/ </button>
        </div>
        <button @click="getCalculation">=</button>
    </div>
</template>

<script>
    export default {
        methods:{
            clear(){
                this.$store.commit("clearValue");
            },
            setOperation(e){
                if(e.target.innerText.length ===1) {
                    this.$store.commit('setOperation', e.target.innerText);
                }
            },
            getCalculation(){
                this.$store.commit('getResult');
            }
        }
    }
</script>

<style lang="scss">
    .c-buttons{
        width:32%;
        height:325px;
        position:absolute;
        right:0;
        bottom:0;
        background-color: #2B2D41;
        display:flex;
        justify-content:center;
        flex-wrap:wrap;
        padding-bottom:30px;

    }
    button{
        width:100%;
        height:45px;
        border:none;
        outline:#fc3a4b;
        background-color: transparent;
        color:white;
        font-size:26px;
        &:hover{
            box-shadow:0 0 12px 3px rgba(20,20,20,0.6);
        }
        &:active{
            box-shadow:0 0 12px 3px rgba(20,20,20,0.4);
            background-color: rgba(252,252,252,0.3);
        }
    }
</style>
