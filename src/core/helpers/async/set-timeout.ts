
/**
 * @module helpers/async
 */

/**
 * Create async callback if set timeout value - else call function immediately
 */
export function setTimeout<T = any>(
	callback: (...args: T[]) => void,
	timeout: number,
	...args: T[]
): number {
	if (!timeout) {
		callback.call(null, ...args);
	} else {
		return window.setTimeout(callback, timeout, ...args);
	}

	return 0;
}

/**
 * Clear timeout
 */
export function clearTimeout(timer: number): void {
	window.clearTimeout(timer);
}
