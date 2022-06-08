// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_getgrgid_macosx.phpt
  it("Test return values of posix_getgrgid() on MacOSX.", function () {
    expect(parser.parseCode("<?php\n$grp = posix_getgrgid(-1);\nvar_dump($grp['name']);\n?>")).toMatchSnapshot();
  });
});
