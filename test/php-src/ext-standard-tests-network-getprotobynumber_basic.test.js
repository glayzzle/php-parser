// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/getprotobynumber_basic.phpt
  it("getprotobynumber function basic test", function () {
    expect(parser.parseCode("<?php\nvar_dump(getprotobynumber(6));\n?>")).toMatchSnapshot();
  });
});
