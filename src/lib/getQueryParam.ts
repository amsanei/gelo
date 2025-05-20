export default function getQueryParam(key: string) {
  const url = new URL(window.location.href);
  return Number(url.searchParams.get(key));
}
