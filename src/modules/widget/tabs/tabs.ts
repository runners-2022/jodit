/**
 * [[include:modules/widget/tabs/README.md]]
 * @packageDocumentation
 * @module modules/widget/tabs
 */

import './tabs.less';

import type { IDictionary, IJodit, IUIButton } from 'jodit/types';
import { $$, isFunction } from 'jodit/core/helpers';
import { Button, UIElement } from 'jodit/core/ui';
import { Component } from 'jodit/core/component';

export interface TabOption {
	icon?: string;
	name: string;
	content: HTMLElement | (() => void) | UIElement;
}

/**
 * Build tabs system
 *
 * @param tabs - PlainObject where 'key' will be tab's Title and `value` is tab's content
 * @param state - You can use for this param any HTML element for remembering active tab
 *
 * @example
 * ```javascript
 * let tabs = Jodit.modules.TabsWidget(editor, [
 *    {name: 'Images', content: '<div>Images</div>'},
 *    {name: 'Title 2': Jodit.modules.Helpers.dom('<div>Some content</div>')},
 *    {name: 'Color Picker': ColorPickerWidget(editor, function (color) {
 *         box.style.color = color;
 *     }, box.style.color)},
 * ]);
 * ```
 */
export const TabsWidget = (
	jodit: IJodit,
	tabs: TabOption[],
	state?: { __activeTab: string }
): HTMLDivElement => {
	const box = jodit.c.div('jodit-tabs'),
		tabBox = jodit.c.div('jodit-tabs__wrapper'),
		buttons = jodit.c.div('jodit-tabs__buttons'),
		// title = jodit.c.div('jodit-tabs__title'),
		nameToTab: IDictionary<{
			button: IUIButton;
			tab: HTMLElement;
		}> = {},
		buttonList: IUIButton[] = [];

	let firstTab: string = '',
		tabCount: number = 0;

	// 탭이 1개일 경우, 탭 내용만 추가합니다.
	box.appendChild(buttons);
	// if (tabs.length !== 1) {
	// 	box.appendChild(buttons);
	// } else {
	// 	box.appendChild(title);
	// 	tabBox.style.paddingTop = '52px';
	// 	title.innerHTML = jodit.i18n(tabs[0].name);
	// }
	box.appendChild(tabBox);

	const setActive = (tab: string): void => {
		if (!nameToTab[tab]) {
			return;
		}

		buttonList.forEach(b => {
			b.state.activated = false;
		});

		$$('.jodit-tab', tabBox).forEach(a => {
			a.classList.remove('jodit-tab_active');
		});

		nameToTab[tab].button.state.activated = true;
		nameToTab[tab].tab.classList.add('jodit-tab_active');
	};

	tabs.forEach(({ icon, name, content }) => {
		const tab = jodit.c.div('jodit-tab'),
			button = Button(jodit, icon || name, name);

		// Stop lose the focus
		jodit.e.on(button.container, 'mousedown', (e: MouseEvent) =>
			e.preventDefault()
		);

		if (!firstTab) {
			firstTab = name;
		}

		buttons.appendChild(button.container);
		buttonList.push(button);

		button.container.classList.add(
			'jodit-tabs__button',
			'jodit-tabs__button_columns_' + tabs.length
		);

		if (!isFunction(content)) {
			tab.appendChild(
				Component.isInstanceOf(content, UIElement)
					? content.container
					: content
			);
		} else {
			tab.appendChild(jodit.c.div('jodit-tab_empty'));
		}

		tabBox.appendChild(tab);

		button.onAction(() => {
			setActive(name);

			if (isFunction(content)) {
				// @ts-ignore
				content.call(jodit);
			}

			if (state) {
				state.__activeTab = name;
			}

			return false;
		});

		nameToTab[name] = {
			button,
			tab
		};

		tabCount += 1;
	});

	if (!tabCount) {
		return box;
	}

	$$('a', buttons).forEach(a => {
		a.style.width = (100 / tabCount).toFixed(10) + '%';
	});

	const tab =
		!state || !state.__activeTab || !nameToTab[state.__activeTab]
			? firstTab
			: state.__activeTab;

	setActive(tab);

	if (state) {
		let __activeTab = state.__activeTab;

		Object.defineProperty(state, '__activeTab', {
			configurable: true,
			enumerable: false,
			get() {
				return __activeTab;
			},
			set(value: string) {
				__activeTab = value;

				setActive(value);
			}
		});
	}

	return box;
};
