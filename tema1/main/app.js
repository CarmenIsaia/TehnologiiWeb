const distance = (a, b) => {

	if(a.trim()==='' && b.trim()===''){
		return 0;
	}
	else if((typeof a ==='string' || a instanceof String) && (typeof b ==='string' || b instanceof String)){
		let nr=0;
		for(i=0;i<a.length;i++){
			let OK=0;
			for(j=0;j<b.length;j++){
				if(a.charAt(i)===b.charAt(j) && OK===0){
					nr++;
					OK=1;
				}
			}
		}
		return b.length-nr;
	}
	else{
		throw new Error('InvalidType');
	}
}
module.exports.distance = distance