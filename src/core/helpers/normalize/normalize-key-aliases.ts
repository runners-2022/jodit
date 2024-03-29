
/**
 * @module helpers/normalize
 */

import type { IDictionary } from 'jodit/types';
import { trim } from 'jodit/core/helpers/string/trim';
import { KEY_ALIASES } from 'jodit/core/constants';

/**
 * Normalize keys to some standard name
 */
export function normalizeKeyAliases(keys: string): string {
	const memory: IDictionary<boolean> = {};

	return keys
		.replace(/\+\+/g, '+add')
		.split(/[\s]*\+[\s]*/)
		.map(key => trim(key.toLowerCase()))
		.map(key => KEY_ALIASES[key] || key)
		.sort()
		.filter(key => !memory[key] && key !== '' && (memory[key] = true))
		.join('+');
}
