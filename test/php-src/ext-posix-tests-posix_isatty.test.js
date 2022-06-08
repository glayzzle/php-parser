// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_isatty.phpt
  it("posix_isatty(): Basic tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(posix_isatty(0));\n?>")).toMatchSnapshot();
  });
});
