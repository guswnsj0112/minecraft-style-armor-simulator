function mineralToHex(mineral){
	const colors = ['#CD7F32', '#C0C0C0', '#FFD700', '#B9F2FF'];
	if (mineral === "bronze"){
		return colors[0];
	} else if (mineral === "silver"){
		return colors[1];
	} else if (mineral === "gold"){
		return colors[2];
	} else if (mineral === "diamond"){
		return colors[3];
	}
};

export {mineralToHex};