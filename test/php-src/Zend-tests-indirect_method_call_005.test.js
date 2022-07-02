// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/indirect_method_call_005.phpt
  it("Testing array dereferencing from instance with ArrayObject", function () {
    expect(parser.parseCode("<?php\nclass foo extends ArrayObject {\n    public function __construct($arr) {\n        parent::__construct($arr);\n    }\n}\nvar_dump( (new foo( array(1, array(4, 5), 3) ))[1][0] ); // int(4)\n?>")).toMatchSnapshot();
  });
});
