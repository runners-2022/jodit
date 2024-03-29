/**
 * @module plugins/inline-popup
 */

import type { IControlType, IDictionary, IJodit } from 'jodit/types';
import { Config } from 'jodit/config';
import { Icon } from 'jodit/core/ui/icon';

declare module 'jodit/config' {
	interface Config {
		popup: IDictionary<
			| Array<IControlType | string>
			| ((
					editor: IJodit,
					target: HTMLElement | undefined,
					close: () => void
			  ) => Array<IControlType | string> | HTMLElement | string)
		>;

		toolbarInlineDisabledButtons: string[];
		toolbarInline: boolean;
		toolbarInlineForSelection: boolean;
		toolbarInlineDisableFor: string | string[];
	}
}

Config.prototype.toolbarInline = true;
Config.prototype.toolbarInlineForSelection = false;
Config.prototype.toolbarInlineDisableFor = [];
Config.prototype.toolbarInlineDisabledButtons = ['source'];

Icon.set('addcolumn', require('../icons/addcolumn.svg'))
	.set('addrow', require('../icons/addrow.svg'))
	.set('merge', require('../icons/merge.svg'))
	.set('th', require('../icons/th.svg'))
	.set('splitg', require('../icons/splitg.svg'))
	.set('splitv', require('../icons/splitv.svg'))
	.set('th-list', require('../icons/th-list.svg'))
	.set('float-align-left', require('../icons/float-align-left.svg'))
	.set('float-align-center', require('../icons/float-align-center.svg'))
	.set('float-align-right', require('../icons/float-align-right.svg'))
	.set('text-align-left', require('../icons/text-align-left.svg'))
	.set('text-align-right', require('../icons/text-align-right.svg'));

Config.prototype.popup = {
	a: require('./items/a').default,
	img: require('./items/img').default,
	cells: require('./items/cells').default,
	toolbar: require('./items/toolbar').default,
	jodit: require('./items/iframe').default,
	iframe: require('./items/iframe').default,
	'jodit-media': require('./items/iframe').default,
	selection: [
		'bold',
		'underline',
		'italic',
		'ul',
		'ol',
		'\n',
		'outdent',
		'indent',
		'fontsize',
		'brush',
		'cut',
		'\n',
		'paragraph',
		'link',
		'align',
		'dots'
	]
} as IDictionary<Array<IControlType | string>>;
