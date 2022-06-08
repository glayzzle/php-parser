// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug76319.phpt
  it("Bug #76319: mb_strtolower with invalid UTF-8 causes segmentation fault", function () {
    expect(parser.parseCode("<?php\nmb_substitute_character(0xFFFD);\nvar_dump(mb_strtolower(\"a\\xA1\", 'UTF-8'));\n?>")).toMatchSnapshot();
  });
});
