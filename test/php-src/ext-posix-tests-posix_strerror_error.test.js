// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_strerror_error.phpt
  it("Test posix_strerror() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing posix_strerror() : error conditions ***\\n\";\necho \"\\n-- Testing posix_strerror() function with invalid error number --\\n\";\n$errno = -999;\necho gettype( posix_strerror($errno) ).\"\\n\";\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
