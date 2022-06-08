// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_getgrgid_error.phpt
  it("Test posix_getgrgid() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing posix_getgrgid() : error conditions ***\\n\";\necho \"\\n-- Testing posix_getgrgid() function with a negative group id --\\n\";\n$gid = -999;\nvar_dump( posix_getgrgid($gid));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
