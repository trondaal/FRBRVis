// JavaScript Document
function hierarchy(wem){

var w = 700,
    h = 650,
    i = 0,
    barHeight = 20,
    barWidth = w * .6,
    duration = 500,
    root,
	selected;

var tree = d3.layout.tree()
    .size([h, 100])
	.children(function(d) { 
		if (d.children){
			return d3.values(d.children);
		}else{
			return null;
		}; 
	})
	.separation(function(a,b) {return a.parent == b.parent ? 2 : 0,5;});

	
	

var diagonal = d3.svg.diagonal()
    .projection(function(d) { return [d.y, d.x]; });

var vis = d3.select("#graphic").append("svg:svg")
    .attr("width", w)
    .attr("height", h)
  .append("svg:g")
    .attr("transform", "translate(100,30)");

  data = d3.values(wem)[0]
  data.x0 = w;
  data.y0 = 0;
  update(root = data);


function update(source) {

  // Compute the flattened node list. TODO use d3.layout.hierarchy.

  var nodes = tree.nodes(root);
  
  // Compute the "layout".
  nodes.forEach(function(n, i) {
    n.x = i * barHeight;
  });
  
  // Update the nodes…
  var node = vis.selectAll("g.node")
      .data(nodes, function(d) { return d.id || (d.id = ++i); });
  
  var nodeEnter = node.enter().append("svg:g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
      .style("opacity", 1e-6);

  // Enter any new nodes at the parent's previous position.
  nodeEnter.append("svg:rect")
      .attr("y", -barHeight / 2)
      .attr("height", barHeight)
      .attr("width", barWidth)
      .attr("class",function(d) { return d.type; }) 
		.on("click.bar", selection)
		//.on("dblclick", selection)
		.on("click", click);
  
  nodeEnter.append("svg:text")
  		.attr("class","label") 
      	.attr("dy", 3.5)
      	.attr("dx", 5.5)
      	.text(function(d) { return d._children ? displaymediumtitle(d) + " (+)" : displaymediumtitle(d); });
		//.text(function(d) {return d.children ? d.children.length : "leaf"});
  
  // Transition nodes to their new position.
  var nodeEnterTransition = nodeEnter.transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })
      .style("opacity", 1);
	  
  nodeEnterTransition.select("text")
  		.text(function(d) { return d._children ? displaymediumtitle(d) + " (+)" : displaymediumtitle(d); });
  
 var transition =  node.transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })
      .style("opacity", 1);
	  
transition.select("text")
  		.text(function(d) { return d._children ? displaymediumtitle(d) + " (+)" : displaymediumtitle(d); });
  
  // Transition exiting nodes to the parent's new position.
  node.exit().transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
      .style("opacity", 1e-6)
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
  
  // Stash the old positions for transition.
  nodes.forEach(function(d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });
}

function selection(d){
    //reset old
	d3.select(selected)
		.style("stroke-dasharray", "none")
		.style("stroke-width", "1px")
		.style("opacity", "1");
	//highlight new
	d3.select(this)
		.style("stroke-dasharray", "4,2,4,2")
		.style("stroke-width", "2px")
		.style("opacity", ".4");
	//set selected to newly selected
	selected = this;
	
}

	/*function click(d) {
		display(d);
	}*/
	
	function click(d) {
		if (d.children) {
			collapse
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