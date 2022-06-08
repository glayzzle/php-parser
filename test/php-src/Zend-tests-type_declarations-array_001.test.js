// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/array_001.phpt
  it("Array type declaration", function () {
    expect(parser.parseCode("<?php\nfunction foo(array $a) {\n    echo count($a).\"\\n\";\n}\nfoo(array(1,2,3));\nfoo(123);\n?>")).toMatchSnapshot();
  });
});
