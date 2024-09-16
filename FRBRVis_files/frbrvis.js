// JavaScript Document
var example = "littlewomen"
var current = littlewomenWEM;
var displaytype = "";
var visualization = "hierarchy";

function init(){
	setExample("littlewomen");	
	setDisplayType(document.getElementById("we"));
}

function changeVisualization(){
	container = d3.select("#graphic");
	container.selectAll('svg').remove();
	document.getElementById("rightlist").innerHTML = "";
	document.getElementById("rightpath").innerHTML = "";
	document.getElementById("orgworktitle").innerHTML = headerTitle(current[0]);
	if (visualization == "circlepack"){	
		visualization = "circlepack";
		circlepack(current);
	}else if (visualization == "sunburst"){
		sunburst(current);
		visualization = "sunburst";
	}else if (visualization == "radial"){
		radial(current);
		visualization = "radial";
	}else if (visualization == "hierarchy"){
		hierarchy(current);
		visualization = "hierarchy";
	}
}

function setVisualization(vis){
	visualization = vis.id;
	iconselected(vis);
	changeVisualization();
}

function iconselected(i){
	document.getElementById("hierarchy").style.backgroundImage = "url(images/hierarchy_bw.jpg)";
	document.getElementById("sunburst").style.backgroundImage = "url(images/sunburst_bw.jpg)";
	document.getElementById("radial").style.backgroundImage = "url(images/radial_bw.jpg)";
	document.getElementById("circlepack").style.backgroundImage = "url(images/circlepack_bw.jpg)";
	document.getElementById(i.id).style.backgroundImage = "url(images/" + i.id + ".jpg)";
}

function setExample(ex){
	if (ex == "millennium"){
		example = ex;
		if (displaytype == "we"){
			current = millenniumWEM;
		}else if(displaytype == "ww"){
			current = millenniumWW;
		}else if(displaytype == "wa"){
			current = millenniumWA;
		}		
	}else if (ex == "littlewomen"){
		example = ex;
		if (displaytype == "we"){
			current = littlewomenWEM;
		}else if(displaytype == "ww"){
			current = littlewomenWW;
		}else if(displaytype == "wa"){
			current = littlewomenWA;
		}
	}else if (ex == "donquixote"){
		example = ex;
		if (displaytype == "we"){
			current = donquixoteWEM;
		}else if(displaytype == "ww"){
			current = donquixoteWW;
		}else if(displaytype == "wa"){
			current = donquixoteWA;
		}
	}else if (ex == "henningmankell"){
		example = ex;
		if (displaytype == "we"){
			current = henningmankellWEM;
		}else if(displaytype == "ww"){
			current = henningmankellWW;
		}else if(displaytype == "wa"){
			current = henningmankellWA;
		}
	}else if (ex == "svetlanamakarovic"){
		example = ex;
		if (displaytype == "we"){
			current = svetlanamakarovicWEM;
		}else if(displaytype == "ww"){
			current = svetlanamakarovicWW;
		}else if(displaytype == "wa"){
			current = svetlanamakarovicWA;
		}
	}else if (ex == "destiny"){
		example = ex;
		if (displaytype == "we"){
			current = destinyWEM;
		}else if(displaytype == "ww"){
			current = destinyWW;
		}else if(displaytype == "wa"){
			current = destinyWA;
		}
	}else if (ex == "babar"){
		example = ex;
		if (displaytype == "we"){
			current = babarWEM;
		}else if(displaytype == "ww"){
			current = babarWW;
		}else if(displaytype == "wa"){
			current = babarWA;
		}
	}else if (ex == "stevejobs"){
		example = ex;
		if (displaytype == "we"){
			current = stevejobsWEM;
		}else if(displaytype == "ww"){
			current = stevejobsWW;
		}else if(displaytype == "wa"){
			current = stevejobsWA;
		}
	}
	
	changeVisualization();
}

function setDisplayType(disp){
	if(disp.id != displaytype){
		document.getElementById("we").style["color"] = "";
		document.getElementById("we").style["cursor"] = "";
		document.getElementById("we").style["background"] = "";
		document.getElementById("we").style["border-bottom"] = "";
		document.getElementById("we").style["opacity"] = "";
	
		document.getElementById("ww").style["color"] = "";
		document.getElementById("ww").style["cursor"] = "";
		document.getElementById("ww").style["background"] = "";
		document.getElementById("ww").style["border-bottom"] = "";
		document.getElementById("ww").style["opacity"] = "";
	
		document.getElementById("wa").style["color"] = "";
		document.getElementById("wa").style["cursor"] = "";
		document.getElementById("wa").style["background"] = "";
		document.getElementById("wa").style["border-bottom"] = "";
		document.getElementById("wa").style["opacity"] = "";
	
		disp.style["color"]= "#052161";
		disp.style["background"]= "#fff";
		disp.style["cursor"]= "default";
		disp.style["border-bottom"]= "none";
		disp.style["opacity"]= "1";
		displaytype = disp.id;
		
		if (example == "millennium"){
			if (displaytype == "we"){
				current = millenniumWEM;
			}else if(displaytype == "ww"){
				current = millenniumWW;
			}else if(displaytype == "wa"){
				current = millenniumWA;
			}		
		}else if (example == "littlewomen"){
			if (displaytype == "we"){
				current = littlewomenWEM;
			}else if(displaytype == "ww"){
				current = littlewomenWW;
			}else if(displaytype == "wa"){
				current = littlewomenWA;
			}
		}else if (example == "donquixote"){
			if (displaytype == "we"){
				current = donquixoteWEM;
			}else if(displaytype == "ww"){
				current = donquixoteWW;
			}else if(displaytype == "wa"){
				current = donquixoteWA;
			}
		}else if (example == "henningmankell"){
			if (displaytype == "we"){
				current = henningmankellWEM;
			}else if(displaytype == "ww"){
				current = henningmankellWW;
			}else if(displaytype == "wa"){
				current = henningmankellWA;
			}
		}else if (example == "svetlanamakarovic"){
			if (displaytype == "we"){
				current = svetlanamakarovicWEM;
			}else if(displaytype == "ww"){
				current = svetlanamakarovicWW;
			}else if(displaytype == "wa"){
				current = svetlanamakarovicWA;
			}
		}else if (example == "destiny"){
            if (displaytype == "we"){
			     current = destinyWEM;
			}else if(displaytype == "ww"){
			     current = destinyWW;
		     }else if(displaytype == "wa"){
			     current = destinyWA;
		     }
        }else if (example == "babar"){
            if (displaytype == "we"){
                current = babarWEM;
            }else if(displaytype == "ww"){
                current = babarWW;
            }else if(displaytype == "wa"){
                current = babarWA;
            }
        }else if (example == "stevejobs"){
            if (displaytype == "we"){
                current = stevejobsWEM;
            }else if(displaytype == "ww"){
                current = stevejobsWW;
            }else if(displaytype == "wa"){
                current = stevejobsWA;
            }
        }
		changeVisualization();
	}
}

function headerTitle(e){
	var title = "";
	if (e.type == "Work"){
		if (e.aut){
			var temp = "";
			for (var i = 0; i < e.aut.length; i++){
				temp += e.aut[i].name;
				if (i < (e.aut.length - 1)){
					temp += " / ";
				}
			}
			title += spanify(temp, "headingAuthor");
		}		
		if (e.title){
			title += spanify(e.title, "headingOrgTitle");
		}/*else{
			title += spanify(e.title, "headingTitle");
		}*/
		if (e.form && e.form.length > 0){
			title += spanify(e.form, "headingForm");
		}
		if (e.genre && e.genre.length > 0){
			title += spanify(e.genre, "headingGenre");
		}
	}else if (e.type = "Person"){
		title += e.name;
		if (e.date){
			title += spanify(e.date, "headingAuthorDate");
		}
	}
	return spanify(title, "headingAuthor");
}
		
function display(d){
	if (d.type == "Manifestation"){
		document.getElementById("rightlist").innerHTML = manifestationlist(d);
		document.getElementById("rightpath").innerHTML = path(d.parent);
	}else if (!d.parent){
		document.getElementById("rightlist").innerHTML = subList(d);
		document.getElementById("rightpath").innerHTML = path(d);
	}else{
		document.getElementById("rightlist").innerHTML = subList(d);
		document.getElementById("rightpath").innerHTML = path(d);
	}
}

function path(d){
	if (d.parent){
		return path(d.parent) + " > " + displaymediumtitle(d);
	}else{
		return displaymediumtitle(d);
	}
}

function manifestationlist(d){
    var s = "";
	s += "<ul class=\"displaylist\">";
	s += "<li class=\"displaylistitem\">" + displaymanifestation(d, false) + "</li>"; 
	s += "</ul>";
	return s;
}

function subList(d){
	if (d.children){
		var s = "";
		s += "<ul class=\"displaylist\">";
		var childs = d.children;
		for (var i = 0; i < childs.length; i++){
			s += "<li class=\"displaylistitem\">" + subsubList(childs[i]) + "</li>"; 
		}
		s += "</ul>";
		return s;
	}else if(d._children){
		var s = "";
		s += "<ul class=\"displaylist\">";
		var childs = d._children;
		for (var i = 0; i < childs.length; i++){
			s += "<li class=\"displaylistitem\">" + subsubList(childs[i]) + "</li>"; 
		}
		s += "</ul>";
		return s;
	}else if(d.dchildren){
		var s = "";
		s += "<ul class=\"displaylist\">";
		var childs = d.dchildren;
		for (var i = 0; i < childs.length; i++){
			s += "<li class=\"displaylistitem\">" + subsubList(childs[i]) + "</li>"; 
		}
		s += "</ul>";
		return s;
	}else{
		return displaytitle(d);
	}
}

function subsubList(d){
	if (d.children){
		var s = displaytitle(d);
		s += "<ul class=\"displaylist\">";
		var childs = d.children;
		for (var i = 0; i < childs.length; i++){
			s += "<li class=\"displaylistitem\">" + subList(childs[i]) + "</li>"; 
		}
		s += "</ul>";
		return s;
	}else if(d._children){
		var s = displaytitle(d);
		s += "<ul class=\"displaylist\">";
		var childs = d._children;
		for (var i = 0; i < childs.length; i++){
			s += "<li class=\"displaylistitem\">" + subList(childs[i]) + "</li>"; 
		}
		s += "</ul>";
		return s;
	}else if(d.dchildren){
		var s = displaytitle(d);
		s += "<ul class=\"displaylist\">";
		var childs = d.dchildren;
		for (var i = 0; i < childs.length; i++){
			s += "<li class=\"displaylistitem\">" + subList(childs[i]) + "</li>"; 
		}
		s += "</ul>";
		return s;
	}else{
		return displaytitle(d);
	}
}

function divify(s, cl){
	if(s.length > 0){
		return "<div class=\"" + cl + "\">" + s + "</div>";
	}else{
		return "";
	}
}

function spanify(s, cl){
	return "<span class=\"" + cl + "\">" + s + "</span>";
}

function togglecontent(labelnode, targetid){
	var target = document.getElementById(targetid);
	if (target.style.display == 'none'){
		document.getElementById(targetid).style.display = "inline";
		labelnode.textContent = "hide contents";
	}else{
		document.getElementById(targetid).style.display = "none";
		labelnode.textContent = "show contents";
	}
}


function displaymanifestation(d, showhide){

    var	title = divify(d.title, "manifestationtitle");
    if (d.subtitle){
    	title += divify(d.subtitle, "manifestationsubtitle");
	}

    //title += "</div class='tabledata'>";	
    //title += "</div class='tablerow'>";		  
    title += "<div class='tablerow'><div class='empty'></div class='empty'></div class='tablerow'>";
	  
    if (d.publisherdate){
    	title += "<div class='tablerow'>";
    	title += divify("year:", "tableprefix");
    	title += divify(d.publisherdate, "tabledata");
    	title += "</div class='tablerow'>";
    }
	  
    title += "<div class='tablerow'>";
    title += divify("format:", "tableprefix");
    title += "<div class='tabledata'>";
	var mf = [];
	if (d.mediatype){
		mf.push(d.mediatype);
	}
	if (d.format){
		mf.push(d.format);
	}
	if (mf.length > 0){
		title += divify(mf.join(" - "), "mediatype");
	}
	title += "</div class='tabledata'>";
	title += "</div class='tablerow'>";
		
	if (d.publishername){
		title += "<div class='tablerow'>";
		title += divify("publisher:", "tableprefix");
		title += divify(d.publishername, "tabledata");
		title += "</div class='tablerow'>";
	}
	
	if (d.edition){
		title += "<div class='tablerow'>";
		title += divify("edition:", "tableprefix");
		title += divify(d.edition, "manifestationedition");
		title += "</div class='tablerow'>";
	}

	if (d.extent){
		title += "<div class='tablerow'>";
		title += divify("description:", "tableprefix");
		title += divify(d.extent, "tabledata");
		title += "</div class='tablerow'>";
	}
	
    if (showhide){
		//text element for show hide 
		title += "<div class='tablerow'>";
		title += "<div class='tabledata'>";
		title += "<div class=\"showorhidetext\" onclick=\"togglecontent(this, '" + "t" + d.id + "')\">show contents</div>";
		title += "</div>";
		title += "</div>";
		title += "<div class='tablerow' id='" + "t" + d.id + "' style='display:none'>";
	}
 	
	if (d.includes){
		title += "<div class='tablerow'>";
		title += "<div class='tableprefix'>";
		title += divify("edition contains: " , "contentsprefix");
		title += "</div class='tableprefix'>";	
			
		title += "<div class='tabledata'>";
		for (var i = 0; i < d.includes.length; i++){
			title += divify(d.includes[i].title, "includetitle");
			if(d.includes[i].lsubtitle){
				title += divify(d.includes[i].lsubtitle, "includesubtitle");
			}
			
			var temp = [];
			if(d.includes[i].form){
				temp.push(d.includes[i].form);
			}
			if(d.includes[i].language){
				temp.push(d.includes[i].language);
			}
			if(d.includes[i].contenttype){
				temp.push(d.includes[i].contenttype);
			}

            if (d.includes[i].subtype){
			temp.push(d.includes[i].subtype);
		
			}
			title += divify(temp.join(" - "), "includeform");
			
			title += divify(" author: ", "includeprefix");
			title += divify(d.includes[i].by[0].name, "includename");
			
			/****** Expression level actors *************/
			if (d.includes[i].abr){
				title += divify((d.includes[i].abr[0].role + ": "), "includeprefix");
				var temp = "";
				for (var k = 0; k < d.includes[i].abr.length; k++){
					if (k > 0){
						 temp+= "; ";
					}else{
						temp+= "";
					}
					temp += d.includes[i].abr[k].name;
				}
				title += divify(temp, "includename");
			}
			if (d.includes[i].ctb){
				title += divify((d.includes[i].ctb[0].role + ": "), "includeprefix");
				var temp = "";
				for (var k = 0; k < d.includes[i].ctb.length; k++){
					if (k > 0){
						 temp+= "; ";
					}else{
						temp+= "";
					}
					temp += d.includes[i].ctb[k].name;
				}
				title += divify(temp, "includename");
			}
			if (d.includes[i].nrt){
				title += divify((d.includes[i].nrt[0].role + ": "), "includeprefix");
				var temp = "";
				for (var k = 0; k < d.includes[i].nrt.length; k++){
					if (k > 0){
						 temp+= "; ";
					}else{
						temp+= "";
					}
					temp += d.includes[i].nrt[k].name;
				}
				title += divify(temp, "includename");
			}
			if (d.includes[i].trl){
				title += divify((d.includes[i].trl[0].role + ": "), "includeprefix");
				var temp = "";
				for (var k = 0; k < d.includes[i].trl.length; k++){
					if (k > 0){
						 temp+= "; ";
					}else{
						temp+= "";
					}
					temp += d.includes[i].trl[k].name;
				}
				title += divify(temp, "includename");
			}
			/*******************/
			
			

		}
	}

	return title;
}

function displaytitle(d) {
	var title = "";
	
	if (d.type == "Work"){
        var orgtitle = [];
        if (d.title){
            orgtitle.push(d.title);
        }
	
        if (d.subtitle){
            if (d.numbering && d.numbering.length > 0){
                orgtitle.push(". " + d.numbering);
            }
           orgtitle.push(". " + d.subtitle);
        }
		
    	title += divify(orgtitle.join(" "), "orgworktitle");
    	
    	//Creating a single string for title, numbering and subtitle
    	var engtitle = [];
    		
    	title += divify(engtitle.join(" "), "orgworktitle");		
    	title += "<div class='table'>";
    	
    	if (d.date && d.date.length > 0){
    		title += "<div class='tablerow'>";
    		title += divify("year:", "tableprefix");
    		title += "<div class='tabledata'>";
    		title += divify(d.date, "workdate");
    		title += "</div class='tabledata'>";
    		title += "</div class='tablerow'>";
    	}
    	if (d.aut){
    		title += "<div class='tablerow'>";
    		title += divify((d.aut[0].role+ ": "), "tableprefix");
    		var temp = "";
    		for (var i = 0; i < d.aut.length; i++){
    			if (i > 0){
    				 temp+= " <br> ";
    			}else{
    				temp+= " ";
    			}
    			temp += d.aut[i].name;
    		}
    		title += divify(temp, "tabledata");
    		title += "</div class='tablerow'>";
    	}
    	if (d.edt){
    		title += "<div class='tablerow'>";
    		title += divify((d.edt[0].role+ ": "), "tableprefix");
    		var temp = "";
    		for (var i = 0; i < d.edt.length; i++){
    			if (i > 0){
    				 temp+= " <br> ";
    			}else{
    				temp+= " ";
    			}
    			temp += d.edt[i].name;
    		}
    		title += divify(temp, "tabledata");
    		title += "</div class='tablerow'>";
    	}
    	if (d.drt){
    		title += "<div class='tablerow'>";
    		title += divify((d.drt[0].role+ ": "), "tableprefix");
    		var temp = "";
    		for (var i = 0; i < d.drt.length; i++){
    			if (i > 0){
    				 temp+= " <br> ";
    			}else{
    				temp+= " ";
    			}
    			temp += d.drt[i].name;
    		}
    		title += divify(temp, "tabledata");
    		title += "</div class='tablerow'>";
    	}
    	if (d.aus){
    		title += "<div class='tablerow'>";
    		title += divify((d.aus[0].role+ ": "), "tableprefix");
    		var temp = "";
    		for (var i = 0; i < d.aus.length; i++){
    			if (i > 0){
    				 temp+= " <br> ";
    			}else{
    				temp+= " ";
    			}
    			temp += d.aus[i].name;
    		}
    		title += divify(temp, "tabledata");
    		title += "</div class='tablerow'>"
    	}
    	if (d.aui){
    		title += "<div class='tablerow'>";
    		title += divify((d.aui[0].role+ ": "), "tableprefix");
    		var temp = "";
    		for (var i = 0; i < d.aui.length; i++){
    			if (i > 0){
    				 temp+= " <br> ";
    			}else{
    				temp+= " ";
    			}
    			temp += d.aui[i].name;
    		}
    		title += divify(temp, "tabledata");
    		title += "</div class='tablerow'>";
    	}
    	if (d.ill){
    		title += "<div class='tablerow'>";
    		title += divify((d.ill[0].role+ ": "), "tableprefix");
    		var temp = "";
    		for (var i = 0; i < d.ill.length; i++){
    			if (i > 0){
    				 temp+= " <br> ";
    			}else{
    				temp+= " ";
    			}
    			temp += d.ill[i].name;
    		}
    		title += divify(temp, "tabledata");
    		title += "</div class='tablerow'>";
    	}
    	if (d.pro){
    		title += "<div class='tablerow'>";
    		title += divify((d.pro[0].role+ ": "), "tableprefix");
    		var temp = "";
    		for (var i = 0; i < d.pro.length; i++){
    			if (i > 0){
    				 temp+= " <br> ";
    			}else{
    				temp+= " ";
    			}
    			temp += d.pro[i].name;
    		}
    		title += divify(temp, "tabledata");
    		title += "</div class='tablerow'>";
    	}
    	if (d.cmp){
    		title += "<div class='tablerow'>";
    		title += divify((d.cmp[0].role+ ": "), "tableprefix");
    		var temp = "";
    		for (var i = 0; i < d.cmp.length; i++){
    			if (i > 0){
    				 temp+= " <br> ";
    			}else{
    				temp+= " ";
    			}
    			temp += d.cmp[i].name;
    		}
    		title += divify(temp, "tabledata");
    		title += "</div class='tablerow'>";
    	}
        if (d.lyr){
        	title += "<div class='tablerow'>";
        	title += divify((d.lyr[0].role+ ": "), "tableprefix");
        	var temp = "";
        	for (var i = 0; i < d.lyr.length; i++){
        		if (i > 0){
        			 temp+= " <br> ";
        		}else{
        			temp+= " ";
        		}
        		temp += d.lyr[i].name;
        	}
        	title += divify(temp, "tabledata");
            title += "</div class='tablerow'>";
        }	
    	if (d.act){
    	    title += "<div class='tablerow'>";
    		title += divify((d.act[0].role+ ": "), "tableprefix");
    		var temp = "";
    		for (var i = 0; i < d.act.length; i++){
    			if (i > 0){
    				 temp+= " <br> " ;
    			}else{
    				temp+= " ";
    			}
    			temp += d.act[i].name;
    		}
    		title += divify(temp, "tabledata");
            title += "</div class='tablerow'>";
    	}   		
    	if (d.genre && d.genre.length > 0){
    		title += "<div class='tablerow'>";
    		title += divify("genre:", "tableprefix");
    		title += "<div class='tabledata'>";
    		title += divify(d.genre, "workgenre");
    		title += "</div class='tabledata'>";
    		title += "</div class='tablerow'>";
    	}	
    	if (d.description && d.description.length > 0){
    		title += "<div class='tablerow'>";
    		title += divify("contents:", "tableprefix");
    		title += "<div class='tabledata'>";
    		title += divify(d.description.replace(/@/g, "\""), "workdescription");
    		title += "</div class='tabledata'>";
    		title += "</div class='tablerow'>";
    	}  
    	title += "</div class='table'>";

	}else if(d.type == "Expression"){
		
		//title = divify(d.language, "expressionlanguage");
	    //title += divify(d.form, "expressionform");
		if (d.abr){
			title += divify((d.abr[0].role + ": "), "realizerprefix");
			var temp = "";
			for (var i = 0; i < d.abr.length; i++){
				if (i > 0){
					 temp+= "<br> ";
				}else{
					temp+= " ";
				}
				temp += d.abr[i].name;
			}
			title += divify(temp, "realizername");
		}
		if (d.ctb){
			title += divify((d.ctb[0].role + ": "), "realizerprefix");
			var temp = "";
			for (var i = 0; i < d.ctb.length; i++){
				if (i > 0){
					 temp+= "<br> ";
				}else{
					temp+= " ";
				}
				temp += d.ctb[i].name;
			}
			title += divify(temp, "realizername");
		}
		if (d.nrt){
			title += divify((d.nrt[0].role + ": "), "realizerprefix");
			var temp = "";
			for (var i = 0; i < d.nrt.length; i++){
				if (i > 0){
					 temp+= "<br> ";
				}else{
					temp+= " ";
				}
				temp += d.nrt[i].name;
			}
			title += divify(temp, "realizername");
		}
		if (d.trl){
			title += divify((d.trl[0].role + ": "), "realizerprefix");
			var temp = "";
			for (var i = 0; i < d.trl.length; i++){
				if (i > 0){
					 temp+= "<br> ";
				}else{
					temp+= " ";
				}
				temp += d.trl[i].name;
			}
			title += divify(temp, "realizername");
		}
		if (d.subtype){
			title += divify(d.subtype, "subtype");
		}
	
	}else if(d.type == "Manifestation"){
	   title += displaymanifestation(d, true);
	
        /*
        var	title = divify(d.title, "manifestationtitlelist");
        if (d.subtitle){
        	title += divify(d.subtitle, "manifestationsubtitle");
        }
	
        
        title += "<div class='tablerow'>";
        title += "<div class='empty'></div>";
        
        title += "</div class='tablerow'>";
	  
	    if (d.publisherdate){
			title += "<div class='tablerow'>";
			title += divify("year:", "tableprefix");
			title += divify(d.publisherdate, "tabledata");
			title += "</div class='tablerow'>";
		}
	  
	  title += "<div class='tablerow'>";
	  title += divify("format:", "tableprefix");
	  title += "<div class='tabledata'>";
		var mf = [];
		if (d.mediatype){
			mf.push(d.mediatype);
		}
		if (d.format){
			mf.push(d.format);
		}
		if (mf.length > 0){
			title += divify(mf.join(" - "), "mediatype");
		}
		title += "</div class='tabledata'>";
		title += "</div class='tablerow'>";
		
		if (d.publishername){
			title += "<div class='tablerow'>";
			title += divify("publisher:", "tableprefix");
			title += divify(d.publishername, "tabledata");
			title += "</div class='tablerow'>";
		}
		
		if (d.edition){
			title += "<div class='tablerow'>";
			title += divify("edition:", "tableprefix");
			title += divify(d.edition, "manifestationedition");
			title += "</div class='tablerow'>";
		}

		if (d.extent){
			title += "<div class='tablerow'>";
			title += divify("description:", "tableprefix");
			title += divify(d.extent, "tabledata");
			title += "</div class='tablerow'>";
		}*/
 
		
		/*if (d.includes){
			title += divify("Contents: " , "includesleader");
			for (var i = 0; i < d.includes.length; i++){
				title += divify(d.includes[i].title, "includetitle");
				if(d.includes[i].lsubtitle){
					title += divify(d.includes[i].lsubtitle, "includesubtitle");
				}
				title += divify(" by ", "includeprefix");
				title += divify(d.includes[i].by[0].name, "includename");
				if(d.includes[i].language){
					title += divify(d.includes[i].language, "includelanguage");
				}
				if(d.includes[i].form){
					title += divify(d.includes[i].form, "includeform");
				}
			}
		}
		if (d.s){
			title += divify(" versions: ", "versionleader");
			for (var i = 0; i < d.s.length; i++){
				title += divify(d.s[i].mediatype, "mediatype");
				title += divify(d.s[i].format, "format");
			}
		}*/
		
	
			
	}else if(d.type == "Category"){
		title = "";
		if (d.label){
			title += divify(d.label, "categorylabel");
		}else if (d.subtype){
			title += divify(d.subtype, "categorytype")
		}
	}else if(d.type == "Person"){
		title = divify(d.name, "creatorname");
		if (d.date){
			title += divify(d.date, "creatordate");
		}
	}
	
	return title;
	
}

function label_multiline(d) {
	var lines = [];
	if (d.type == "Work"){
		var title = ""
		if (d.numbering){
			title += d.numbering + ". ";
		}
		/*if (d.lsubtitle && d.lsubtitle.length > 0){
			title += d.lsubtitle;
		}else */if (d.subtitle && d.subtitle.length > 0){
			title = d.subtitle;
		/*}else if(d.ltitle && d.ltitle.length > 0){
			title = d.ltitle;*/
		}else if(d.title && d.title.length > 0){
			title = d.title;
		}
		if (title.length > 15){
			bpos = title.indexOf(" ", 10);
			if (bpos > 0){
				lines.push(title.substring(0, bpos));
				lines.push(title.substring(bpos, title.length));
				
			}else{
				lines.push(title);
			}
		}else{
			lines.push(title);
		}
		
	}else if(d.type == "Expression"){
		if (d.abr){
			//lines.push((d.abr[0].role + ": "));
			var rolewords = d.abr[0].role.split(" ");
			for (var i = 0; i < rolewords.length; ++i){
				lines.push(rolewords[i]);
			}
			var temp = "";
			for (var i = 0; i < d.abr.length; i++){
				if (i > 0){
					 temp+= " ,";
				}else{
					temp+= " ";
				}
				temp += d.abr[i].name;
			}
			lines.push(temp.split(",")[0]);
		}
		else if (d.nrt){
			var rolewords = d.nrt[0].role.split(" ");
			for (var i = 0; i < rolewords.length; ++i){
				lines.push(rolewords[i]);
			}
			var temp = "";
			for (var i = 0; i < d.nrt.length; i++){
				if (i > 0){
					 temp+= " ,";
				}else{
					temp+= " ";
				}
				temp += d.nrt[i].name;
			}
			lines.push(temp.split(",")[0]);
		}
		else if (d.trl){
			var rolewords = d.trl[0].role.split(" ");
			for (var i = 0; i < rolewords.length; ++i){
				lines.push(rolewords[i]);
			}
			var temp = "";
			for (var i = 0; i < d.trl.length; i++){
				if (i > 0){
					 temp+= "; ";
				}else{
					temp+= " ";
				}
				temp += d.trl[i].name;
			}
			lines.push(temp.split(",")[0]);
		}else if (d.label){
			var labelwords = d.label.split(" ");
			for (var i = 0; i < labelwords.length; i++){
				lines.push(labelwords[i]);
			}
		}
		if (d.subtype){
			lines.push(d.subtype);
		}
	
	}else if(d.type == "Manifestation"){
		lines.push(d.publisherdate);
/*		if (d.subtitle){
			lines.push(d.subtitle);
		}

		if (d.edition){
			lines.push(d.edition);
		}

		if (d.publishername){
			lines.push(d.publishername);
		}*/
		
		if (d.mediatype){
			lines.push(d.mediatype);
		}
		
		if (d.format){
			lines.push(d.format);
		}
		
		
			
	}else if(d.type == "Category"){
		if (d.label){
			var sp = d.label.split(" ");
			for (var i = 0; i < sp.length; i++){
				lines.push(sp[i]);
			}
		}else{
			lines.push("none");
		}
		
	}else if(d.type == "Person"){
		if (d.name){
			lines.push(d.name.split(",")[0]  + ",");
			lines.push(d.name.split(",")[1]  + ",");
			lines.push(d.date);
		}else{
			lines.push("none");
		}
		
	}
	for (var l = (lines.length - 1); l < 3; ++l){
		lines.push("");
	}
	
	return lines;
	
	
}



/*function displayshorttitle(d, short) {
	t = "";
	if (d.type == "Work"){
		if (d.numbering){
			title += d.numbering + ". ";
		}
		if (d.lsubtitle && d.lsubtitle.length > 0){
			t += d.lsubtitle;
		}else if (d.subtitle && d.subtitle.length > 0){
			t = d.subtitle;
		}else if (d.lnumbering && d.lnumbering.length > 0){
			t =  d.lnumbering;
		}else if (d.numbering && d.numbering.length > 0){
			t =  d.numbering;
		}else if(d.ltitle && d.ltitle.length > 0){
			t =  d.ltitle;
		}else if(d.title && d.title.length > 0){
			t =  d.title;
		}
		else{
			t = "none";
		}
	}else if(d.type == "Expression"){
		title = ""
		if (d.form){
			title += d.form;
			if (d.language){
				title += " / " + d.language;
			}
			t = title;
		}else if(d.language){
			t = d.language;
		}else{
			t = "none";
		}
	
	}else if(d.type == "Manifestation"){
		if (d.publisherdate){
			t = d.publisherdate;
		}else if (d.publishername){
			t = d.publishername;
		}else{
			t = "none";
		}
		
	}else if(d.type == "Category"){
		if (d.label){
			t = d.label;
		}else{
			t = "none";
		}
		
	}else if(d.type == "Person"){
		if (d.name){
			t = d.name;
		}else{
			t = "none";
		}
		if (d.date){
			t += " " + d.date;
		}
	}
	
	if (short == true){
		pos = t.substring(0,15).lastIndexOf(" ");
		if (pos > 10){
			return t.substring(0, pos).trim();
		}else{
			return t.substring(0, 15).trim();
		}
	}else{
		return t;
	}
	
	
}*/


function displaymediumtitle(d, isShort) {
	t = "";
	if (d.type == "Work"){
		if (d.numbering){
			t += d.numbering + ". ";
		}
		/*if (d.lsubtitle && d.lsubtitle.length > 0){
			t += d.lsubtitle;
		}else*/ if (d.subtitle && d.subtitle.length > 0){
			t += d.subtitle;
		/*}else if(d.ltitle && d.ltitle.length > 0){
			t +=  d.ltitle;*/
		}else if(d.title && d.title.length > 0){
			t +=  d.title;
		}
		else{
			t += "none";
		}
	}else if(d.type == "Expression"){
		if (d.abr){
			t += d.abr[0].role + ": ";
			var temp = "";
			for (var i = 0; i < d.abr.length; i++){
				if (i > 0){
					 temp+= "; ";
				}else{
					temp+= " ";
				}
				temp += d.abr[i].name;
			}
			t += temp;
		}/*else if (d.ctb){
			t += d.ctb[0].role + ": ";
			var temp = "";
			for (var i = 0; i < d.ctb.length; i++){
				if (i > 0){
					 temp+= " ,";
				}else{
					temp+= " ";
				}
				temp += d.ctb[i].name;
			}
			t += temp;
		}*/
		else if (d.nrt){
			t += d.nrt[0].role + ": ";
			var temp = "";
			for (var i = 0; i < d.nrt.length; i++){
				if (i > 0){
					 temp += "; ";
				}else{
					temp += " ";
				}
				temp += d.nrt[i].name;
			}
			t += temp;
		}
		else if (d.trl){
			t += d.trl[0].role + ": ";
			var temp = "";
			for (var i = 0; i < d.trl.length; i++){
				if (i > 0){
					 temp+= "; ";
				}else{
					temp+= " ";
				}
				temp += d.trl[i].name;
			}
			t  += temp;
		}else if (d.label){
			t += d.label;
		}
		if (d.subtype){
			t += " [" + d.subtype + "]";
		}
	
	}else if(d.type == "Manifestation"){
		t = d.publisherdate;
/*		if (d.subtitle){
			t += " " + d.subtitle;
		}

		if (d.edition){
			t += " " + d.edition;
		}

		if (d.publishername){
			t += " " + d.publishername;
		}
		*/
		if (d.mediatype){
			t += " " + d.mediatype;
		}
		
		if (d.format){
			t += " " + d.format;
		}

		
	
			
	}else if(d.type == "Category"){
		if (d.label){
			t = d.label;
		}else{
			t = "none";
		}
		
	}else if(d.type == "Person"){
		if (d.name){
			t = d.name;
		}else{
			t = "none";
		}
		if (d.date){
			t += " " + d.date;
		}
	}
	
	if (isShort == true){
		pos = t.substring(0,15).lastIndexOf(" ");
		if (pos > 10){
			return t.substring(0, pos).trim();
		}else{
			return t.substring(0, 15).trim();
		}
	}else{
		return t;
	}
	
}



/* helper to determine current scroll position */
function getDocScrollPos() {
	var x = document.body.scrollLeft ||
			document.documentElement.scrollLeft ||
			window.pageXOffset || 0,
	y = document.body.scrollTop ||
		document.documentElement.scrollTop ||
		window.pageYOffset || 0;
	return {'x':x, 'y':y};
};
        
/* helper to position tooltip and update for an entry */
function updateTooltip(d, i, elem) { 
	if (!elem) { elem = this; }
	var bbox = elem.getBBox();
	var ctm = elem.getScreenCTM();
	var spos = getDocScrollPos();
	tooltip.style("top", (Math.ceil(bbox.y + ctm.f))+"px")
		.style( "left", (Math.ceil(bbox.x + ctm.e + bbox.width))+"px")
		.style("visibility", "visible")
		.property("active_entry", d.id)
		.html(get_tooltip_html(d));
	};

 /* helper to build the tooltip html for an entry */
function get_tooltip_html(d) {
	return displaytitle(d);
	
	//"<dl class='hdr'>" +
    //            "<dt>" + displaytitle(d) + "</dt>" 
    //        "</dl>";
        };