
function getXMLextactFeatures{
 
            xmlhttp=new XMLHttpRequest();
            xmlhttp.open("GET",addresses[i],false);
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
}


function assemblearray(type,desc,stat,start,end){
// so I have my data in 5 arrays
// with my five arrays, combine them to create an array of arrays. 
// my arrays are type, desc, stat, start, end
            var protein = [];
            var colour = ["blue", "green", "red", "black", "brown", "orange", "blue", "green", "red", "black", "brown", "orange",];

            for (i = 0; i < type.length; ++i)
                {
                    protein[i] =Array(UniIDs[k], type[i], desc[i], stat[i], start[i], end[i], colour[i]);
                 }

// done - it works. I have an array of arrays that I can use to render the molecule


function removeUnwanted(){
// The next step has been created to remove  unwanted Features (variable notwantedFeatures)

    var toBeSpliced = [];
    var notwantedFeatures = ["signal peptide",  "glycosylation site", "disulfide bond", 
                             "splice variant", "sequence variant", "sequence conflict", 
                             "strand", "helix", "initiator methionine", "turn",
                             "mutagenesis site", "cross-link", "modified residue"
                             ];

// Loop through the list of Feature Types and find the "unwanted" features - needs two loops - one through array type and one through array notwantedFeatures.

    for (i = 0; i < type.length; i++)      
             {
             for(j = 0; j<notwantedFeatures.length; j++)
                {
                if (type[i] ===  notwantedFeatures[j])
                      {                  
                         toBeSpliced.push([i]);
                      }
               }       
             }

// Reverse the list so as to delete from the end. This avoids lots of confusion caused by deleting from the begining.

    toBeSpliced.reverse();

// Loop through and splice out from the end of the array 
    for (i = 0; i < toBeSpliced.length; i++)
            {
                x = toBeSpliced[i];
                protein.splice(x, 1);
                type.splice(x,1)
            }
}
}

// Write the results to check. 
     document.write("<br>");     
     document.write("<br>");
     document.write("Sliced Protein");
     document.write("<br>");
     document.write(protein);


</script>

</body>
</html>