
/**
 * @module helpers/checker
 */

/**
 * Detect if string is HTML from MS Word or Excel
 */
export function isHtmlFromWord(data: string): boolean {
	return (
		data.search(/<meta.*?Microsoft Excel\s[\d].*?>/) !== -1 ||
		data.search(/<meta.*?Microsoft Word\s[\d].*?>/) !== -1 ||
		(data.search(/style="[^"]*mso-/) !== -1 && data.search(/<font/) !== -1)
	);
}
