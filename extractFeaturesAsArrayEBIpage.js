// refactoring page from Thursday May 1st, 2014

var paul=paul || {};

paul.extractFeaturesEBIpage=function(strategy)
{
 // extract data from EBI page
 
    var UniID = strategy.UniID;

    var blocks = [{ x: 0, y: 0, }];

    // Steps complted by this script
    // Input a UniProt IDs (will also work for more than one ID). 
    // Make the URL. 
    // Go to the URL and retrieve the XML file 
    // Extract the features 
    // Remove "unwanted features"
    // Render the molecule
    // Then allow it to be dragged.  

     var address = [];
     
     address.push("http://www.uniprot.org/uniprot/" + UniID + ".xml");
 
    // show us a couple of addresses to see if it works
    alert(address);

        xmlhttp=new XMLHttpRequest();
        xmlhttp.open("GET",address,false);
        xmlhttp.send();
        xmlDoc=xmlhttp.responseXML;

  // This works to get the accession numbers and full Protein Name so I have uploaded the data - great. 
        x=xmlDoc.getElementsByTagName("accession")[0];
        y=x.childNodes[0];
        document.write(y.nodeValue);
        document.write(" ");
        x=xmlDoc.getElementsByTagName("fullName")[0];
        y=x.childNodes[0];
        document.write(y.nodeValue);
        document.write("<br>");
      


// this works and makes five arrays. 
// it also does output a list of features, a list of starts and a list of ends. 
// I can remove some of the output later


// This works to get the accession number so I have uploaded the data - great. 

 
// getting a list of features

// create variable names for the arrays
    var type = [];
    var desc = [];
    var stat = [];

// put type, description and status in arrays
    x=xmlDoc.getElementsByTagName("feature");
    for (i=0;i<x.length;i++)
       {
          type.push(x[i].getAttribute('type'));
          desc.push(x[i].getAttribute('description'));
          stat.push(x[i].getAttribute('status'));
       } 

// put start number in an array
    var start = [];

    x=xmlDoc.getElementsByTagName("begin");
    for (i=0;i<x.length;i++)
        {
          start.push(x[i].getAttribute('position'));
        } 

// put end number in an array
    var end = [];

    x=xmlDoc.getElementsByTagName("end");
    for (i=0;i<x.length;i++)
        {
            end.push(x[i].getAttribute('position'));
        } 

// so I have my data in 5 arrays
// with my five arrays, combine them to create an array of arrays. 
// my arrays are type, desc, stat, start, end
    var protein = [];
    var colour = ["blue", "green", "red", "black", "brown", "orange", "blue", "green", "red", "black", "brown", "orange",];

    for (i = 0; i < type.length; ++i)
            {           
              protein.push({'Name':type[i], 'status': stat[i], 'start':start[i],'end': end[i], 'Info': desc[i], 'color':colour[i]});
                            
            }
 
 //   var CD40 = [
 //       {"Name":"Topological domain", "start":21, "end": 193, "Info":"Extracellular Potential", "color":"blue"},
 //       {"Name":"Transmembrane", "start":194, "end": 215, "Info":"Helical; Potential", "color":"green"},
 //       {"Name":"Topological domain", "start":216, "end": 277, "Info":"Cytoplasmic Potential", "color":"red"},
 //       {"Name":"Repeat", "start":25, "end": 60, "Info":"TNFR-Cys 1", "color":"black"},
 //       {"Name":"Repeat", "start":61, "end": 103, "Info":"TNFR-Cys 2", "color":"black"},
 //       {"Name":"Repeat", "start":104, "end": 144, "Info":"TNFR-Cys 3", "color":"black"},
 //       {"Name":"Repeat", "start":145, "end": 187, "Info":"TNFR-Cys 4", "color":"black"}];

 
 
 
            
// done - it works. I have an array of arrays that I can use to render the molecule



// Write the results to check. 
     document.write("<br>");     
     document.write("<br>");
     document.write(protein);
     document.write("<br>");

};



