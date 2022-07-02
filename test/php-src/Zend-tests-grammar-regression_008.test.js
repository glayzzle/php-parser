// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/grammar/regression_008.phpt
  it("Test to check regressions on string interpolation with class members access", function () {
    expect(parser.parseCode("<?php\nclass Friday {\n    public $require = \"fun\";\n}\n$friday = new Friday;\necho \"$friday->require ($friday->require) {$friday->require}\", PHP_EOL;\necho \"\\nDone\\n\";\n?>")).toMatchSnapshot();
  });
});
