// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_detect_encoding_incomplete_sequence.phpt
  it("mb_detect_encoding() with incomplete trailing sequence", function () {
    expect(parser.parseCode("<?php\n// Even in non-strict mode, this should detect as ISO-8859-1. When the end of the string is\n// reached neither have illegal characters and would be picked based on score. However, flushing\n// the string will disqualify UTF-8 due to illegal characters.\nvar_dump(mb_detect_encoding(\"A\\xC2\", [\"UTF-8\", \"ISO-8859-1\"]));\n?>")).toMatchSnapshot();
  });
});
