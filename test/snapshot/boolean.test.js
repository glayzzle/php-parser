const parser = require('../main');

describe('boolean', () => {
  it('assign', () => {
    expect(parser.parseEval('$var = true;')).toMatchSnapshot();
  });
  it('assign (2)', () => {
    expect(parser.parseEval('$var = false;')).toMatchSnapshot();
  });
});
