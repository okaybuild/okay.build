// @flow

export function maybeGetCached(url: string) {
  let prev = localStorage.getItem(url);
  if (prev) return JSON.parse(prev);
  return null;
}

export async function fetchAndCacheJson(url: string) {
  let res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status}: ${res.statusText} (${res.url})`);
  let json = await res.json();
  localStorage.setItem(url, JSON.stringify(json));
  return json;
}
