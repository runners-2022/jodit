
/**
 * @module plugins/source
 */

import type { ISourceEditor } from 'jodit/types';

import { SourceEditor } from '../sourceEditor';

export class CustomEditor
	extends SourceEditor<HTMLTextAreaElement>
	implements ISourceEditor
{
	init(): any {
		this.onReady();
	}

	destruct(): any {}

	getValue(): string {
		return '';
	}

	setValue(raw: string): void {}

	insertRaw(raw: string): void {}

	getSelectionStart(): number {
		return 0;
	}

	getSelectionEnd(): number {
		return 0;
	}

	setSelectionRange(start: number, end: number): void {}

	focus(): void {}

	setPlaceHolder(title: string): void {}

	setReadOnly(isReadOnly: boolean): void {}

	selectAll(): void {}

	replaceUndoManager(): void {}

	readonly isFocused: boolean = false;

	blur(): void {}
}
