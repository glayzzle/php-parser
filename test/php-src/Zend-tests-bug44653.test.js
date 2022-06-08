// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug44653.phpt
  it("Bug #44653 (Invalid namespace name resolution)", function () {
    expect(parser.parseCode("<?php\nnamespace A;\nconst XX=1;\nfunction fooBar() { echo __FUNCTION__ . PHP_EOL; }\nnamespace B;\nclass A {\n    static function fooBar() { echo \"bag1\\n\"; }\n}\nclass B {\n    static function fooBar() { echo \"bag2\\n\"; }\n}\nfunction fooBar() { echo __FUNCTION__ . PHP_EOL; }\nvar_dump(\\A\\XX);\nA::fooBar();\n\\A\\fooBar();\nB::fooBar();\nfooBar();\n\\B\\fooBar();\n?>")).toMatchSnapshot();
  });
});
