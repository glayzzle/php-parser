// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/gethostbyname_error003.phpt
  it("gethostbyname() function - basic type return error test", function () {
    expect(parser.parseCode("<?php\n    var_dump(is_string(gethostbyname(\"asdfasdf\")));\n?>")).toMatchSnapshot();
  });
});
