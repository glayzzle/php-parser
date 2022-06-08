// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug79477.phpt
  it("Bug #79477: casting object into array creates references", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public $prop = 'default value';\n}\n$obj = new Test;\n$obj->{1} = null;\n$arr = (array) $obj;\n$arr['prop'] = 'new value';\necho $obj->prop, \"\\n\";\n?>")).toMatchSnapshot();
  });
});
