export {};

jest.setTimeout(30000);
describe('ReactHookForm.tsx', () => {
  beforeAll(async () => {
    await page.setRequestInterception(true);
    page.on('request', (request) => {
      if (request.url() === 'https://jsonplaceholder.typicode.com/todos/1') {
        request.respond({
          headers: { 'Access-Control-Allow-Origin': '*' },
          body: JSON.stringify({ mock: true })
        });
      } else {
        request.continue();
      }
    });

    await page.goto('http://localhost:3000/form-validation');
  });

  it('has istvan as default name', async () => {
    const defaultName = await page.$eval('#name-input input', (e: any) => e.value);
    expect(defaultName).toEqual('istvan');
  });

  it('shows an error on digit in name input', async () => {
    await page.type('#name-input input', '1231231');
    await page.click('input#submit');

    const errorText = await page.$eval('#name-input p.MuiFormHelperText-root', (e) => e.innerHTML);
    expect(errorText).toEqual('Only letters!');

    await page.waitForTimeout(5000);
  });
});
