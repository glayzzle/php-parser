// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug72918.phpt
  it("Bug #72918 (negative offset inside a quoted string leads to parse error)", function () {
    expect(parser.parseCode("<?php\n$array = [-3 => 'foo'];\n$string = 'abcde';\necho \"$array[-3]\\n\";\necho \"$string[-3]\\n\";\necho <<<EOT\n$array[-3]\n$string[-3]\nEOT;\n?>")).toMatchSnapshot();
  });
});
