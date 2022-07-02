// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/gethostbyname_basic001.phpt
  it("gethostbyname() function - basic type return test", function () {
    expect(parser.parseCode("<?php\n    var_dump(is_string(gethostbyname(\"www.php.net\")));\n?>")).toMatchSnapshot();
  });
});
