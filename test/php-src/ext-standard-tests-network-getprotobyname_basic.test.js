// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/getprotobyname_basic.phpt
  it("getprotobyname function basic test", function () {
    expect(parser.parseCode("<?php\nvar_dump(getprotobyname('tcp'));\n?>")).toMatchSnapshot();
  });
});
