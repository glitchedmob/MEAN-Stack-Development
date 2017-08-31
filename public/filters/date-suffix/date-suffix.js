angular.module('myApp').filter('dateSuffix', dateSuffix);

function dateSuffix($filter) {
	const suffixes = ['th', 'st', 'nd', 'rd'];

	return string => {
		let dtfilter = $filter('date')(string, 'dd MMMMM yyyy @ H:m:s');
		const date = parseInt(dtfilter.substr(0, 2));
		const relevantDigits = (day < 30) ? day % 20: day % 30;
		const suffix = (relevantDigits <= 3) ? suffixes[relevantDigits] : suffixes[0];
		dtfilter = dtfilter.substring(2);

		return day + suffix + dtfilter;
	}
}