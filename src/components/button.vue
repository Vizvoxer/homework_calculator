<template>
    <div class="c-button">
<button @click="setVal">
    <slot>
hi there
    </slot>
</button>
    </div>
</template>

<script>
    export default {
        methods:{
            setVal(e){
                this.$store.commit('setValue', e.target.innerText);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .c-button{
        width:25%;
    }
    button{
        width:100%;
        height:45px;
        border:none;
        outline:#fc3a4b;
        background-color: transparent;
        color:#fe386b;
        font-size:26px;
        &:hover{
            box-shadow:0 0 12px 3px rgba(20,20,20,0.6);
        }
        &:active{
            box-shadow:0 0 12px 3px rgba(20,20,20,0.4);
        }
    }
</style>
