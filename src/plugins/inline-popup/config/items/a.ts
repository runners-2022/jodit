/**
 * @module plugins/inline-popup
 */

import type { IControlType, IJodit } from 'jodit/types';
import { attr } from 'jodit/core/helpers/utils';

export default [
	{
		name: 'eye',
		tooltip: 'Open link',
		exec: (editor: IJodit, current): void => {
			const href = attr(current as HTMLElement, 'href');

			if (current && href) {
				editor.ow.open(href);
			}
		}
	},
	{
		name: 'link',
		tooltip: 'Edit link',
		icon: 'pencil'
	},
	'unlink',
	'brush',
	'file'
] as Array<IControlType | string>;
