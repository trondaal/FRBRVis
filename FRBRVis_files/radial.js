function radial(wem){

	var r = 510 / 2,
		w = 745,
    	h = 650,
    	i = 0,
    	duration = 500,
    	root,
		selected;

	
	var tree = d3.layout.cluster()
    	.size([360, r - 30])
    	.sort(null)
    	.children(function(d) { 
			if (d.children){
				return d3.values(d.children);
			}else{
				return null;
			}; 
		})
    	.separation(function(a, b) { return (a.parent == b.parent ? 1 : 2) ; });

	var diagonal = d3.svg.diagonal.radial()
    	.projection(function(d) { return [d.y, d.x / 180 * Math.PI]; }); 

	var vis = d3.select("#graphic").append("svg:svg")
    	.attr("width", w)
    	.attr("height", h)
  	.append("svg:g")
    	.attr("transform", "translate( 380, 280)")
  	
	data = d3.values(wem)[0]
  	data.x0 = w;
  	data.y0 = 0;
  	update(root = data);


function update(source) {

	// Compute the new tree layout.
	var nodes = tree.nodes(root);

	// Update the nodes…
	var node = vis.selectAll("g.node")
		.data(nodes, function(d) { return d.id || (d.id = ++i); });
	  
	// Enter any new nodes at the parent's previous position.
	var nodeEnter = node.enter().append("svg:g")
		.attr("class", "node")
		.attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; });
	
	nodeEnter.append("svg:circle")
		.attr("r", 8)
		.attr("class", function(d) { return d.type; })
		//.style("fill", function(d) { return d.color ? d.color : "#fff"; })
		.on("click.bar", click)
		.on("click.test", selection)
		.on("dblclick", click);

	nodeEnter.append("svg:text")
		.attr("class","label")
		//.attr("dx", function(d) { return d.x < 180 ? 12 : -12; })
		//.attr("dy", ".31em")
		.attr("text-anchor", function(d) { return d.x <= 180 ? "start" : "end"; })
		.attr("transform", function(d) { return "rotate(" + (-d.x + 90) + ")"; })
		//.text(function(d) {  return d._children ? displaymediumtitle(d).substring(0,20) + " (+)" : displaymediumtitle(d).substring(0,20); });
		.attr("dy", "0.35em")
		.attr("x", "0")
		.attr("y", "-10")
		.append("svg:tspan")
			.attr("dy", "" + 12)
			.attr("x", function(d) { return d.x <= 180 ? 12 : -12; })
			.text(function(d) {return label_multiline(d)[0]})
			//.text(function(d) {return d.x})
		.append("svg:tspan")
			.attr("dy", "" + 12)
			.attr("x", function(d) { return d.x <= 180 ? 12 : -12; })
			.text(function(d) {return label_multiline(d)[1]})
		.append("svg:tspan")
			.attr("dy", "" + 12)
			.attr("x", function(d) { return d.x <= 180 ? 12 : -12; })
			.text(function(d) {return label_multiline(d)[2]});
	  
  	// Transition nodes to their new position.
  	var nodeTransition = node.transition()
		.duration(duration)
	    .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; });
		

		//.text(function(d) { return d.x; });
		
	nodeTransition.select("text")
		//.attr("dx", function(d) { return d.x < 180 ? 12 : -12; })
		//.attr("dy", ".31em")
		.attr("text-anchor", function(d) { return d.x <= 180 ? "start" : "end"; })
		.attr("transform", function(d) { return "rotate(" + (-d.x  + 90) + ")"; })
		//.text(function(d) {  return d._children ? displaymediumtitle(d).substring(0,20) + " (+)" : displaymediumtitle(d).substring(0,20); });
		
	nodeTransition.select("tspan")
		.attr("x", function(d) { return d.x <= 180 ? 12 : -12; });

  // Transition exiting nodes to the parent's new position.
  node.exit().transition()
      .duration(duration)
	  .attr("cx", function(d) { return source.y / 180 * Math.PI; })
      .attr("cy", function(d) { return source.y / 180 * Math.PI; })
      .remove();
	
	  

  // Update the links…
  var link = vis.selectAll("path.link")
      .data(tree.links(nodes), function(d) { return d.target.id; });

  // Enter any new links at the parent's previous position.
  link.enter().insert("svg:path", "g")
      .attr("class", "link")
      .attr("d", function(d) {
        var o = {x: source.x0, y: source.y0};
        return diagonal({source: o, target: o});
      })
    .transition()
      .duration(duration)
      .attr("d", diagonal);

  // Transition links to their new position.
  link.transition()
      .duration(duration)
      .attr("d", diagonal);

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
      .duration(duration)
      .attr("d", function(d) {
        var o = {x: source.x, y: source.y};
        return diagonal({source: o, target: o});
      })
      .remove();
	  
	var temp = tree.nodes(root);
	

	   

  // Stash the old positions for transition.
  nodes.forEach(function(d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });
}

	//function click(d) {
	//	display(d);
	//}

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


}



