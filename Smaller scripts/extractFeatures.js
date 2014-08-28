function extactFeatures(UniIDs, addresses, type, proteins){
 
    for (i=0;i<UniIDs.length;i++)
    {
        xmlhttp=new XMLHttpRequest();
        xmlhttp.open("GET", addresses[i], false);
        xmlhttp.send();
        xmlDoc=xmlhttp.responseXML;

  // This works to get the accession numbers and full Protein Name so I have uploaded the data - great. 
        x=xmlDoc.getElementsByTagName("accession")[0];
        y=x.childNodes[0];
        accession = y.nodeValue
        document.write(y.nodeValue);
        document.write(" ");
        x=xmlDoc.getElementsByTagName("fullName")[0];
        y=x.childNodes[0];
        fullName = y.nodeValue
        document.write(y.nodeValue);
        document.write("<br>");
      
        var desc = [];
        var stat = [];

// put type, description and status in arrays

         x=xmlDoc.getElementsByTagName("feature");
         for (k=0;i<x.length;k++)
               {
                    type.push(x[k].getAttribute('type'));
                    desc.push(x[k].getAttribute('description'));
                    stat.push(x[k].getAttribute('status'));
                } 

// put start and end number in array
         var start = [];
         var end = [];

         x=xmlDoc.getElementsByTagName("begin");
         for (k=0;i<x.length;k++)
               {
                start.push(x[k].getAttribute('position'));
               } 
         x=xmlDoc.getElementsByTagName("end");
         for (k=0;i<x.length;k++)
                {
                 end.push(x[k].getAttribute('position'));
                } 

// so I have my data in 5 arrays
// with my five arrays, combine them to create an array of arrays. 
// my arrays are type, desc, stat, start, end

    for (k = 0; k < type.length; ++k)
            {
                push.proteins(accession, fullName, type[i], desc[i], stat[i], start[i], end[i]);
                push.types(type[i])
            }

    }
 }



