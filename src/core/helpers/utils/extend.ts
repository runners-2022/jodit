/**
 * @module helpers/utils
 */

import { stringify } from '../string/stringify';

export function isAtom(obj: unknown): boolean {
	return obj && (obj as any).isAtom;
}

export function markAsAtomic<T>(obj: T): T {
	Object.defineProperty(obj, 'isAtom', {
		enumerable: false,
		value: true,
		configurable: false
	});

	return obj;
}

export function fastClone<T>(object: T): T {
	return JSON.parse(stringify(object));
}
