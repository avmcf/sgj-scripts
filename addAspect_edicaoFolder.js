function main()
{
    var aspectProFolderProp = new Array(1);
    aspectProFolderProp["sgj:edcOperador"] = document.properties["cm:modifier"];
	document.addAspect("sgj:edicao", aspectProFolderProp);	
   
	document.save();
}	
	
main();
