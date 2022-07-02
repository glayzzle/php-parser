// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug62462.phpt
  it("Multibyte characters shouldn't be split by soft line break added by quoted_printable_encode - 4 byte character test", function () {
    expect(parser.parseCode("<?php\necho quoted_printable_encode(str_repeat(\"\\xc4\\x85\", 77));\n?>")).toMatchSnapshot();
  });
});
