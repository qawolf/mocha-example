const { launch } = require("qawolf");
const selectors = require("../selectors/united");

describe("united", () => {
  let browser;

  beforeAll(async () => {
    browser = await launch({ url: "https://united.com/" });
  });

  afterAll(() => browser.close());

  it('can type into "From*" input', async () => {
    await browser.type(selectors[0], process.env.FROM_AIRPORT);
  });

  it("can Tab", async () => {
    await browser.type(selectors[1], "↓Tab↑Tab");
  });

  it('can type into "To*" input', async () => {
    await browser.type(selectors[2], process.env.TO_AIRPORT);
  });

  it("can Tab", async () => {
    await browser.type(selectors[3], "↓Tab↑Tab");
  });

  it('can type into "DepartDate" input', async () => {
    await browser.type(selectors[4], process.env.DEPART_DATE);
  });

  it("can Tab", async () => {
    await browser.type(selectors[5], "↓Tab↑Tab");
  });

  it('can type into "ReturnDate" input', async () => {
    await browser.type(selectors[6], process.env.RETURN_DATE);
  });

  it("can Tab", async () => {
    await browser.type(selectors[7], "↓Tab↑Tab");
  });

  it('can click "Find flights" button', async () => {
    await browser.click(selectors[8]);
  });

  it("can scroll", async () => {
    await browser.scroll(selectors[9], { x: 0, y: 1615 });
  });
});