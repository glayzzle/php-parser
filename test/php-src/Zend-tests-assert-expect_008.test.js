// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assert/expect_008.phpt
  it("test disabled expectations have no ill side effects", function () {
    expect(parser.parseCode("<?php\nclass One {\n    public function __construct() {\n        assert($this || 0);\n    }\n}\nclass Two extends One {}\nclass OdEar extends AssertionError {}\nfunction blah(){ return 1; }\n$variable = 1;\nassert(true, \"constant message\");\nassert(($variable && $variable) || php_sapi_name(), new OdEar(\"constant message\"));\nassert(false);\nassert(blah(), blah());\nnew Two();\nnew Two();\nnew Two();\nassert (blah() || blah() || blah(), blah() || blah() || blah() || blah());\nvar_dump(true);\n?>")).toMatchSnapshot();
  });
});
