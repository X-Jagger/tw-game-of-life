
	//放方块Dom
	var len = 1458;
	for(var i = 0; i < len ; i++){
		$(".container").append('<div class="item" data-val="0"></div>');
	}

	var mainHeight = $(".container").height();
	var mainWidth = $(".container").width();
	var itemSize = $(".item").width();
	var col = Math.floor(mainWidth/(itemSize+2));
	var row = Math.floor(mainHeight/(itemSize+2));
	var dataArr = [];//用来装现在点的状态arr

	//切换点的状态（颜色 生命）
	$(".item").click(function(){
		if($(this).attr("data-val") == 0){
			$(this).attr("data-val","1");
			$(this).attr("class","item active");
		}else{
			
			$(this).attr("data-val","0");
			$(this).attr("class","item");
		}
	});

	var intervalID ;
	var speed = 500;
	$(".start-btn").click(function(){
		intervalID  = setInterval(go,speed);
		
	});

	$(".stop-btn").click(function(){
		clearInterval(intervalID );
		
	});
	$(".fast-btn").click(function(){
		speed = 50;
		clearInterval(intervalID );
		intervalID  = setInterval(go,speed);
	});
	$(".slow-btn").click(function(){
		speed = 800;
		clearInterval(intervalID );
		intervalID  = setInterval(go,speed);
	});

	//获得当前点的状态
	function getDataArr(){
		dataArr = [];
		for (var i = 0; i < row; i++) {
			var tempArr = [];
			for (var j = 0; j < col; j++) {
				tempArr.push($(".item").eq(i*col + j).attr("data-val"));
			};
			dataArr[i] = tempArr;
		};
	}
	//传入所有点，处理并渲染
	function handleResult(arr){
		$(".item").attr("class","item");
		$('.item').attr("data-val","0");
		for(var i=0; i<arr.length; i++){
			if(arr[i] === "1"){
				$(".item").eq(i).attr("class","item active");
				$(".item").eq(i).attr("data-val","1");
			}else{
				$(".item").eq(i).attr("class","item");
			}
		}
	}

	//计算每个点应有的状态 live or die，得到countArr
	function square(arr) {
		var countArr = [];
		for (var i = 0; i < arr.length; i++) {
			for (var j = 0; j < arr[i].length; j++) {
				vertify(i,j);
			};
		};
		//计算验证该有的状态
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
		  		countArr.push("0");
		  	}else if(count > 2){
		  		countArr.push("1");
		  	}else if(count == 2){
		  		countArr.push(arr[x][y]);
		  	}  	  	
		}
			return countArr;
	};

	function go(){
		getDataArr();
		var getResultArr = square(dataArr);
		handleResult(getResultArr);
	}
}()
