const parser = require('../main');

describe("propertylookup", function() {
  it("fix 128 - Don't have curly for propertylookup", function() {
    expect(parser.parseEval('$this->{foo};$this->bar;')).toMatchSnapshot();
  });
  it("simple", function() {
    expect(parser.parseEval('$obj->property;')).toMatchSnapshot();
  });
  it("variable", function() {
    expect(parser.parseEval('$obj->$property;')).toMatchSnapshot();
  });
  it("call", function() {
    expect(parser.parseEval('$obj->call();')).toMatchSnapshot();
  });
  it("multiple", function() {
    expect(parser.parseEval('$obj->property_1->property_2;')).toMatchSnapshot();
  });
});
