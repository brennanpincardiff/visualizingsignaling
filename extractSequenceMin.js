var paul=paul || {};


//var protSeqExt {};

// so I have a script. 
// it will extract the protein sequence from the UniProt DAS database. 
// it will make an array. 
// the array contains id, label and the sequence. 
// Good!

paul.getSeq=function(strategy)
    {
        var UniID = strategy.UniID;
        
        var proteinSeq = [];
        var address = [];
     
     // make the address of the EBI DAS server   
        address.push("http://www.ebi.ac.uk/das-srv/uniprot/das/uniprot/sequence?segment=" + UniID);
        
     // get the XML file
  		xmlhttp=new XMLHttpRequest();
  		xmlhttp.open("GET",address,false);
  		xmlhttp.send();
  		xmlDoc=xmlhttp.responseXML;		
  		
    // parse the XML file to get the required information
  		x=xmlDoc.getElementsByTagName("SEQUENCE");   
        proteinSeq.push(x[0].getAttribute('id'));
        proteinSeq.push(x[0].getAttribute('label'));
  		x=xmlDoc.getElementsByTagName("SEQUENCE")[0]
  		y=x.childNodes[0];
  		proteinSeq.push(y.nodeValue);
  		
  	// Just write it in a crude format. 	
  		document.write(proteinSeq);
        return proteinSeq;
    };	  

// protSeqExt.getSeq(); // put in to try and make BioJS compatable. 

// module.exports = protSeqExt; // Export the object for other components