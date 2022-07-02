// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/grammar/regression_006.phpt
  it("Test to ensure const list syntax declaration works", function () {
    expect(parser.parseCode("<?php\nclass Obj\n{\n    const DECLARE = 'declare',\n          RETURN = 'return',\n          FUNCTION = 'function',\n          USE = 'use';\n}\necho Obj::DECLARE, PHP_EOL;\necho Obj::RETURN, PHP_EOL;\necho Obj::FUNCTION, PHP_EOL;\necho Obj::USE, PHP_EOL;\necho Obj::\n    USE, PHP_EOL;\necho \"\\nDone\\n\";\n?>")).toMatchSnapshot();
  });
});
