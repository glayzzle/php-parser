// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug73792.phpt
  it("Bug #73792 (invalid foreach loop hangs script)", function () {
    expect(parser.parseCode("<?php\n$a = 'aaa';\nforeach ($a['2bbb'] as &$value) {\n    echo 'loop';\n}\nunset($value);\necho 'done';\n?>")).toMatchSnapshot();
  });
});
