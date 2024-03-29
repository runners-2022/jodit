/**
 * [[include:plugins/video/README.md]]
 * @packageDocumentation
 * @module plugins/video
 */

import type { IJodit } from 'jodit/types';
import { pluginSystem } from 'jodit/core/global';

import './config';

function video(editor: IJodit): void {
	editor.registerButton({
		name: 'video',
		group: 'media'
	});
}

pluginSystem.add('video', video);
