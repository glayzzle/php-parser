// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/crypt_des_error.phpt
  it("crypt(): *0 should return *1", function () {
    expect(parser.parseCode("<?php\nvar_dump(crypt('foo', '*0'));\n?>")).toMatchSnapshot();
  });
});
