function(context, args)
{
	var ez_X=["open","unlock","release"];
	var unloc="!LOCK_UNLOCKED".length;
	var s="";
	var GC=false;
	for(var k=0; k<3; k++)
	{
		s=args.target.call({ez_21: ez_X[k])
		if(s.substr(0,unloc) === "!LOCK_UNLOCKED")
		{
			GC=true;
			break;
		}
	}
	var caller = context.caller;
	var l = #s.scripts.lib();
	return { ok:false };
}
