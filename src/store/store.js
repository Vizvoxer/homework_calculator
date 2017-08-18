import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        output: 0,
        operation: ""
    },
    mutations:{
        setValue(state, v){
            if(state.output !== 0) {
                state.output += v;
            } else{
                state.output = v;
            }
        },
        clearValue(state){
            state.output = 0;
        },
        setOperation(state,o){
            var reg = /[\+\-\/\*]$/;
            state.operation = o;
            if(reg.test(state.output)){
                var arr = state.output.split("");
                arr.splice(-1,1,o);
                state.output = arr.join("");
            } else {
                state.output += state.operation;
            }
        },
        getResult(state){
            if(state.output.length > 2 && state.output.length <15) {
                var result = eval(state.output);
                isNaN( Number(result)) ? state.output = 'Infinity' : state.output = result;

            } else{
                state.output = "Incorrect value";
                setTimeout(function(){
                    state.output = "";
                },2000)
            }
        }
    }

});

