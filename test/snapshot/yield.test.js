const parser = require('../main');

describe("yield", function() {
  it("simple", function() {
    expect(parser.parseEval('yield $i;')).toMatchSnapshot();
  });
  it("assign", function() {
    expect(parser.parseEval('$data = yield $value;')).toMatchSnapshot();
  });
  it("assign (parens)", function() {
    expect(parser.parseEval('$data = (yield $value);')).toMatchSnapshot();
  });
  it("simple (key and value)", function() {
    expect(parser.parseEval('yield $id => $fields;')).toMatchSnapshot();
  });
  it("assign (key and value)", function() {
    expect(parser.parseEval('$data = (yield $key => $value);')).toMatchSnapshot();
  });
  it("inside function", function() {
    expect(parser.parseEval('function fn() { yield $i; }')).toMatchSnapshot();
  });
  it("null", function() {
    expect(parser.parseEval('yield;')).toMatchSnapshot();
  });
});
