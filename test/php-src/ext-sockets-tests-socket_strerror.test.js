// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_strerror.phpt
  it("ext/sockets - socket_strerror - basic test", function () {
    expect(parser.parseCode("<?php\n/* Only test one representative error code here,\n * as messages will differ depending on the used libc. */\nvar_dump(socket_strerror(1));\n?>")).toMatchSnapshot();
  });
});
