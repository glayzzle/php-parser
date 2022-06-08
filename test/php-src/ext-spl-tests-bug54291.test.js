// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug54291.phpt
  it("Bug #54291 (Crash iterating DirectoryIterator for dir name starting with \\0)", function () {
    expect(parser.parseCode("<?php\n$dir = new DirectoryIterator(\"\\x00/abc\");\n$dir->isFile();\n?>")).toMatchSnapshot();
  });
});
