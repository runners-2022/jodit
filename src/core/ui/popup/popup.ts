/**
 * [[include:core/ui/popup/README.md]]
 * @packageDocumentation
 * @module ui/popup
 */

import './popup.less';

import type {
	CanUndef,
	IBound,
	IBoundP,
	IDictionary,
	IPopup,
	IUIElement,
	IViewBased,
	Nullable,
	PopupStrategy
} from 'jodit/types';
import { Dom } from 'jodit/core/dom/dom';
import {
	assert,
	attr,
	css,
	isString,
	kebabCase,
	markOwner,
	position,
	ucfirst
} from 'jodit/core/helpers';
import { UIElement } from 'jodit/core/ui/element';
import { autobind, throttle } from 'jodit/core/decorators';
import { Component } from 'jodit/core/component/component';
import { eventEmitter, getContainer } from 'jodit/core/global';

type getBoundFunc = () => IBound;

export class Popup extends UIElement implements IPopup {
	isOpened: boolean = false;
	strategy: PopupStrategy = 'leftBottom';
	private targetBound!: () => IBound;
	private childrenPopups: Set<IPopup> = new Set();

	constructor(
		jodit: IViewBased,
		readonly smart: boolean = true,
		strategy: PopupStrategy = 'leftBottom'
	) {
		super(jodit);
		attr(this.container, 'role', 'popup');
		this.strategy = strategy;
	}

	/**
	 * Check if one box is inside second
	 */
	private static boxInView(box: IBound, view: IBound): boolean {
		const accuracy = 2;

		return (
			box.top - view.top >= -accuracy &&
			box.left - view.left >= -accuracy &&
			view.top + view.height - (box.top + box.height) >= -accuracy &&
			view.left + view.width - (box.left + box.width) >= -accuracy
		);
	}

	/** @override */
	className(): string {
		return 'Popup';
	}

	viewBound: () => IBound = (): IBound => ({
		left: 0,
		top: 0,
		width: this.ow.innerWidth,
		height: this.ow.innerHeight
	});

	/** @override */
	override updateParentElement(target: IUIElement): this {
		if (target !== this && Component.isInstanceOf<Popup>(target, Popup)) {
			this.childrenPopups.forEach(popup => {
				if (!target.closest(popup) && popup.isOpened) {
					popup.close();
				}
			});

			if (!this.childrenPopups.has(target)) {
				this.j.e.on(target, 'beforeClose', () => {
					this.childrenPopups.delete(target);
				});
			}

			this.childrenPopups.add(target);
		}

		return super.updateParentElement(target);
	}

	/**
	 * Set popup content
	 */
	setContent(
		content: IUIElement | HTMLElement | string,
		title?: IUIElement | HTMLElement | string,
		popupContentExtraClassName?: string
	): this {
		Dom.detach(this.container);

		const box = this.j.c.div(`${this.componentName}__content`);
		if (popupContentExtraClassName) {
			box.classList.add(
				`${this.componentName}__content__${popupContentExtraClassName}`
			);
		}
		let elm: HTMLElement;

		if (Component.isInstanceOf(content, UIElement)) {
			elm = content.container;
			content.parentElement = this;
		} else if (isString(content)) {
			elm = this.j.c.fromHTML(content);
		} else {
			elm = content as HTMLElement;
		}

		let titleElm: HTMLElement;
		if (Component.isInstanceOf(title, UIElement)) {
			titleElm = title.container;
			title.parentElement = this;
		} else if (isString(title)) {
			titleElm = this.j.c.fromHTML(title);
		} else {
			titleElm = title as HTMLElement;
		}

		if (titleElm) {
			box.appendChild(titleElm);
		}
		box.appendChild(elm);
		this.container.appendChild(box);

		this.updatePosition();

		return this;
	}

	/**
	 * Open popup near with some bound
	 */
	open(
		getBound: getBoundFunc,
		keepPosition: boolean = false,
		parentContainer?: HTMLElement
	): this {
		markOwner(this.jodit, this.container);

		this.calculateZIndex();

		this.isOpened = true;
		this.addGlobalListeners();

		this.targetBound = !keepPosition
			? getBound
			: this.getKeepBound(getBound);

		if (parentContainer) {
			parentContainer.appendChild(this.container);
		} else {
			const popupContainer = getContainer(this.jodit, Popup);

			if (parentContainer !== this.container.parentElement) {
				popupContainer.appendChild(this.container);
			}
		}

		this.updatePosition();

		this.j.e.fire(this, 'afterOpen');

		return this;
	}

	/**
	 * Update container position
	 */
	@autobind
	updatePosition(): this {
		if (!this.isOpened) {
			return this;
		}

		const [pos, strategy] = this.calculatePosition(
			this.targetBound(),
			this.viewBound(),
			position(this.container, this.j)
		);

		this.setMod('strategy', strategy);

		css(this.container, {
			left: pos.left,
			top: pos.top
		});

		this.childrenPopups.forEach(popup => popup.updatePosition());

		return this;
	}

	@throttle(10)
	@autobind
	throttleUpdatePosition(): void {
		this.updatePosition();
	}

	/**
	 * Close popup
	 */
	@autobind
	close(): this {
		if (!this.isOpened) {
			return this;
		}

		this.isOpened = false;

		this.childrenPopups.forEach(popup => popup.close());

		this.j.e.fire(this, 'beforeClose');
		this.j.e.fire('beforePopupClose', this);

		this.removeGlobalListeners();
		Dom.safeRemove(this.container);

		return this;
	}

	isOwnClick(e: MouseEvent): boolean {
		if (!e.target) {
			return false;
		}

		const box = UIElement.closestElement(e.target as Node, Popup);

		return Boolean(box && (this === box || box.closest(this)));
	}

	/**
	 * Set ZIndex
	 */
	setZIndex(index: number | string): void {
		this.container.style.zIndex = index.toString();
	}

	/** @override **/
	override destruct(): any {
		this.close();
		return super.destruct();
	}

	/**
	 * Calculate static bound for point
	 */
	protected getKeepBound(getBound: getBoundFunc): getBoundFunc {
		const oldBound = getBound();
		const elmUnderCursor = this.od.elementFromPoint(
			oldBound.left,
			oldBound.top
		);

		if (!elmUnderCursor) {
			return getBound;
		}

		const element = Dom.isHTMLElement(elmUnderCursor)
			? elmUnderCursor
			: (elmUnderCursor.parentElement as HTMLElement);

		const oldPos = position(element, this.j);

		return () => {
			const bound = getBound();
			const newPos = position(element, this.j);

			return {
				...bound,
				top: bound.top + (newPos.top - oldPos.top),
				left: bound.left + (newPos.left - oldPos.left)
			};
		};
	}

	private calculateZIndex(): void {
		if (this.container.style.zIndex) {
			return;
		}

		const checkView = (view: IViewBased): boolean => {
			const zIndex = view.container.style.zIndex || view.o.zIndex;

			if (zIndex) {
				this.setZIndex(1 + parseInt(zIndex.toString(), 10));
				return true;
			}

			return false;
		};

		const { j } = this;

		if (checkView(j)) {
			return;
		}

		let pe = this.parentElement;

		while (pe) {
			if (checkView(j)) {
				return;
			}

			if (pe.container.style.zIndex) {
				this.setZIndex(
					1 + parseInt(pe.container.style.zIndex.toString(), 10)
				);
				return;
			}

			if (!pe.parentElement && pe.container.parentElement) {
				const elm = UIElement.closestElement(
					pe.container.parentElement,
					UIElement
				);

				if (elm) {
					pe = elm;
					continue;
				}
			}

			pe = pe.parentElement;
		}
	}

	/**
	 * Calculate start point
	 */
	private calculatePosition(
		target: IBound,
		view: IBound,
		container: IBound,
		defaultStrategy: PopupStrategy = this.strategy
	): [IBoundP, PopupStrategy] {
		const x: IDictionary = {
				left: target.left,
				right: target.left - (container.width - target.width),
				center: target.left + target.width / 2 - container.width / 2
			},
			y: IDictionary = {
				bottom: target.top + target.height,
				top: target.top - container.height
			};

		const [defaultXKey, defaultYKey] =
			kebabCase(defaultStrategy).split('-');

		const xKeys = Object.keys(x).sort(function (a, b) {
			if (a === defaultXKey) {
				return -1;
			}
			return 0;
		});

		const yKeys = Object.keys(y).sort(function (a, b) {
			if (a === defaultYKey) {
				return -1;
			}
			return 0;
		});

		const list = xKeys.reduce(
			(keys, xKey) =>
				keys.concat(
					yKeys.map(
						yKey => `${xKey}${ucfirst(yKey)}` as PopupStrategy
					)
				),
			[] as PopupStrategy[]
		);

		const getPointByStrategy = (strategy: PopupStrategy): IBound => {
			const [xKey, yKey] = kebabCase(strategy).split('-');

			return {
				left: x[xKey],
				top: y[yKey],
				width: container.width,
				height: container.height
			};
		};

		const getMatchStrategy = (inBox: IBound): Nullable<PopupStrategy> => {
			let strategy: Nullable<PopupStrategy> = null;

			if (Popup.boxInView(getPointByStrategy(defaultStrategy), inBox)) {
				strategy = defaultStrategy;
			} else {
				strategy =
					list.find((key): CanUndef<string> => {
						if (Popup.boxInView(getPointByStrategy(key), inBox)) {
							return key;
						}

						return;
					}) || null;
			}

			return strategy;
		};

		// Try find match position inside Jodit.container
		let strategy = getMatchStrategy(position(this.j.container, this.j));

		// If not found or is not inside window view
		if (!strategy || !Popup.boxInView(getPointByStrategy(strategy), view)) {
			// Find match strategy inside window view
			strategy = getMatchStrategy(view) || strategy || defaultStrategy;
		}
		return [getPointByStrategy(strategy), strategy];
	}

	/**
	 * Close popup if click was in outside
	 */
	@autobind
	private closeOnOutsideClick(e: MouseEvent): void {
		if (!this.isOpened || this.isOwnClick(e)) {
			return;
		}

		this.close();
	}

	private addGlobalListeners(): void {
		const up = this.throttleUpdatePosition,
			ow = this.ow;

		eventEmitter.on('closeAllPopups', this.close);

		if (this.smart) {
			this.j.e
				.on('escape', this.close)
				.on('mousedown touchstart', this.closeOnOutsideClick)
				.on(ow, 'mousedown touchstart', this.closeOnOutsideClick);
		}

		this.j.e
			.on('closeAllPopups', this.close)
			.on('resize', up)
			.on(this.container, 'scroll mousewheel', up)
			.on(ow, 'scroll', up)
			.on(ow, 'resize', up);

		Dom.up(this.j.container, box => {
			box && this.j.e.on(box, 'scroll mousewheel', up);
		});
	}

	private removeGlobalListeners(): void {
		const up = this.throttleUpdatePosition,
			ow = this.ow;

		eventEmitter.off('closeAllPopups', this.close);

		if (this.smart) {
			this.j.e
				.off('escape', this.close)
				.off('mousedown touchstart', this.closeOnOutsideClick)
				.off(ow, 'mousedown touchstart', this.closeOnOutsideClick);
		}

		this.j.e
			.off('closeAllPopups', this.close)
			.off('resize', up)
			.off(this.container, 'scroll mousewheel', up)
			.off(ow, 'scroll', up)
			.off(ow, 'resize', up);

		assert(
			this.j.container.isConnected,
			'The container must be built into the DOM'
		);

		Dom.up(this.j.container, box => {
			box && this.j.e.off(box, 'scroll mousewheel', up);
		});
	}
}
