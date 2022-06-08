// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_select-wrongparams-1-win32.phpt
  it("Test parameter handling in socket_select().", function () {
    expect(parser.parseCode("<?php\n$sockets = array();\n$domain = AF_INET;\nsocket_create_pair($domain, SOCK_STREAM, 0, $sockets);\n$write  = null;\n$except = null;\n$time   = -1;\nvar_dump(socket_select($sockets, $write, $except, $time));\n?>")).toMatchSnapshot();
  });
});
