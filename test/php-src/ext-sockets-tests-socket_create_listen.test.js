// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_create_listen.phpt
  it("Test if socket binds on 31338", function () {
    expect(parser.parseCode("<?php\n$sock = socket_create_listen(31338);\nsocket_getsockname($sock, $addr, $port);\nvar_dump($addr, $port);\n?>")).toMatchSnapshot();
  });
});
