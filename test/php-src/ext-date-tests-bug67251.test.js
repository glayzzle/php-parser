// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug67251.phpt
  it("Bug #67251 (date_parse_from_format out-of-bounds read)", function () {
    expect(parser.parseCode("<?php\nvar_dump(date_parse_from_format(\"\\\\\",\"AAAABBBB\"));\n?>")).toMatchSnapshot();
  });
});
