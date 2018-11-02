const parser = require('../main');

describe("include", function() {
  it("include", function() {
    expect(parser.parseEval('include "string";')).toMatchSnapshot();
  });
  it("include once", function() {
    expect(parser.parseEval('include_once "string";')).toMatchSnapshot();
  });
  it("require", function() {
    expect(parser.parseEval('require "string";')).toMatchSnapshot();
  });
  it("require_once", function() {
    expect(parser.parseEval('require_once "string";')).toMatchSnapshot();
  });
});
