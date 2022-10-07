
/**
 * @module plugins/backspace
 */

import type { IJodit } from 'jodit/types';
import { Dom } from 'jodit/core/dom/dom';

/**
 * Check if it is possible to remove an empty adjacent element.
 *
 * @example
 * ```html
 * <p><br></p><p>|second stop</p>
 * ```
 * result
 * ```html
 * <p>|second stop</p>
 * ```
 * @private
 */
export function checkRemoveEmptyNeighbor(
	jodit: IJodit,
	fakeNode: Node,
	backspace: boolean
): boolean {
	const parent = Dom.closest(fakeNode, Dom.isElement, jodit.editor);

	if (!parent) {
		return false;
	}

	const neighbor = Dom.findNotEmptySibling(parent, backspace);

	if (neighbor && Dom.isEmpty(neighbor)) {
		Dom.safeRemove(neighbor);
		jodit.s.setCursorBefore(fakeNode);
		return true;
	}

	return false;
}
