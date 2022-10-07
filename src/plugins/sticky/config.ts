
/**
 * @module plugins/sticky
 */

import { Config } from 'jodit/config';

declare module 'jodit/config' {
	interface Config {
		/**
		 * @example
		 * ```javascript
		 * var editor = Jodit.make('#someid', {
		 *  toolbarSticky: false
		 * })
		 * ```
		 */
		toolbarSticky: boolean;

		toolbarDisableStickyForMobile: boolean;

		/**
		 * For example, in Joomla, the top menu bar closes Jodit toolbar when scrolling. Therefore, it is necessary to
		 * move the toolbar Jodit by this amount [more](http://xdsoft.net/jodit/doc/#2.5.57)
		 *
		 * @example
		 * ```javascript
		 * var editor = Jodit.make('#someid', {
		 *  toolbarStickyOffset: 100
		 * })
		 * ```
		 */
		toolbarStickyOffset: number;
	}
}

Config.prototype.toolbarSticky = true;
Config.prototype.toolbarDisableStickyForMobile = true;
Config.prototype.toolbarStickyOffset = 0;
