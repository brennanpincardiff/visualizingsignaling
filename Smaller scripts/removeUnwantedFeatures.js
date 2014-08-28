function removeUnwantedFeatures (types, proteins){
    var toBeSpliced = [];
    var notwantedFeatures = ["signal peptide",  "glycosylation site", "disulfide bond", 
                             "splice variant", "sequence variant", "sequence conflict", 
                             "strand", "helix", "initiator methionine", "turn",
                             "mutagenesis site", "cross-link", "modified residue"
                             ];

// Loop through the list of Feature Types and find the "unwanted" features - needs two loops - one through array type and one through array notwantedFeatures.

    for (i = 0; i < types.length; i++)      
             {
             for(j = 0; j<notwantedFeatures.length; j++)
                {
                if (types[i] ===  notwantedFeatures[j])
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
                proteins.splice(x, 1);
                type.splice(x,1)
            }

// Write the results to check. 
     document.write("<br>");     
     document.write("<br>");
     document.write("Sliced Protein");
     document.write("<br>");
     document.write(proteins);
}