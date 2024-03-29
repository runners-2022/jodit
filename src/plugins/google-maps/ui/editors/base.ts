
import type { IJodit } from 'jodit/types';
import { Button, UIGroup } from 'jodit/core/ui';

export abstract class UIBaseEditor<T> extends UIGroup {
	override className(): string {
		return 'UIBaseEditor';
	}

	protected override render(): string {
		return `<div>
			<div class='&__header'></div>
			<div class='&__form'></div>
			<div class='&__buttons'></div>
		</div>`;
	}

	protected onReady(): void {
		const remove = Button(this.j, 'bin').onAction(() =>
			this.j.e.fire(this, 'bin')
		);

		this.append(remove, 'buttons');
	}

	constructor(
		jodit: UIGroup['jodit'],
		readonly state: T,
		override readonly options: IJodit['options']
	) {
		super(jodit);
	}
}
