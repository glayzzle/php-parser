// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/bug70006.phpt
  it("Bug #70006 (cli - function with default arg = STDOUT crash output)", function () {
    expect(parser.parseCode("<?php\nfunction foo1($stream = STDOUT)\n{\n  //do nothing\n}\nfoo1();\n?>\nokey")).toMatchSnapshot();
  });
});
