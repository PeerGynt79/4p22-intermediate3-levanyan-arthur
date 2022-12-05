import {createSlice} from '@reduxjs/toolkit';

export const xbasketSlice = createSlice({
    name: 'xbasket',
    initialState:[],
    reducers:{
        initXBasket: (state, {payload})=>{
        for (let index = 0; index < payload; index++) {
            state[index]=0;
            localStorage.setItem("basket", JSON.stringify(state));
        }
        },
        loadXBasket: (state, {payload})=>{
            state=[...payload];
            return state;
            },
        addToXBasket: (state, {payload})=>{
            if (state[payload]){
                state[payload]+=1;
            } else {state[payload]=1;}
            localStorage.setItem("basket", JSON.stringify(state));
        },
        removeFromXBasket: (state, {payload})=>{
            if (state[payload]){
                state[payload]-=1;
                localStorage.setItem("basket", JSON.stringify(state));
            } 
            if (state[payload]){
                localStorage.setItem("basket", JSON.stringify(state));
                return
            } 
        },
        add10ToXBasket: (state, {payload})=>{
            if (state[payload]){
                state[payload]+=10;
            } else {state[payload]=10;}
            localStorage.setItem("basket", JSON.stringify(state));
        },
        remove10FromXBasket: (state, {payload})=>{
            if (state[payload]){
                state[payload]-=Math.min(10,state[payload]);
                localStorage.setItem("basket", JSON.stringify(state));
            } 
            if (state[payload]){
                localStorage.setItem("basket", JSON.stringify(state));
                return
            } 
        },
        deleteFromXBasket: (state, {payload})=>{
            state[payload]=0;
            localStorage.setItem("basket", JSON.stringify(state));
        },
        clearXBasket: (state) =>{
            state.forEach(element => {element=0});
            localStorage.setItem("basket", JSON.stringify(state));
        }
    }
});

export const {initXBasket,loadXBasket,addToXBasket,removeFromXBasket,add10ToXBasket,remove10FromXBasket,deleteFromXBasket,clearXBasket} = xbasketSlice.actions;
export default xbasketSlice.reducer;