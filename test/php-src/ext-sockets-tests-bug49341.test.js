// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/bug49341.phpt
  it("Bug #49341: add SO_REUSEPORT support for socket_set_option()", function () {
    expect(parser.parseCode("<?php\nvar_dump(defined('SO_REUSEPORT'));\n?>")).toMatchSnapshot();
  });
});
