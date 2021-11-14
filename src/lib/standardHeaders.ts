import { IHeaders } from "@/@types/common";

export function standardHeadersWithAuth(): IHeaders {
    let headers: IHeaders = {};

    headers['Content-Type'] = 'application/json';
    headers['Accept'] = 'application/json';

    return headers;
}
