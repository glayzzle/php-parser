const parser = require('../main');

describe("exit", function() {
  it("simple", function() {
    expect(parser.parseEval('exit();')).toMatchSnapshot();
  });
  it("argument", function() {
    expect(parser.parseEval('exit($var);')).toMatchSnapshot();
  });
  it("die", function() {
    expect(parser.parseEval('die();')).toMatchSnapshot();
  });
});
