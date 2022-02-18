export {};

jest.setTimeout(30000);
describe('App.tsx', () => {
  it('goes to home page', async () => {
    const host = 'http://localhost:3000/';
    await page.goto(host);
    const title = await page.title();
    expect(title).toEqual('React App');

    const button = await page.$('button#menu-button');
    await button?.click();

    await page.waitForSelector('ul#menu-list li:nth-child(2)');
    await page.click('ul#menu-list li:nth-child(2)');

    expect(page.url()).toEqual(host + 'main-concepts');

    await page.waitForTimeout(5000);
  });
});
