// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/getprotobynumber_error.phpt
  it("getprotobynumber function errors test", function () {
    expect(parser.parseCode("<?php\n// invalid protocol number\nvar_dump(getprotobynumber(999));\n?>")).toMatchSnapshot();
  });
});
