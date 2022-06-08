// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_getcwd.phpt
  it("posix_getcwd(): Basic tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(posix_getcwd());\n?>")).toMatchSnapshot();
  });
});
