// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/001.phpt
  it("posix_access() with bogus paths", function () {
    expect(parser.parseCode("<?php\nvar_dump(posix_access(str_repeat('bogus path', 1042)));\n?>")).toMatchSnapshot();
  });
});
