function(context, args)
{
	var ez_X=["open","unlock","release"];
	var s="";
	var prime=[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
	for(var k=0; k<3; k++)
	{
		s=args.target.call({ez_21 : ez_X[k] ,ez_35: ez_X[k], ez_40:ez_X[k], ez_prime:prime[p]})
		#D({ez_21 : ez_X[k] ,ez_35: ez_X[k], ez_40 : ez_X[k]});
		#D(s);
		if(s.includes("digit"))
		{
			#D("digit" + "solution was ")
			for(var d=0; d<10; d++){
				s=args.target.call({ez_21:ez_X[k] ,ez_35: ez_X[k], digit : d})
				#D(s + " end of s")
				if(s.includes("LOCK_UNLOCKED EZ_35") === true)
				{
					#D(
					"{"+"EZ_35:"+ `"`+ ez_X[k] + `"` + " ,digit:"+ d +"}"
					)
					break;
				}	
			}
		}
	}	if(s.includes("ez_prime"))
		{
		for(var p=0;p<prime.length;p++)
			{
				s=args.target.call({ez_21 : ez_X[k] ,ez_35: ez_X[k], ez_40:ez_X[k], ez_prime:prime[p]})
				if(s.includes("LOCK_UNLOCKED EZ_40")===true)
				{
					break;
				}
			}
		}
	return { ok:true};
}
