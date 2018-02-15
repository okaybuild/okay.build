// @flow

export function maybeGetCached(url: string) {
  let prev = global.localStorage && global.localStorage.getItem(url);
  if (prev) return JSON.parse(prev);
  return null;
}

export function fetchAndCacheJson<Data>(url: string): Promise<Data> {
  return fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error(`${res.status}: ${res.statusText} (${res.url})`);
      }
      return res.json();
    })
    .then(json => {
      if (global.localStorage) {
        global.localStorage.setItem(url, JSON.stringify(json));
      }
      return json;
    });
}
