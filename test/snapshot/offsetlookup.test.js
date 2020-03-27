const parser = require("../main");

describe("offsetlookup", function () {
  it("simple", function () {
    expect(parser.parseEval('$obj["index"];')).toMatchSnapshot();
  });
  it("variable", function () {
    expect(parser.parseEval("$obj[$var];")).toMatchSnapshot();
  });
  it("call", function () {
    expect(parser.parseEval("$obj[$var]();")).toMatchSnapshot();
  });
  it("multiple", function () {
    expect(parser.parseEval('$obj["first"]["second"];')).toMatchSnapshot();
  });
  it("simple (curly)", function () {
    expect(parser.parseEval('$obj{"index"};')).toMatchSnapshot();
  });
  it("variable (curly)", function () {
    expect(parser.parseEval("$obj{$var};")).toMatchSnapshot();
  });
  it("call (curly)", function () {
    expect(parser.parseEval("$obj{$var}();")).toMatchSnapshot();
  });
  it("multiple (curly)", function () {
    expect(parser.parseEval('$obj{"first"}{"second"};')).toMatchSnapshot();
  });
  it("inside propertylookup", function () {
    expect(
      parser.parseEval(`
$foo->bzr_[1];
$foo->bzr_['string'];
$foo->bzr_[$baz];
$foo->bzr_[$baz->foo];
$foo->bzr_[$var ? 'one' : 'two'];
    `)
    ).toMatchSnapshot();
  });
  it("inside propertylookup (curly)", function () {
    expect(
      parser.parseEval(`
$foo->bzr_{1};
$foo->bzr_{'string'};
$foo->bzr_{$baz};
$foo->bzr_{$baz->foo};
$foo->bzr_{$var ? 'one' : 'two'};
    `)
    ).toMatchSnapshot();
  });
});
