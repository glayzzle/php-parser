// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/gethostbyname_error001.phpt
  it("gethostbyname() function - basic type return error test", function () {
    expect(parser.parseCode("<?php\n    var_dump(is_string(gethostbyname(\"192.168.0.101\")));\n?>")).toMatchSnapshot();
  });
});
