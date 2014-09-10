var paul=paul || {};

// so I have a script. 
// it will extract the protein sequence from the UniProt DAS database. 
// currently it's extracted as an object. 
// 

paul.exSeq=function(strategy)
    {
        var UniID = strategy.UniID;

        var address = [];
        address.push("http://www.ebi.ac.uk/das-srv/uniprot/das/uniprot/sequence?segment=" + UniID);

  		xmlhttp=new XMLHttpRequest();
  		xmlhttp.open("GET",address,false);
  		xmlhttp.send();
  		xmlDoc=xmlhttp.responseXML;
  		
  		x=xmlDoc.getElementsByTagName("SEQUENCE");   
        document.write("Accession Number:", x[0].getAttribute('id'));
        document.write("<br>");
        document.write(x[0].getAttribute('label'));
        document.write(" ");
  		
  		proteinSeq = [];
  		x=xmlDoc.getElementsByTagName("SEQUENCE")[0]
  		y=x.childNodes[0];
  		proteinSeq.push(y.nodeValue);
  		
  		
 // 		var seqString = String(sequence);
  		alert(proteinSeq);
  //		alert(seqString.length);
  //		document.write("<br>");
 //		var seqSlice = seqString.slice(0,10);
 //		document.write("<br>");
 // 		document.write(seqSlice); 
 //       document.write("<br>");
        
    };	  



