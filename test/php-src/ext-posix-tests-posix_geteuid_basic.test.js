// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_geteuid_basic.phpt
  it("Test function posix_geteuid() by calling it with its expected arguments", function () {
    expect(parser.parseCode("<?php\nvar_dump(posix_geteuid());\n?>")).toMatchSnapshot();
  });
});
