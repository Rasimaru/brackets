module.exports = function check(str, bracketsConfig) {

	if (str.length % 2 > 0) return false; // if str length is odd no need to go next steps;

	let result = str;
	for (let i = 0; i < str.length; i++) {
		for (let j = 0; j < bracketsConfig.length; j++) {
			result = result.replace(bracketsConfig[j][0] + bracketsConfig[j][1], '');
		}
	}
	return result.length === 0;
}