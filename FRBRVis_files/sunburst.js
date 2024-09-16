function sunburst(wem){
				
	var w = 650,
    	h = 650,
		r = (Math.min(w, h) / 2) - 100,
    	color = d3.scale.category20c(),
    	duration = 500,
		i = 0,
	   	root,
		selected,
		x = d3.scale.linear().range([0, 2 * Math.PI]),
    	y = d3.scale.sqrt().range([0, r]),
		arcsizeparam = 0.083;
		
	var vis = d3.select("#graphic").append("svg:svg")
    	.attr("width", w)
    	.attr("height", h)
  	.append("svg:g")
    	.attr("transform", "translate(" + w / 2 + "," + h / 2 + ")");
		
	var partition = d3.layout.partition()
    	.sort(null)
    	.size([2* Math.PI, r * r])
    	.children(function(d) { 
			if (d.children){
				return d3.values(d.children);
			}else{
				return null;
			}; 
		})
    	.value(function(d) { return d._children ? d._children.length * 2 : 2; });
		
		
	/*var arc = d3.svg.arc()
    .startAngle(function(d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x))); })
    .endAngle(function(d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx))); })
    .innerRadius(function(d) { return Math.max(0, y(d.y)); })
    .outerRadius(function(d) { return Math.max(0, y(d.y + d.dy)); });*/


	var arc = d3.svg.arc()
    	.startAngle(function(d) { return d.x; })
    	.endAngle(function(d) { return d.x + d.dx; })
    	.innerRadius(function(d) { return (w * arcsizeparam) * d.level; })
    	.outerRadius(function(d) { return (w * arcsizeparam) * d.level + (w * arcsizeparam); });		
		
		
	data = d3.values(wem)[0]
  	data.x0 = w;
  	data.y0 = 0;
	data.r0 = 0;
  	update(root = data);
	
	


	function update(source) {

  		// Compute the new tree layout.
  		var nodes = partition.nodes(root);

  		// Update the nodes…
  		var node = vis.selectAll("g.node")
     	 	.data(nodes, function(d) { return d.id || (d.id = ++i); });
		
		var nodeEnter = node.enter().append("svg:g")
			.attr("class", "node");
		
		nodeEnter.append("svg:path")
      		.attr("id", function(d) {return d.id;})
			.attr("d", arc)
			.attr("class", function(d) { return d.type; })
      		.attr("fill-rule", "evenodd")
      		.on("click.bar", click)
			.on("click.test", selection)
			.on("dblclick", click)
			.each(stash);
			
		/*nodeEnter.append("svg:foreignObject") 
      		.attr("width", 200) 
      		.attr("height", 200)
			.append("div") 
      		.html(displayshorttitle(d)); */
			
		var text = nodeEnter.append("svg:text")
			.attr("class","sunburstlabel")
    		.attr("transform", function(d) { 
				return "translate(" + arc.centroid(d) + ")"; 
				if (d.level == 0) {
					return "translate(0, 0)";
				}else{
					return "translate(" + arc.centroid(d) + ")"; 
				}
			})
    		.attr("dy", "0.35em")
			.attr("x", "-20")
			.attr("y", "-20")
    		.attr("text-anchor", function(d) {
					if (d.type == "Manifestation"){
						if (d.x > 3.14){
							return "middle";
						}else{
							return "middle";
						}
					}else{
						return "middle";
					}
				})
			.append("svg:tspan")
				.attr("dy", "" + 12)
				.attr("x", "" + 0)
				.attr("class", "firstline")
				.text(function(d) {return label_multiline(d)[0]})
				//.text(function(d) {return d.x})
			.append("svg:tspan")
				.attr("dy", "" + 12)
				.attr("x", "" + 0)
				.text(function(d) {return label_multiline(d)[1]})
			.append("svg:tspan")
				.attr("dy", "" + 12)
				.attr("x", "" + 0)
				.text(function(d) {return label_multiline(d)[2]});
					
			
		var nodeTransition = node.transition()
			.duration(duration);
		
		nodeTransition.select("path")
			.attr("d", arc)
			.attrTween("d", arcTween);
		
		nodeTransition.select("text")
			.attr("transform", function(d) { 
				if (d.level == 0) {
					return "translate(0, 0)";
				}else{
					return "translate(" + arc.centroid(d) + ")"; 
				}})
			.attr("text-anchor", function(d) {return "middle";});
		

  		node.exit()
      		.remove();
 	  

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
			.style("opacity", ".4");
		selected = this;
	}

	// Toggle children on click.
	/*function click(d) {
		display(d);
	}*/
	
	function click(d) {
		if (d.children) {
			//collapse
			for (var inx = 0; inx < d.children.length; ++inx){
				collapse(d.children[inx]);
			}
   			d._children = d.children;
    		d.children = null;
  		} else if (d._children){
			//expand
			if (d._children.length == 1){
				expand(d._children[0]);
			}
			d.children = d._children;
    		d._children = null;
			collapseOther(d);
  		}
  		update(d);
		display(d);
	}
	
function expand(single){
			if (single._children && single._children.length == 1){
				single.children = single._children;
    			single._children = null;
				expand(single.children[0]);
			}else if (single._children && single._children.length > 1){
				single.children = single._children;
    			single._children = null;
			}
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
	
	function multiline(d){
		text("test");
	}
	
	 // Stash the old values for transition.
	function stash(d) {
		d.x0 = d.x;
		d.dx0 = d.dx;
	}
	
	 // Interpolate the arcs in data space.
	function arcTween(a) {
		var i = d3.interpolate({x: a.x0, dx: a.dx0}, a);
		return function(t) {
			var b = i(t);
			a.x0 = b.x;
			a.dx0 = b.dx;
			return arc(b);
		};
	}


}


