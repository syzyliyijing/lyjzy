var app = new Vue({
    el:'#app',
    data:{
        math:50,
        physics:100,
        english:80,
    },
    computed:{
        sum:function(){
            return this.math + this.physics + this.english;
        },
        average:function(){
            return Math.round(this.sum/3)
        }
    }
})