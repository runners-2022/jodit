
/**
 * @module plugins/select
 */

import { Config } from 'jodit/config';

declare module 'jodit/config' {
	interface Config {
		select: {
			/**
			 * When the user selects the elements of the list - from the beginning to
			 * the end from the inside - when copying, we change the selection
			 * to cover the entire selected container
			 *
			 * `<ul><li>|test|</li></ul>` will be `|<ul><li>test</li></ul>|`
			 * `<ul><li>|test|</li><li>|test</li></ul>` will be `<ul>|<li>test</li><li>|test</li></ul>`
			 */
			normalizeSelectionBeforeCutAndCopy: boolean;
		};
	}
}

Config.prototype.select = {
	normalizeSelectionBeforeCutAndCopy: false
};
