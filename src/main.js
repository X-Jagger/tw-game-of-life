import _ from 'lodash'

const square = (arr) => {
  //console.log(_.range(0, n));
  var positonArr = [];
  for(var i = 0;i<arr.length; i++){
  	for(var j=0; j<arr[i].length; j++){
  		if(arr[i][j] == 1){
  			var tempArr = [];
  			tempArr.push(i);
  			tempArr.push(j);
  			positonArr.push(tempArr);
  		}
  	}
  }

  for (var i = 0; i < positonArr.length; i++) {
  	var x = positonArr[i][0];
  	var y = positonArr[i][1];

  	vertify(x-1,y-1);
  	vertify(x-1,y);
  	vertify(x-1,y+1);
  	vertify(x,y-1);
  	vertify(x,y);
  	vertify(x,y+1);
  	vertify(x+1,y-1);
  	vertify(x+1,y);
  	vertify(x+1,y+1);
}

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
  	// if(!arr[x]){
  	// 	arr[x] = [];
  	// }
  	if(arr[x]){
	  	if(count < 2){
	  		arr[x][y] = 0;
	  	}else if(count > 2){
	  		arr[x][y] = 1;
	  	}  	  	
	 }
	
  	

}

return arr;

};



module.exports = {
  square:square
};
