// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug66590_1.phpt
  it("Bug #66590 (imagewebp() doesn't pad to even length) - segfault", function () {
    expect(parser.parseCode("<?php\n$im = imagecreatetruecolor(6, 6);\nob_start();\nimagewebp($im);\nob_end_clean();\necho \"ready\\n\";\n?>")).toMatchSnapshot();
  });
});
