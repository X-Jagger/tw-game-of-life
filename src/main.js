function computed(arr) {
var countArr = [];
for (var i = 0; i < arr.length; i++) {
	for (var j = 0; j < arr[i].length; j++) {
		vertify(i,j);
	};
};
function vertify(x,y){
  	var count = 0;
  	if(arr[x-1]){
  		if(arr[x-1][y-1] == 1){
  			count++ ;
  		}
	  	if(arr[x-1][y] == 1){
	  		count++ ;
	  	}
	  	if(arr[x-1][y+1] == 1){
	  		count++ ;
	  	}
  	}
  	if(arr[x]){
	  	if(arr[x][y-1] == 1){
	  		count++ ;
	  	}
	  	if(arr[x][y+1] == 1){
	  		count++ ;
  		}  		
  	}
  	if(arr[x+1]){
	   	if(arr[x+1][y-1] == 1){
	  		count++ ;
	  	}
	  	if(arr[x+1][y] == 1){
	  		count++ ;
	  	}
	  	if(arr[x+1][y+1] == 1){
	  		count++ ;
	  	} 		
  	}
  	
  	if(count > 3 || count < 2){
  		countArr.push(0);
  		
  	}else if(count > 2){
  		countArr.push(1);
  		
  	}else if(count == 2){
  		countArr.push(arr[x][y]);

  	}  	  	
}


return countArr;

};
module.exports =  {
  computed
};
