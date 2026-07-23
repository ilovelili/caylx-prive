import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders the Calyx Privé homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /A deeper way/);
  assert.match(html, /Four pathways shape/);
  assert.match(html, /Calyx Privé/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});

test("renders a supporting route", async () => {
  const response = await render("/journey/health-wellbeing");
  assert.equal(response.status, 200);
  assert.match(await response.text(), /Health begins long before treatment/);
});
