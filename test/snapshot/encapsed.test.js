const parser = require('../main');

describe("encapsed", function() {
  it("variable (simple syntax)", function() {
    expect(parser.parseEval('echo "string $var string";')).toMatchSnapshot();
  });
  it("two variable (simple syntax)", function() {
    expect(parser.parseEval('echo "string $var->$var string";')).toMatchSnapshot();
  });
  it.only("variable curly (simple syntax)", function() {
    expect(parser.parseEval('echo "string ${var} string";')).toMatchSnapshot();
  });
  it("offsetlookup (simple syntax)", function() {
    expect(parser.parseEval('echo "string $array[0] string";')).toMatchSnapshot();
  });
  it("offsetlookup (simple syntax)", function() {
    expect(parser.parseEval('echo "string $array[koolaid1] string";')).toMatchSnapshot();
  });
  it("propertylookup (simple syntax)", function() {
    expect(parser.parseEval('echo "string $obj->property string";')).toMatchSnapshot();
  });
});
