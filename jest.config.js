// eslint-disable-next-line no-undef
module.exports = {
  preset: 'jest-puppeteer',
  testMatch: ['**/ReactHookForm.e2e\\.test\\.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  }
};
