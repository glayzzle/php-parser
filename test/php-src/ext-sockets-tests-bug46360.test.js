// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/bug46360.phpt
  it("Bug 46360 - TCP_NODELAY constant (sock_get_option, sock_set_option)", function () {
    expect(parser.parseCode("<?php\n    var_dump(TCP_NODELAY);\n?>")).toMatchSnapshot();
  });
});
