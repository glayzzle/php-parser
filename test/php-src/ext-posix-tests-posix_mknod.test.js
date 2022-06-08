// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_mknod.phpt
  it("posix_mknod(): Basic tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(posix_mknod('', 0, 0, 0));\n?>")).toMatchSnapshot();
  });
});
