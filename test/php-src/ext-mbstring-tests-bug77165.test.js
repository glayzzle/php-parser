// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug77165.phpt
  it("Bug #77165: mb_check_encoding crashes when argument given an empty array", function () {
    expect(parser.parseCode("<?php\nvar_dump(mb_check_encoding(array()));\nvar_dump(mb_convert_encoding(array(), 'UTF-8'));\n?>")).toMatchSnapshot();
  });
});
