function divide(numerator, denominator) {
	if (denominator == 0) {
		throw new Error('Zero Division Error');
	} else if (typeof numerator != 'number' || typeof denominator != 'number') {
		throw new Error('Numerator or denominator is not a number');
	}
	return numerator / denominator;
}

try {
	const result = divide(8, 2);
	console.log(result);
} catch (error) {
	console.log('Error: ', error.message);
} finally {
	console.log('The work is finished');
}

try {
	const result = divide(4, 0);
	console.log(result);
} catch (error) {
	console.log('Error: ', error.message);
} finally {
	console.log('The work is finished');
}

try {
	const result = divide(10, 'Five');
	console.log(result);
} catch (error) {
	console.log('Error: ', error.message);
} finally {
	console.log('The work is finished');
}

try {
	const result = divide('Ten', 2);
	console.log(result);
} catch (error) {
	console.log('Error: ', error.message);
} finally {
	console.log('The work is finished');
}
