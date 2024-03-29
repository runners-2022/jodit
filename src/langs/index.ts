/**
 * [[include:langs/README.md]]
 * @packageDocumentation
 * @module langs
 */

import type { IDictionary } from 'jodit/types';
import { isArray } from '../core/helpers/checker';

let exp: IDictionary<IDictionary<string>> = {};

// if (!process.env.EXCLUDE_LANGS) {
const ar = require('./ar');
const cs_cz = require('./cs_cz');
const de = require('./de');
const en = require('./en');
const es = require('./es');
const fr = require('./fr');
const he = require('./he');
const hu = require('./hu');
const id = require('./id');
const it = require('./it');
const ja = require('./ja');
const ko = require('./ko');
const nl = require('./nl');
const pl = require('./pl');
const pt_br = require('./pt_br');
const ru = require('./ru');
const tr = require('./tr');
const zh_cn = require('./zh_cn');
const zh_tw = require('./zh_tw');

exp = {
	ar,
	cs_cz,
	de,
	en,
	es,
	fr,
	he,
	hu,
	id,
	it,
	ja,
	ko,
	nl,
	pl,
	pt_br,
	ru,
	tr,
	zh_cn,
	zh_tw
};
// }

const keys = require('./keys');

/* Unpack array to hash */
const get = (value: IDictionary): IDictionary =>
		value ? value.default || value : {},
	hashLang: IDictionary = {};

if (isArray(get(keys))) {
	get(keys).forEach((key: string, index: number) => {
		hashLang[index] = key;
	});
}

Object.keys(exp).forEach((lang: string) => {
	const list: unknown = get(exp[lang]);

	if (isArray(list)) {
		exp[lang] = {};

		list.forEach((value: string, index: number) => {
			exp[lang][hashLang[index]] = value;
		});
	} else {
		exp[lang] = list as IDictionary;
	}
});

export default exp;
