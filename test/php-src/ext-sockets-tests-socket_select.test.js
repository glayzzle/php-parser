// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_select.phpt
  it("Test parameter handling in socket_select().", function () {
    expect(parser.parseCode("<?php\n$sockets = array();\nif (strtolower(substr(PHP_OS, 0, 3)) == 'win') {\n    $domain = AF_INET;\n} else {\n    $domain = AF_UNIX;\n}\nsocket_create_pair($domain, SOCK_STREAM, 0, $sockets);\n$write  = null;\n$except = null;\n$ref =& $sockets[0]; // bug #78038\nvar_dump(socket_select($sockets, $write, $except, 0));\n?>")).toMatchSnapshot();
  });
});
