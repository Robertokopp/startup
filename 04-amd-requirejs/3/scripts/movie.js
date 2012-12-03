$.fn.movie = ( function(){

 
	var movie = function(){};
	
	movie.prototype = {
		
		constructor : movie
		
		,play : function(){return "Play : "+this.get('titulo');}
		
		,stop : function(){ return "Stop : "+this.get('titulo');}
		
		,setp  : function(clave, valor){
			this[clave] = valor;
			return "dato "+ clave + "cargado";
		}	
		
		,getp  : function(clave){
			return this[clave];
		}	
	
	
	}
	
	return movie;
	
});
