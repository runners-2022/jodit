/**
 * @module modules/uploader
 */

import type { Nullable } from 'jodit/types';

export * from './process-old-browser-drag';
export * from './data-uri-to-blob';
export * from './build-data';
export * from './send';
export * from './send-files';

export function hasFiles(data: Nullable<DataTransfer>): data is DataTransfer {
	return Boolean(data && data.files && data.files.length > 0);
}

export function hasItems(data: Nullable<DataTransfer>): data is DataTransfer {
	return Boolean(data && data.items && data.items.length > 0);
}
