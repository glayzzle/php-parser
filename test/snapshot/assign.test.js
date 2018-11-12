const parser = require('../main');

describe('assign', () => {
  it('simple', () => {
    expect(parser.parseEval("$var = 1;")).toMatchSnapshot();
  });
  it('variable', () => {
    expect(parser.parseEval("$var = $var;")).toMatchSnapshot();
  });
  it('multiple', () => {
    expect(parser.parseEval("$var = $var = $var;")).toMatchSnapshot();
  });
  it('+=', () => {
    expect(parser.parseEval("$var += $var;")).toMatchSnapshot();
  });
  it('-=', () => {
    expect(parser.parseEval("$var -= $var;")).toMatchSnapshot();
  });
  it('*=', () => {
    expect(parser.parseEval("$var *= $var;")).toMatchSnapshot();
  });
  it('**=', () => {
    expect(parser.parseEval("$var **= $var;")).toMatchSnapshot();
  });
  it('/=', () => {
    expect(parser.parseEval("$var /= $var;")).toMatchSnapshot();
  });
  it('.=', () => {
    expect(parser.parseEval("$var .= $var;")).toMatchSnapshot();
  });
  it('%=', () => {
    expect(parser.parseEval("$var %= $var;")).toMatchSnapshot();
  });
  it('&=', () => {
    expect(parser.parseEval("$var &= $var;")).toMatchSnapshot();
  });
  it('|=', () => {
    expect(parser.parseEval("$var |= $var;")).toMatchSnapshot();
  });
  it('^=', () => {
    expect(parser.parseEval("$var ^= $var;")).toMatchSnapshot();
  });
  it('<<=', () => {
    expect(parser.parseEval("$var <<= $var;")).toMatchSnapshot();
  });
  it('>>=', () => {
    expect(parser.parseEval("$var >>= $var;")).toMatchSnapshot();
  });
});
