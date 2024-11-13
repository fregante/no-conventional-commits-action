import {describe, it, expect} from 'vitest';
import {formatTitle} from './format-title.js';

describe('formatTitle', () => {
	it('drops simple keywords', () => {
		expect(formatTitle('feat: make something')).toBe('make something');
		expect(formatTitle('fix: fix something')).toBe('fix something');
		expect(formatTitle('chore: chore something')).toBe('chore something');
		expect(formatTitle('revert: revert something')).toBe('revert something');
		expect(formatTitle('style: style something')).toBe('style something');
		expect(formatTitle('docs: docs something')).toBe('docs something');
		expect(formatTitle('build: build something')).toBe('build something');
		expect(formatTitle('refactor: refactor something')).toBe('refactor something');
		expect(formatTitle('test: test something')).toBe('test something');
		expect(formatTitle('ci: ci something')).toBe('ci something');
		expect(formatTitle('perf: perf something')).toBe('perf something');
	});

	it('drops simple keywords with scope', () => {
		expect(formatTitle('fix(scope): stuff')).toBe('stuff');
		expect(formatTitle('feat(scope and words): stuff')).toBe('stuff');
		expect(formatTitle('feat(scope-and-dashes): stuff')).toBe('stuff');
	});

	it('drops simple keywords with scope and major', () => {
		expect(formatTitle('fix(scope)!: stuff')).toBe('stuff');
		expect(formatTitle('feat(scope and words)!: stuff')).toBe('stuff');
		expect(formatTitle('feat(scope-and-dashes)!: stuff')).toBe('stuff');
	});

	it('applies uppercase first letter', () => {
		expect(formatTitle('feat: make something', {uppercaseFirstLetter: true})).toBe('Make something');
		expect(formatTitle('fix something', {uppercaseFirstLetter: true})).toBe('Fix something');
	});
});
