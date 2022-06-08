// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_check_encoding_without_arg.phpt
  it("Calling mb_check_encoding() without argument is deprecated", function () {
    expect(parser.parseCode("<?php\nvar_dump(mb_check_encoding());\n?>")).toMatchSnapshot();
  });
});
