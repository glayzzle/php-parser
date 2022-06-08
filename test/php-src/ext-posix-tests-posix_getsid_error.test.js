// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_getsid_error.phpt
  it("Test posix_getsid() function : error conditions", function () {
    expect(parser.parseCode("<?php\nvar_dump( posix_getsid(-1) );\n?>")).toMatchSnapshot();
  });
});
