const parser = require('../main');

describe("encapsed", function() {
  it("variable (simple syntax)", function() {
    expect(parser.parseEval('"string $var string";')).toMatchSnapshot();
  });
  it("two variable (simple syntax)", function() {
    expect(parser.parseEval('"string $var->$var string";')).toMatchSnapshot();
  });
  it("variable curly (simple syntax)", function() {
    expect(parser.parseEval('"string ${var} string";')).toMatchSnapshot();
  });
  it("offsetlookup (simple syntax)", function() {
    expect(parser.parseEval('"string $array[0] string";')).toMatchSnapshot();
  });
  it("offsetlookup (2) (simple syntax)", function() {
    expect(parser.parseEval('"string $array[koolaid1] string";')).toMatchSnapshot();
  });
  it("offsetlookup (3) (simple syntax)", function() {
    expect(parser.parseEval('"string $array[0][0] string";')).toMatchSnapshot();
  });
  it("propertylookup (simple syntax)", function() {
    expect(parser.parseEval('"string $obj->property string";')).toMatchSnapshot();
  });
  it("variable with space opening before curly", function() {
    expect(parser.parseEval('"string { $var} string";')).toMatchSnapshot();
  });
  it("variable with before closing curly", function() {
    expect(parser.parseEval('"string {$var } string";')).toMatchSnapshot();
  });
  it("variable (complex syntax)", function() {
    expect(parser.parseEval('"string {$var} string";')).toMatchSnapshot();
  });
  it("propertylookup (complex syntax)", function() {
    expect(parser.parseEval('"string {$obj->property} string";')).toMatchSnapshot();
  });
  it("offsetlookup (complex syntax)", function() {
    expect(parser.parseEval('"string {$array["key"]} string";')).toMatchSnapshot();
  });
  it("offsetlookup 2 (complex syntax)", function() {
    expect(parser.parseEval('"string {$array[4][3]} string";')).toMatchSnapshot();
  });
  it("offsetlookup 3 (complex syntax)", function() {
    expect(parser.parseEval('"string {$arr[foo][3]} string";')).toMatchSnapshot();
  });
  it("offsetlookup 4 (complex syntax)", function() {
    expect(parser.parseEval('"string {$arr["foo"][3]} string";')).toMatchSnapshot();
  });
  it("propertylookup and offsetlookup (complex syntax)", function() {
    expect(parser.parseEval('"string {$obj->values[3]->name} string";')).toMatchSnapshot();
  });
  it("value of the var (complex syntax)", function() {
    expect(parser.parseEval('"string {${$name}} string";')).toMatchSnapshot();
  });
  it("value of the var named by the return value (complex syntax)", function() {
    expect(parser.parseEval('"string {${call()}} string";')).toMatchSnapshot();
  });
  it("value of the var named by the return value (2) (complex syntax)", function() {
    expect(parser.parseEval('"string {${call()}} string";')).toMatchSnapshot();
  });
  it("value of the var named by the return value (3) (complex syntax)", function() {
    expect(parser.parseEval('"string {${$obj->property}} string";')).toMatchSnapshot();
  });
  it("value of the var named by the return value (4) (complex syntax)", function() {
    expect(parser.parseEval('"string {${$obj->call()}} string";')).toMatchSnapshot();
  });
  it("value of the var named by the return value (5) (complex syntax)", function() {
    expect(parser.parseEval('"string {${$obj::$var}} string";')).toMatchSnapshot();
  });
  it("value of the var named by the return value (6) (complex syntax)", function() {
    expect(parser.parseEval('"string {${$obj::call()}} string";')).toMatchSnapshot();
  });
  it("propertylookup by variable (complex syntax)", function() {
    expect(parser.parseEval('"string {$obj->$var} string";')).toMatchSnapshot();
  });
  it("propertylookup by variable (2) (complex syntax)", function() {
    expect(parser.parseEval('"string {$obj->{$array[1]}} string";')).toMatchSnapshot();
  });
  it("propertylookup with multiple call (complex syntax)", function() {
    expect(parser.parseEval('"string {$obj->call()->call()} string";')).toMatchSnapshot();
  });
  it("multiple propertylookup (complex syntax)", function() {
    expect(parser.parseEval('"string {$obj->property->property} string";')).toMatchSnapshot();
  });
  it("propertylookup with comments (complex syntax)", function() {
    expect(parser.parseEval('"string {$var->foo->bar /* Comment */ } string";')).toMatchSnapshot();
  });
  it("newline before closing curly (complex syntax)", function() {
    expect(parser.parseEval('"string {$var\n} string";')).toMatchSnapshot();
  });
  it("staticlookup (complex syntax)", function() {
    expect(parser.parseEval('"string {$obj::$var} string";')).toMatchSnapshot();
  });
  it("staticlookup (2) (complex syntax)", function() {
    expect(parser.parseEval('"string {$obj::call()} string";')).toMatchSnapshot();
  });
  it("staticlookup (3) (complex syntax)", function() {
    expect(parser.parseEval('"string {$obj::$var::$var} string";')).toMatchSnapshot();
  });
  it("staticlookup (4) (complex syntax)", function() {
    expect(parser.parseEval('"string {$var::$target::$resource::$binary::$foo::$bar::$foobar::$bar::$foo::$foobar::$bar::$foo} string";')).toMatchSnapshot();
  });
});
