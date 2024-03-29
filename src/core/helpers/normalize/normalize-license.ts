
/**
 * @module helpers/normalize
 */

export const normalizeLicense = (
	license: string,
	count: number = 8
): string => {
	const parts: string[] = [];

	while (license.length) {
		parts.push(license.substr(0, count));
		license = license.substr(count);
	}

	parts[1] = parts[1].replace(/./g, '*');
	parts[2] = parts[2].replace(/./g, '*');

	return parts.join('-');
};
