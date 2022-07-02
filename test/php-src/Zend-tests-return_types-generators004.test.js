// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/generators004.phpt
  it("Generator with return type does not fail with empty return", function () {
    expect(parser.parseCode("<?php\n$a = function(): \\Iterator {\n    yield 1;\n    return;\n};\nforeach($a() as $value) {\n    echo $value;\n}\n?>")).toMatchSnapshot();
  });
});
