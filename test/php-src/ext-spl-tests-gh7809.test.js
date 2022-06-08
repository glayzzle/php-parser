// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/gh7809.phpt
  it("Bug GH-7809 (Cloning a faked SplFileInfo object may segfault)", function () {
    expect(parser.parseCode("<?php\nclass MySplFileInfo extends SplFileInfo {\n    public function __construct(string $filename) {}\n}\n$sfi = new MySplFileInfo(\"foo\");\nclone $sfi;\n?>")).toMatchSnapshot();
  });
});
