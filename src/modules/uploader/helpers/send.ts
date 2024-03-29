/**
 * @module modules/uploader
 */

import type {IDictionary, IJodit, IUploader, IUploaderAnswer} from 'jodit/types';
import { Ajax } from 'jodit/core/request';
import { isFunction, isPromise } from 'jodit/core/helpers';
import { buildData } from 'jodit/modules/uploader/helpers/build-data';

export const ajaxInstances: WeakMap<IUploader, Set<Ajax>> = new WeakMap();

export async function send(
	uploader: IUploader,
	data: FormData | IDictionary<string>
): Promise<IUploaderAnswer> {
	const requestData = buildData(uploader, data);

	const sendData = async (
		request: FormData | IDictionary<string> | string
	): Promise<any> => {
		const ajax = new Ajax<IUploaderAnswer>(uploader.j, {
			xhr: (): XMLHttpRequest => {
				const xhr = new XMLHttpRequest();

				if (
					(uploader.j.ow as any).FormData !== undefined &&
					xhr.upload
				) {
					uploader.j.progressbar.show().progress(10);

					xhr.upload.addEventListener(
						'progress',
						evt => {
							if (evt.lengthComputable) {
								let percentComplete = evt.loaded / evt.total;

								percentComplete *= 100;

								console.log('progress', percentComplete);

								uploader.j.progressbar
									.show()
									.progress(percentComplete);

								if (percentComplete >= 100) {
									uploader.j.progressbar.hide();
								}
							}
						},
						false
					);
				} else {
					uploader.j.progressbar.hide();
				}

				return xhr;
			},
			method: uploader.o.method || 'POST',
			data: request,
			url: uploader.o.url(<IJodit>uploader.j, request),
			headers: isFunction(uploader.o.headers)
				? uploader.o.headers(uploader.o.authToken)
				: uploader.o.headers,
			queryBuild: uploader.o.queryBuild,
			contentType: uploader.o.contentType.call(uploader, request),
			dataType: uploader.o.format || 'json',
			withCredentials: uploader.o.withCredentials || false
		});

		let instances = ajaxInstances.get(uploader);

		if (!instances) {
			instances = new Set<Ajax>();
			ajaxInstances.set(uploader, instances);
		}

		instances.add(ajax);

		return ajax
			.send()
			.then(resp => {
				return resp.json();
			})
			.catch(error => {
				uploader.o.error.call(uploader, error);
			})
			.finally(() => {
				instances?.delete(ajax);
			});
	};

	if (isPromise(requestData)) {
		return requestData.then(sendData).catch(error => {
			uploader.o.error.call(uploader, error);
		});
	}

	return sendData(requestData);
}
