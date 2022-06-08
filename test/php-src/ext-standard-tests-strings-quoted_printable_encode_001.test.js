// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/quoted_printable_encode_001.phpt
  it("quoted_printable_encode() tests - 1", function () {
    expect(parser.parseCode("<?php\nvar_dump(quoted_printable_encode(\"\"));\nvar_dump(quoted_printable_encode(\"test\"));\nvar_dump(quoted_printable_encode(1));\nvar_dump(quoted_printable_encode(false));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
