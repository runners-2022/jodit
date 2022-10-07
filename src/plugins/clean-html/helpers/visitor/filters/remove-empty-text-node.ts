
/**
 * @module plugins/clean-html
 */

import type { IJodit, Nullable } from 'jodit/types';
import { Dom } from 'jodit/core/dom/dom';

/**
 * @private
 */
export function removeEmptyTextNode(
	jodit: IJodit,
	node: Node,
	hadEffect: boolean,
	arg: unknown,
	argi: unknown,
	currentNode: Nullable<Node>
): boolean {
	if (Dom.isText(node) && !node.nodeValue) {
		if (node === currentNode && jodit.s.isCollapsed()) {
			jodit.s.setCursorAfter(node);
		}

		Dom.safeRemove(node);
		return true;
	}

	return hadEffect;
}
