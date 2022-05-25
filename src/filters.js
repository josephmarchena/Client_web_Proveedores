import Vue from "vue";


Vue.filter('currency', value => {
    return value.toFixed(2).toLocaleString(); 
})