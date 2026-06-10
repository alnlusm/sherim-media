const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe"
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const root = "file:///C:/Users/Akbota/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/sherim-v4-2.0/";
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto(root + "pages/cases.html", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(2500);
  await page.selectOption(".lang-select", "ru");
  await page.waitForTimeout(500);
  const ruCard = await page.locator(".case-big").first().innerText();
  await page.selectOption(".lang-select", "en");
  await page.waitForTimeout(500);
  const enCard = await page.locator(".case-big").first().innerText();
  await page.selectOption(".lang-select", "zh");
  await page.waitForTimeout(500);
  const zhNav = await page.locator(".main-nav").innerText();
  const zhCard = await page.locator(".case-big").first().innerText();

  await page.locator(".case-big").first().click();
  await page.waitForLoadState("domcontentloaded");
  await page.waitForTimeout(2500);
  const caseUrl = page.url();
  const caseTitle = await page.locator("#caseTitle").innerText();
  const visualBg = await page.locator("#caseVisual").evaluate((el) => getComputedStyle(el).backgroundImage);

  await page.goto(root + "index.html", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(2500);
  await page.locator("footer").scrollIntoViewIfNeeded();
  const footerImg = await page.locator("footer .footer-logo-img").getAttribute("src");
  await page.screenshot({ path: "codex-screenshots/verify-rings-footer.png", fullPage: false });

  await browser.close();
  console.log(JSON.stringify({ ruCard, enCard, zhNav, zhCard, caseUrl, caseTitle, visualBg, footerImg, errors }, null, 2));
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
