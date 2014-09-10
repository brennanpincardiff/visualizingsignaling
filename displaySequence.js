var paul=paul || {};

// this script is under development. 
// the idea is to take a protein sequence and display it in an browser sympathetic fashion.  

paul.exSeq=function(strategy)
    {
        var proteinSeq = strategy.proteinSeq; 		


// if extracted as an object, the object needs to be converted into a string.           		
  		var protSeqString = String(proteinSeq);


        alert(proteinSeq.length);
        alert(protSeqString.length);
        
        document.write("<br>");

// if it's a string then the slice command will separate it.         
        var seqSlice = protSeqString.slice(0,10);
        document.write("<br>");
        document.write(seqSlice); 
        document.write("<br>");

    }	  



