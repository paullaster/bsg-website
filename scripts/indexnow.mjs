// Tells IndexNow-compatible search engines (Bing, Yandex and others) that the site has new or changed pages.
// Run AFTER deploying: `pnpm indexnow`. It sends only public page addresses. Nothing is sent automatically.
import { readdir, readFile } from 'node:fs/promises';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.brainsporellc.com').replace(
  /\/$/,
  '',
);
const host = new URL(siteUrl).host;

const publicDir = new URL('../public/', import.meta.url);
const keyFile = (await readdir(publicDir)).find((name) => /^[a-f0-9]{32}\.txt$/.test(name));
if (!keyFile) throw new Error('No IndexNow key file found in /public.');
const key = (await readFile(new URL(keyFile, publicDir), 'utf8')).trim();

const keyLocation = `${siteUrl}/${keyFile}`;
const urlList = [siteUrl, `${siteUrl}/llms.txt`];

// Confirm the key file is really live before asking anyone to check it.
const live = await fetch(keyLocation).then((response) => (response.ok ? response.text() : ''));
if (live.trim() !== key) {
  console.error(
    `The key file is not live yet at ${keyLocation}. Deploy first, then run this again.`,
  );
  process.exit(1);
}

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host, key, keyLocation, urlList }),
});
console.log(
  `IndexNow responded ${response.status} ${response.statusText} for ${urlList.length} address(es).`,
);
