// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/static_type_param.phpt
  it("Static type is not allowed in parameters", function () {
    expect(() => parser.parseCode("<?php\n// TODO: We could prohibit this case in the compiler instead.\nclass Test {\n    public function test(static $param) {\n    }\n}\n?>")).toThrowErrorMatchingSnapshot();
  });
});
