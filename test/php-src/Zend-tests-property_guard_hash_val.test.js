// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/property_guard_hash_val.phpt
  it("Test property guard hash value assumption", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    function __get($var) {\n        return $this->{$var.''};\n    }\n}\n$test = new Test;\nvar_dump($test->x);\n?>")).toMatchSnapshot();
  });
});
