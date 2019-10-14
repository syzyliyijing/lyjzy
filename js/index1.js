;(function(){
    var Event=new Vue();
    function copy(obj){
        return Object.assign({},obj);
    }
    Vue.component('task',{
        template:'#task-tpl',
        props:['todo'],
        methods:{
            action:function(name,params){
                Event.$emit(name,params);
            }
        }
    });
    new Vue({
        el:'#main',
        data:{
            list:[],
            current:{},
            last_id:0,
        },
        mounted:function(){
            var me=this;
            this.list=ms.get('list') || this.list;
            this.last_id=ms.get('list') || this.last_id;
//获取ID值
            Event.$on('remove',function(id){
                if(id){
                    me.remove(id);
                }
            });
            Event.$on('toggle_complete',function(id){
                if(id){
                    me.toggle_complete(id);
                }
            });
            Event.$on('set_current',function(id){
                if(id){
                    me.set_current(id);
                }
            });
            

        },
        methods:{
            add:function(){
                var is_update,id;
                var is_update=id=this.current.id;
                if(is_update){
                    var index=this.find_index(id);
                    Vue.set(this.list,index,copy(this.current));
                
                console.log('this.list :',this.list);

                }else{
                    var title=this.current;
                    if(!title && title !== 0)return;
                    var todo=copy(this.current);
                    todo.id=this.next_id();
                    this.list.push(todo);
                    console.log('this.list :',this.list);
                }
                this.reset_current();
            },
            remove: function(id){
                var index=this.find_index(id);
                this.list.splice(index,1);
            },
            next_id:function(){
                return this.list.length+1;
            },
            set_current:function(){
                this.set_current({});
            },
            find_index:function(id){
                return this.list.findIndex(function(item){
                    return item.id=id;
                })
            }
        },
        watch:{
            list:{
                deep:true,
                handler:function(new_val,old_val){
                    if(new_val){
                        msg.set('list',new_val);
                    }else{
                        msg.set('list',[]);
                    }
                }
            }
        }
    });
})();