// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_create_listen-nobind.phpt
  it("Test if socket_create_listen() returns false, when it cannot bind to the port.", function () {
    expect(parser.parseCode("<?php\n$sock = socket_create_listen(80);\n?>")).toMatchSnapshot();
  });
});
