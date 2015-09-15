

jQuery(document).ready(function(){ 
		
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");
		ctx.fillStyle = "#00f";
		
		var dropCount = 0;
		var maxDrops = 1000;
		
		dropIt(ctx, dropCount, maxDrops);
		
		function rain(drop)
		{
			drop.print();
			
			drop.display();
			
			var max = drop.height*50;
			
			fall(drop, max);
			
		}
		
		function fall(drop, max)
		{
			setTimeout(function(){
				drop.display();
				drop.clearPrevious();
				drop.y += drop.height;
				
				if(drop.y < max)
				{
					fall(drop, max);
				}
				
			}, 5);
		}
		
		function dropIt(ctx, dropCount, maxDrops)
		{
			setTimeout(function(){
				var drop = newDrop(ctx);
				var rand = Math.floor((Math.random() * 400) + 1);
				drop.x = rand;
				rain(drop);
				dropCount++
				if(dropCount < maxDrops)
				{
					dropIt(ctx, dropCount, maxDrops);
				}
				
			}, 5);
		}

		function newDrop(ctx)
		{
			var drop = {
				"x" 		: 5,
				"y" 		: 0,
				"width" 	: 4,
				"height" 	: 8,
				"ctx" 		: ctx,
				print 		: function() 
				{
					console.log("x: " + this.x);
					console.log("y: " + this.y);
					console.log("width: " + this.width);
					console.log("height: " + this.height);
				},
				display		: function()
				{
					this.ctx.fillRect(this.x, this.y, this.width, this.height);
				},
				clearPrevious: function()
				{
					this.ctx.clearRect(this.x, this.y - this.height, this.width, this.height);
				}
			};
			
			return drop;
		}
		
});
