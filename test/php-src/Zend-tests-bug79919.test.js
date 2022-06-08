// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug79919.phpt
  it("Bug #79919 (Stack use-after-scope in define())", function () {
    expect(parser.parseCode("<?php\n$b = error_log(0);\n$b = simplexml_load_string('<xml/>', null, $b);\ndefine(0, $b);\n?>")).toMatchSnapshot();
  });
});
