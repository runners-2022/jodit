
/**
 * @module helpers/utils
 */

import type { IDictionary } from 'jodit/types';
import { isFunction } from '../checker/is-function';

export const keepNames = new Map<Function, string>();

export const getClassName = (obj: IDictionary): string => {
	if (isFunction(obj.className)) {
		return obj.className();
	}

	const constructor = obj.constructor?.originalConstructor || obj.constructor;

	if (keepNames.has(constructor)) {
		return keepNames.get(constructor) as string;
	}

	if (constructor.name) {
		return constructor.name;
	}

	const regex = new RegExp(/^\s*function\s*(\S*)\s*\(/);

	const res = constructor.toString().match(regex);

	return res ? res[1] : '';
};
