 function Observer(obj) {
 	this.data = obj;
 	this.do(obj);
 }
 var p = Observer.prototype;

 p.do = function(obj){
 	var val;
 	for(var key in obj){
 		if(obj.hasOwnProperty(key)){
 			val = obj[key];
 			if(typeof val === 'object'){
 				new Observer(val)
 			}
 			this.add(key,val)
 		}
 	}
 }

 p.add = function (key,val) {
 	Object.defineProperty(this.data,key,{
 		get : function(){
 			console.log('你访问了 '+key);
 			return val
 		},
 		set : function(newVal){
 			console.log('你设置了 '+key+',新的值为'+newVal);
 			if(val === newVal) return ;
 			val = newVal
 		}
 	})
 }
 var data = {
 	name:'ninja',
 	age:18
 }

 var app = new Observer(data)