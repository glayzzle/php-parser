// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug81684.phpt
  it("Bug #81684: ??= on $GLOBALS produces an invalid opcode", function () {
    expect(parser.parseCode("<?php\n$GLOBALS['x'] ??= 'x'; // Fatal error: Invalid opcode 23/1/0\nvar_dump($GLOBALS['x']);\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
