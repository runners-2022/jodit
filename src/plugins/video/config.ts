/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

/**
 * @module plugins/video
 */

import type { IControlType, IJodit } from 'jodit/types';
import { Config } from 'jodit/config';
import { FileSelectorWidget } from 'jodit/modules/widget';
import { PopupTitleWidget } from 'jodit/src/modules/widget/popup-title/popup-title';
import { convertMediaUrlToVideoEmbed } from 'jodit/src/core/helpers';

Config.prototype.controls.video = {
	popup: (editor: IJodit, current, control, close) => {
		// let sourceVideo: HTMLVideoElement | null = null;

		// if (
		// 	current &&
		// 	!Dom.isText(current) &&
		// 	Dom.isHTMLElement(current) &&
		// 	(Dom.isTag(current, 'video') || $$('video', current).length)
		// ) {
		// 	sourceVideo = Dom.isTag(current, 'video')
		// 		? current
		// 		: $$('video', current)[0];
		// }

		// editor.s.save();

		return FileSelectorWidget(
			editor,
			{
				uploadVideo: true,
				url: async (url: string, text: string) => {
					editor.s.restore();
					if (/^[a-z\d_-]+(\.[a-z\d_-]+)+/i.test(url)) {
						url = '//' + url;
					}

					let element;
					const fragment = editor.c.fragment(),
						paragraph = editor.c.element('p', { class: 'p1' });

					const embed = convertMediaUrlToVideoEmbed(url, 500);
					if (embed !== url) {
						element = editor.c.fromHTML(embed) as HTMLAnchorElement;
					} else {
						element = editor.c.fromHTML(
							`<video controls style="width: ${
								editor.o.imageDefaultWidth || 500
							}px;" src="${url}" alt="${url}"/>`
						);
					}
					paragraph.appendChild(element);
					fragment.append(
						paragraph,
						editor.c.element('p', { class: 'p2' })
					);

					editor.s.insertHTML(fragment);
					// if (embed !== url) {
					// 	const video = editor.createInside.fromHTML(
					// 		embed
					// 	) as HTMLAnchorElement;
					// 	console.log(video);
					// 	editor.s.insertNode(video);
					// 	return;
					// }

					// editor.s.insertVideoUrl(
					// 	url,
					// 	null,
					// 	editor.o.imageDefaultWidth
					// );

					close();
				}
			},
			// sourceVideo,
			close
		);
	},

	popupTitle: (editor: IJodit, _: any, _1: any, close: any): HTMLElement =>
		PopupTitleWidget(editor, 'Video', close),
	popupContentExtraClassName: 'custom',

	tags: ['video'],
	tooltip: 'Insert a video',
	icon: require('./ui/video.svg')
} as IControlType;
