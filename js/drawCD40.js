    // This WORKS coded 20140408 - excellent....
    
    // This is CD40 in JSON format

    var CD40 = [
        {"Name":"Topological domain", "start":21, "end": 193, "Info":"Extracellular Potential", "color":"blue"},
        {"Name":"Transmembrane", "start":194, "end": 215, "Info":"Helical; Potential", "color":"green"},
        {"Name":"Topological domain", "start":216, "end": 277, "Info":"Cytoplasmic Potential", "color":"red"},
        {"Name":"Repeat", "start":25, "end": 60, "Info":"TNFR-Cys 1", "color":"black"},
        {"Name":"Repeat", "start":61, "end": 103, "Info":"TNFR-Cys 2", "color":"black"},
        {"Name":"Repeat", "start":104, "end": 144, "Info":"TNFR-Cys 3", "color":"black"},
        {"Name":"Repeat", "start":145, "end": 187, "Info":"TNFR-Cys 4", "color":"black"}];

        
    // It's good practice to generate an svg container that is as large as we need.
        var svgContainer = d3.select("#moleculearea").append("svg")
                                   .attr("width", 500)
                                   .attr("height", 500);
 
    // This binds the data in jsonRectangles_CD40 to the rectangles.
        var rectangles = svgContainer.selectAll("rect")
                            .data(CD40)
                             .enter()
                             .append("rect");
                             
    // This creates the rectangles using the bound data
        var rectangleAttributes = rectangles
                          .attr("x", 10)
                          .attr("y", function (d) { return d.start; })
                          .attr("height", function (d) { return (d.end - d.start); })
                          .attr("width", 20)
                          .style("fill",  function(d) { return d.color; });
        
    // add some text
    //Add the SVG Text Element to the svgContainer
        var text = svgContainer.selectAll("text")
                        .data(CD40)
                        .enter()
                        .append("text");

    //Add SVG Text Element Attributes
        var textLabels = text
                 .attr("x", 35)
                 .attr("y", function (d) { return (d.start+(d.end-d.start)/2); })
                 .text( function (d) { return d.Name + ", " + d.Info ; })
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "10px")
                 .attr("fill", "red");    
        
