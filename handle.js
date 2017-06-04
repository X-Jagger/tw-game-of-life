(function(){
	//放方块Dom
	var len = 1458;
	for(var i = 0; i < len ; i++){
		$(".container").append('<div class="item" data-val="0"></div>');
	}

	var mainHeight = $(".container").height();
	var mainWidth = $(".container").width();
	var itemSize = $(".item").width();
	var numX = Math.floor(mainWidth/(itemSize+2));//开始是col
	var numY = Math.floor(mainHeight/(itemSize+2));//开始是row
	var dataArr = [];//用来装现在点的状态arr

	
	//切换点的状态（颜色 生命）
	$(".item").click(function(){
		if($(this).attr("data-val") == 0){
			$(this).attr("data-val","1");
			$(this).addClass("active");
		}else{
			$(this).attr("data-val","0");
			$(this).removeClass("active");
		}
	});

	var intervalID ;
	var speed = 500;
	$(".start-btn").click(function(){
		intervalID  = setInterval(go,speed);
		
	});
	$(".stop-btn").click(function(){
		clearInterval(intervalID);
	});
	$(".fast-btn").click(function(){
		speed = 50;
		clearInterval(intervalID);
		intervalID  = setInterval(go,speed);
	});
	$(".slow-btn").click(function(){
		speed = 800	;
		clearInterval(intervalID);
		intervalID  = setInterval(go,speed);
	});
	$(".clear-btn").click(function(){
		$(".item").removeClass("active");
		$(".item").attr("data-val","0");
		clearInterval(intervalID);
	});
	$(".random-btn").click(function(){
		clearInterval(intervalID);
		for(var i=0;i < $(".item").length;i++){
			if(Math.round(Math.random()) == 0){
				$(".item").eq(i).attr("data-val","0");
				$(".item").eq(i).removeClass("active");
			}else{
				$(".item").eq(i).attr("data-val","1");
				$(".item").eq(i).addClass("active");				
			}
			
		}
	});

	//获得当前点的状态
	function getDataArr(){
		dataArr = [];
		for (var i = 0; i < numY; i++) {
			var tempArr = [];
			for (var j = 0; j < numX; j++) {
				tempArr.push($(".item").eq(i*numX + j).attr("data-val"));
			};
			dataArr[i] = tempArr;
		};
	}
	//传入所有点，处理并渲染
	function handleResult(arr){
		$(".item").removeClass("active");
		$('.item').attr("data-val","0");
		for(var i=0; i<arr.length; i++){
			if(arr[i] === "1"){
				$(".item").eq(i).addClass("active");
				$(".item").eq(i).attr("data-val","1");
			}else{
				$(".item").eq(i).removeClass("active");
			}
		}
	}

	//计算每个点应有的状态 live or die，得到countArr
	function computed(arr) {
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
		var getResultArr = computed(dataArr);
		handleResult(getResultArr);
	}
})()