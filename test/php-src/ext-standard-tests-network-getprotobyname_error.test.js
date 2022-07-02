// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/getprotobyname_error.phpt
  it("getprotobyname function errors test", function () {
    expect(parser.parseCode("<?php\n// invalid protocol name\nvar_dump(getprotobyname('abc'));\n?>")).toMatchSnapshot();
  });
});
