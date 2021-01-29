for (x in statistics) {
	if (x.charAt(0) === 'r' || statistics[x] % 2 != 0) {
		console.log(statistics[x]);
	}
}
