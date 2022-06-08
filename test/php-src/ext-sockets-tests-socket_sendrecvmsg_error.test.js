// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_sendrecvmsg_error.phpt
  it("Error during socket_sendmsg() or socket_recvmsg()", function () {
    expect(parser.parseCode("<?php\n$socket = socket_create(AF_INET, SOCK_DGRAM, SOL_UDP);\nsocket_sendmsg($socket, [], -1);\n$message = ['controllen' => 1];\nsocket_recvmsg($socket, $message, -1);\n?>")).toMatchSnapshot();
  });
});
