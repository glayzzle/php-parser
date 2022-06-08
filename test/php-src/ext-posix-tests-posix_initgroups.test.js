// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_initgroups.phpt
  it("posix_initgroups(): Basic tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(posix_initgroups('', 0));\n?>")).toMatchSnapshot();
  });
});
