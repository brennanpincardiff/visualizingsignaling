var paul=paul || {};

// so I have a script. 
// it will extract the protein sequence from the UniProt DAS database. 
// it will make an array. 
// the array contains id, label and the sequence. 
// Good!

paul.exSeq=function(strategy)
    {
        var UniID = strategy.UniID;
        var proteinSeq = [];
        var address = [];
        address.push("http://www.ebi.ac.uk/das-srv/uniprot/das/uniprot/sequence?segment=" + UniID);

  		xmlhttp=new XMLHttpRequest();
  		xmlhttp.open("GET",address,false);
  		xmlhttp.send();
  		xmlDoc=xmlhttp.responseXML;
  		
  		x=xmlDoc.getElementsByTagName("SEQUENCE");   
//        document.write("Accession Number:", x[0].getAttribute('id'));
        proteinSeq.push(x[0].getAttribute('id'));
        alert(proteinSeq);
//        document.write("<br>");
        proteinSeq.push(x[0].getAttribute('label'));
//        document.write(" ");
  		
  		
  		
  		x=xmlDoc.getElementsByTagName("SEQUENCE")[0]
  		y=x.childNodes[0];
  		proteinSeq.push(y.nodeValue);
  		
  		document.write(proteinSeq);
          
    };	  



