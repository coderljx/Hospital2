import   { createStore } from "vuex"


export default createStore({
    // 声明变量
    state : {
        binren : {}, // 储存病患信息
    },
    // 修改变量（state不建议直接赋值修改，必须通过mutations）
    mutations: {
        // 参数一：state，参数二：新值
        Setbinren(state, newValue : object  ){
            if ( newValue != null)
            state.binren = newValue;
        },


    },
    // mutations的值由actions传入
    actions: {
        // 参数一：自带属性，参数二：新值
        setName(context, value){
            // 修改getname的值
            context.commit('SetUserInfo',value)
        },


    },
    modules: {},
});