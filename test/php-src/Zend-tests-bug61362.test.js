// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug61362.phpt
  it("Bug #61362 (Exception::getTraceAsString, Exception::__toString not able to handle unicode)", function () {
    expect(parser.parseCode("<?php\nfunction test($arg){\n    throw new Exception();\n}\ntry {\n    test('тест');\n}\ncatch(Exception $e) {\n    echo $e->getTraceAsString(), \"\\n\";\n    echo (string)$e;\n}\n?>")).toMatchSnapshot();
  });
});
