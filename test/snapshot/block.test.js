const parser = require('../main');

describe('block', () => {
  it('single', () => {
    expect(parser.parseEval('{ $var = 1; }')).toMatchSnapshot();
  });
});
