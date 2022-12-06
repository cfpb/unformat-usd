import { unFormatUSD } from './index.js';

describe('unFormatUSD', () => {
  it('Strip dollar sign', () => {
    expect(unFormatUSD('$123')).toBe(123);
    expect(unFormatUSD('$123.4')).toBe(123.4);
    expect(unFormatUSD('$123.45')).toBe(123.45);
    expect(unFormatUSD('$123.456')).toBe(123.456);
  });

  it('Deal with extraneous characters', () => {
    expect(unFormatUSD('$%123')).toBe(123);
    expect(unFormatUSD('123.45.67')).toBe(123.45);
    expect(unFormatUSD('79aaasdfa69s89')).toBe(796989);
  });

  it('Ignore non-parseable strings', () => {
    const obj = { foo: 'bar' };
    const func = function (a) {
      return a;
    };

    expect(unFormatUSD('blah')).toBe('blah');
    expect(unFormatUSD(obj)).toBe(obj);
    expect(unFormatUSD(func)).toBe(func);
    expect(unFormatUSD(Date)).toBe(Date);
  });
});
