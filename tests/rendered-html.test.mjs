import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://samplefind.test/", {
      headers: {
        accept: "text/html",
        host: "samplefind.test",
        "x-forwarded-proto": "https",
      },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the SampleFind product landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>SampleFind<\/title>/i);
  assert.match(html, /Find the right sound before the/);
  assert.match(html, /idea disappears\./);
  assert.match(html, /classify sounds with AI/i);
  assert.match(html, /SampleFind product demo/i);
  assert.match(html, /APPLIED MULTIMODAL AI/i);
  assert.match(html, /PORTFOLIO BETA/i);
  assert.match(html, /SampleFind-0\.1\.6-arm64\.dmg/i);
  assert.match(html, /SampleFind-Setup-0\.1\.6-x64\.exe/i);
  assert.doesNotMatch(html, /codex-preview/i);
  assert.doesNotMatch(html, /Your site is taking shape/i);
});

test("emits absolute social metadata from the request host", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(
    html,
    /property="og:image" content="https:\/\/samplefind\.test\/og-samplefind\.png"/i,
  );
  assert.match(
    html,
    /name="twitter:card" content="summary_large_image"/i,
  );
});
