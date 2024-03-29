
/**
 * @module ui
 */

import type {
	Buttons,
	Controls,
	IControlTypeStrong,
	IDictionary
} from 'jodit/types';
import { getControlType } from './get-control-type';
import { Config } from 'jodit/config';
import { isArray } from 'jodit/core/helpers/checker/is-array';
import { ConfigProto, keys } from 'jodit/core/helpers/utils';

export function getStrongControlTypes(
	items: Buttons | IDictionary<string>,
	controls?: Controls
): IControlTypeStrong[] {
	const elements = isArray(items)
		? items
		: keys(items, false).map(key => {
				const value = items[key] || {};
				return ConfigProto({ name: key }, value) as IControlTypeStrong;
		  });

	return elements.map(item =>
		getControlType(item, controls || Config.defaultOptions.controls)
	);
}
