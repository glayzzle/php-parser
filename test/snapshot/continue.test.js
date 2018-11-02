const parser = require('../main');

describe('continue', () => {
  it('simple', () => {
    expect(parser.parseEval('continue;')).toMatchSnapshot();
  });
  it('argument 0', () => {
    expect(parser.parseEval('continue 0;')).toMatchSnapshot();
  });
  it('argument 1', () => {
    expect(parser.parseEval('continue 1;')).toMatchSnapshot();
  });
  it('argument 2', () => {
    expect(parser.parseEval('continue 2;')).toMatchSnapshot();
  });
});
