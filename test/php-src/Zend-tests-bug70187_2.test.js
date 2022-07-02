// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70187_2.phpt
  it("Bug #70187 (Notice: unserialize(): Unexpected end of serialized data)", function () {
    expect(parser.parseCode("<?php\n$a = 1;\nunset($a);\nunserialize(serialize($GLOBALS));\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
