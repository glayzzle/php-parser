const parser = require('../../src/index');

it('fix #127 - echo statements', () => {
  expect(parser.parseEval('echo "hello"; ?> world')).toMatchSnapshot();
});

it('fix #127 - inline', function() {
  expect(parser.parseEval('?>?>?>')).toMatchSnapshot();
});

it('test program', function() {
  expect(parser.parseEval('')).toMatchSnapshot();
});
