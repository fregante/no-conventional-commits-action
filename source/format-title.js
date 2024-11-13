const types = [
	'feat',
	'fix',
	'chore',
	'revert',
	'style',
	'docs',
	'build',
	'refactor',
	'test',
	'ci',
	'perf',
];

// Using https://www.conventionalcommits.org/ as a reference.
const conventionalCommitRegex = /^(?<type>TYPES)(?:\((?<scope>.+)\))?(?<major>!)?: /;

export function formatTitle(title, {
	uppercaseFirstLetter,
} = {}) {
	const customRegex = conventionalCommitRegex.source.replace('TYPES', types.join('|'));
	title = title.replace(new RegExp(customRegex), '');

	if (uppercaseFirstLetter) {
		title = title.charAt(0).toUpperCase() + title.slice(1);
	}

	return title;
}
