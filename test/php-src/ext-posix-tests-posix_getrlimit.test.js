// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_getrlimit.phpt
  it("posix_getrlimit(): Basic tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(posix_getrlimit());\n?>")).toMatchSnapshot();
  });
});
