function(context, args)
{
	var ez_X=["open","unlock","release"];
	var s= /(EZ_\d{2}|c00[1-3])/g; 
	var answer={};
	var t=args.target.call(answer);
	var prime=[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
	var colors = ["red", "blue", "green", "yellow" ,"orange", "purple" ,"cyan" ,"lime"];
	var e=0;
	var ez;
	t=args.target.call(answer);
	#D(t);
	while((ez = s.exec(t)) !== null)
	{
			t=args.target.call(answer);
			if (/EZ_\d{2}/.exec(t)) //some how check if its an EZ_(21, 35, 40) lock
			{
				for(var d=0; d<3; d++) //ez_ loop
					{
						answer[ez[e]] = ez_X[d];
						t=args.target.call(answer);
					if (t.includes("ez_prime")) //prime's loop
					{
					for (var p=0; t.includes("prime"); p++)
						{answer.ez_prime = prime[p];
						t=args.target.call(answer);}	
					}
					if(t.includes("digit")) //digit loop
					{							for (var q =0; t.includes("digit"); q++)
							{answer.digit = q;
							t=args.target.call(answer);}
					}
				#D(t + JSON.stringify(answer));
					}
			}
			//somehow check if its a c00(1-3) lock
			if(/c00\d/.exec(t)){
			for(var x = 0; x<colors.length; x++)
				{
				#D("1")
				if(/c001/.exec(t)) //c001
				{
						#D(1.2)
					for (var C=0; /(c001|color)/.exec(t); C++)
					{
						answer.c001 = colors[C];
						answer.color_digit = colors[C].length;
						t=args.target.call(answer)
						#D(t)
					}
					c = 0;
				}
				#D("2")
				if(/c002/.exec(t)) //c002
				{
					for(var C=0;/(c002|complement|color)/.exec(t); C++)
					{
						answer.c002 = colors[C];
						answer.c002_complement = colors[C + 2];
						t=args.target.call(answer)
						#D(t)
					}
					c=0;
				}
				#D("3")
				if(/c003/.exec(t)) //c003
				{
					for(var C=0; /(c003|c003_triad_1)/.exec(t); C++)
					{
						answer.c001 = colors[C];
						answer.color_digit = colors[C].length;
						t=args.target.call(answer)
					}
				}
				}
			e++;
			}
		#D("EOS");
		return { ok:true};
	}
}
