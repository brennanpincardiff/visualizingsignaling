function assembleAddresses(UniIds){
   for (i=0;i<UniIDs.length;i++)
        {
            addresses.push("http://www.uniprot.org/uniprot/" + UniIDs[i] + ".xml");
        } 

    // show an addresses to check it works
    alert(addresses[0]);
}

