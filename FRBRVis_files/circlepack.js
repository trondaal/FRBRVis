function circlepack(wem){
	
	var w = 700,
    	h = 650,
    	duration = 500,
		i = 0,
		format = d3.format(",d"),
    	root,
		selected;
		
	var pack = d3.layout.pack()
    	.size([555, 555])
    	.children(function(d) { 
			if (d.children){
				return d3.values(d.children);
			}else{
				return null;
			}; 
		})
		.sort(function(a,b){})
		.value(function(d) { return d.children ? d.children.length + 10 : 1; });				
	
	var vis = d3.select("#graphic").append("svg:svg")
    	.attr("width", w)
    	.attr("height", h)
    	.attr("class", "pack")
	.append("svg:g")
		.attr("transform", "translate(70, 50)");
		
		
	data = d3.values(wem)[0]
  	data.x0 = 555;
  	data.y0 = 0;
	data.r0 = 0;
  	update(root = data);

	function update(source) {

  		// Compute the new tree layout.
  		var nodes = pack.nodes(root);

  		// Update the nodes…
  		var node = vis.selectAll("g.node")
     	 	.data(nodes, function(d) { return d.id;});
			
		var nodeEnter = node.enter().append("svg:g")
			.attr("class", "node")
			.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
			
		nodeEnter.append("svg:circle")
			.attr("class", function(d) {return d.type;})
			.attr("r", function(d) {return 0;})
			.attr("x", function(d) {return d.x;})
			.attr("y", function(d) {return d.y;})
			.on("click.bar", click)
			.on("click.test", selection);
			//.on("click", click);
		//.transition()
      		//.duration(duration) ;
			//.attr("x", function(d) {return d.parent.x ? d.parent.x : d.x})
			//.attr("y", function(d) {return d.parent.y ? d.parent.y : d.y;})
			//.attr("r", function(d) {return d.r});
			
		/*nodeEnter.append("svg:path")
			.attr("class", function(d){return d.type})
			.attr("id", function(d) {return d.id})
			.attr("d", arc)
			.style("pointer-events", "none")
			.style("visibility", "hidden");*/
		
		nodeEnter.append("svg:text")
			.attr("class","label")
			.attr("text-anchor", "middle")
			.attr("x", 0)
			.attr("y", function(d) {
				if (d.children) 
					return - (d.r * 0.9)
				else
					return 0	
			})
			.attr("dy", ".3em")
			.text(function(d) { return d._children ? displaymediumtitle(d).substring(0, (d.r / 3)) + " (+)" :
													 displaymediumtitle(d).substring(0, d.r / 3);});
			
  
  		// Transition nodes to their new position.
		var nodeTransition = node.transition()
      						.duration(duration)
							.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
		
		nodeTransition.select("circle")     		
			.attr("x", function(d) {return d.x;})
			.attr("y", function(d) {return d.y;})
			.attr("r", function(d) {
					if (d.level == "0") {
						return d.r + (d.r * 0.15);
					}else if (d.children){
						return d.r;
					}
					
					
					else if (d.parent.children){
						if ((d.level > 1) && d.parent.children.length == 1){
							return d.r - (d.r * 0.25);
						}else {
							return d.r;
						}
					}else if (d.parent._children){
						if ((d.level > 1) && d.parent._children.length == 1){
							return d.r - (d.r * 0.25);
						}else{
							return d.r;
						}
					}else{
						return d.r;
					}
			});
			
		nodeTransition.select("text")
			.attr("x", 0)
			.attr("y", function(d) {
				if ((d.level == 0) && d.children)
					return - (d.r * 1.05)
				if (d.children) 
					return - (d.r * 0.85)
				else
					return 0	
			})
			.text(function(d) { return d._children ? displaymediumtitle(d).substring(0, (d.r / 3)) + " (+)" :
													 displaymediumtitle(d).substring(0, d.r / 3);});
			
		nodeTransition.select("path")
			.attr("d", arc);
			
      		//.style("fill", function(d) { return d.color ?d.color : "#fff"; });

  		// Transition exiting nodes to the parent's new position.*/
  		var nodeExit = node.exit().transition()
			.duration(duration);
		
		nodeExit.select("circle")
      		.attr("r", function(d) { return 0;})
			.attr("x", function(d) { return 0;})
			.attr("y", function(d) { return 0;});
			
		nodeExit.remove();

  		// Stash the old positions for transition.
  		nodes.forEach(function(d) {
    		d.x0 = d.x;
    		d.y0 = d.y; 
			d.r0 = d.r;
		});
	}
	
    function selection(d){
		d3.select(selected)
			.style("stroke-dasharray", "none")
			.style("stroke-width", "1px")
			.style("opacity", "1");
		d3.select(this)
			.style("stroke-dasharray", "4,2,4,2")
			.style("stroke-width", "2px")
			.style("opacity", ".6");
		selected = this;
	}
	
	//function click(d) {
	//	display(d);
	//}
	
	function click(d) {
		if (d.children) {
		  //alert("I have open children!" + d.label)
		    for (var inx = 0; inx < d.children.length; ++inx){
		    	collapse(d.children[inx]);
			}
   			d._children = d.children;
    		d.children = null;
  		} else if (d._children){
  		    //alert("I do not have open children!" + d.label)
    		d.children = d._children;
    		d._children = null;
			collapseOther(d);
  		}
  		update(d);
		display(d);
	}
	
	function collapse(y){
		if (y.children){
			for (var inx = 0; inx < y.children.length; ++inx){
				collapse(y.children[inx]);
			}
			y._children = y.children;
    		y.children = null;
		}else if (y._children){
			for (var inx = 0; inx < y._children.length; ++inx){
				collapse(y._children[inx]);
			}
		}
	}
	
	function collapseOther(d){
		var thisid = d.id;
		if (d.parent){
			for (var inx = 0; inx < d.parent.children.length; ++inx){
				if (d.parent.children[inx].id != thisid){
					collapse(d.parent.children[inx]);
				}
			}
		}
	}
	
	/*function path(d) {
    
  		var s = "M " + -d.r + "," + 0 
		+ " c " + d.r / 2 + "," + ( -  d.r) 
		+ ", " + (d.r + (d.r / 2) ) + ", " + (- d.r)
		+ ", " + (d.r * 2) + ", " + (0) ;
		//+ r + ",0,1,1,"+ (x - 0.1) + "," + (y - r) 
		//+" z";   
  		return s; 
	} 

	function circlePath(d) {
    	var x = -d.r;
		var y = 0;
		var r = d.r;
	
  		var s = "M" + x + "," + (y - d.r) + "A" + r + "," 
		+ r + ",0,1,1,"+ (x - 0.1) + "," + (y - r) 
		+" z";   
  		return "test"; 
	} */
	
	var arc = d3.svg.arc()
    	.startAngle(function(d) { return -180; })
    	.endAngle(function(d) { return 180; })
    	.innerRadius(function(d) { return 100; })
    	.outerRadius(function(d) { return d.r; });

}

