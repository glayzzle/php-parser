// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/bug55472.phpt
  it("Bug #55472 (ip2long(integer) returns integer)", function () {
    expect(parser.parseCode("<?php\nvar_dump(ip2long(26));\n?>")).toMatchSnapshot();
  });
});
