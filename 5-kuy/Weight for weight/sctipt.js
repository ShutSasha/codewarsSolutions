function orderWeight (strng) {

	if (strng.length == 0)
		return '';

	let str = strng.split(' ')
		.sort((a, b) => a.split('').map(Number)
			.reduce((total, item) => total + item) - b.split('').map(Number).reduce((total, item) => total + item))
		.map(Number);

	const sum = el => el.split('').map(Number).reduce((total, item) => total + item);

	let reallyArr = [];

	for (let i = 0; i < str.length; i++) {

		let count = 0;

		for (let j = i + 1; j < str.length; j++) {

			if (sum(String(str[i])) == sum(String(str[j])))
				count++

		}

		if (count >= 1) {
			i = -1;
			let el = str.splice(0, count + 1).sort();
			reallyArr = reallyArr.concat(el);
		}

		else if (count == 0) {
			let el = str.splice(0, 1).sort();
			reallyArr = reallyArr.concat(el);
			i = -1;
		}

		if (str.length == 0)
			break;

	}
	return reallyArr.join(' ');
}
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));