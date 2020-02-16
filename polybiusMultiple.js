const poly = text => {
	const table = [
		'entrusting',
		'quarantine',
		'unexpended',
		'improbable',
		'victorious',
		'adjuticate',
		'laboratory',
		'eighteenth',
		'naturalize',
		'thirtyfive',
	];
	const options = [];
	text
		.toLowerCase()
		.split('')
		.map(letter => {
			const wordIndices = [];
			for (let i = 0; i < table.length; i++) {
				for (let j = 0; j < table[i].length; j++) {
					if (table[i][j] === letter) {
						wordIndices.push(`${j}${i}`);
					}
				}
			}
			options.push(wordIndices);
		});
	const out = options.map(option => {
		const code = option[Math.floor(option.length * Math.random())];
		return code === undefined ? '' : code;
	});
	return out.join(' ').replace(/[ ]{2,}/g, ' ');
};

console.log(poly('sth'));
console.log(poly('Hi im Aleks'));
