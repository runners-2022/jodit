
/**
 * @module plugins/backspace
 */

import { checkRemoveUnbreakableElement } from './check-remove-unbreakable-element';
import { checkRemoveContentNotEditable } from './check-remove-content-not-editable';
import { checkRemoveChar } from './check-remove-char';
import { checkTableCell } from './check-table-cell';
import { checkRemoveEmptyParent } from './check-remove-empty-parent';
import { checkRemoveEmptyNeighbor } from './check-remove-empty-neighbor';
import { checkJoinTwoLists } from './check-join-two-lists';
import { checkJoinNeighbors } from './check-join-neighbors';
import { checkUnwrapFirstListItem } from './check-unwrap-first-list-item';

export const cases = [
	checkRemoveUnbreakableElement,
	checkRemoveContentNotEditable,
	checkRemoveChar,
	checkTableCell,
	checkRemoveEmptyParent,
	checkRemoveEmptyNeighbor,
	checkJoinTwoLists,
	checkJoinNeighbors,
	checkUnwrapFirstListItem
];
