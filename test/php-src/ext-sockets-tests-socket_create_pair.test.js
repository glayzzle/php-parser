// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_create_pair.phpt
  it("Test for socket_create_pair()", function () {
    expect(parser.parseCode("<?php\n$sockets = array();\nif (strtolower(substr(PHP_OS, 0, 3)) == 'win') {\n    $domain = AF_INET;\n} else {\n    $domain = AF_UNIX;\n}\nsocket_create_pair($domain, SOCK_STREAM, 0, $sockets);\nvar_dump($sockets);\n?>")).toMatchSnapshot();
  });
});
