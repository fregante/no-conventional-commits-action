import {
	getBooleanInput,
} from '@actions/core';

export function getInputs() {
	const uppercaseFirstLetter = getBooleanInput('uppercase-first-letter');
	const dryRun = getBooleanInput('dry-run');
	return {
		uppercaseFirstLetter,
		dryRun,
	};
}
