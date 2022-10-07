
/**
 * @module helpers/utils
 */

import type { IDictionary } from 'jodit/types';
import { isPlainObject } from '../checker/is-plain-object';

/**
 * Build query string
 */
export const buildQuery = (data: IDictionary, prefix?: string): string => {
	const str: string[] = [];

	const enc = encodeURIComponent;

	for (const dataKey in data) {
		if (Object.prototype.hasOwnProperty.call(data, dataKey)) {
			const k = prefix ? prefix + '[' + dataKey + ']' : dataKey;
			const v = data[dataKey];

			str.push(
				isPlainObject(v) ? buildQuery(v, k) : enc(k) + '=' + enc(v)
			);
		}
	}

	return str.join('&');
};
