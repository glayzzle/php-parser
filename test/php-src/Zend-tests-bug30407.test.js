// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug30407.phpt
  it("Bug #30407 (Strange behaviour of default arguments)", function () {
    expect(parser.parseCode("<?php\nfunction haricow($a = 'one') {\n    var_dump($a);\n    $a = 'two';\n}\nharicow();\nharicow();\n?>")).toMatchSnapshot();
  });
});
