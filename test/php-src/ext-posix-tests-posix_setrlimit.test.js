// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_setrlimit.phpt
  it("posix_setrlimit(): Basic tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(posix_setrlimit(POSIX_RLIMIT_NOFILE, 128, 128));\nvar_dump(posix_setrlimit(POSIX_RLIMIT_NOFILE, 129, 128));\n?>")).toMatchSnapshot();
  });
});
