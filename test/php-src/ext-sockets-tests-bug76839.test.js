// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/bug76839.phpt
  it("Bug #76839: socket_recvfrom may return an invalid 'from' address on MacOS", function () {
    expect(parser.parseCode("<?php\n// This bug only occurs when a specific portion of memory is unclean.\n// Unfortunately, looping around 10 times and using random paths is the\n// best way I could manage to reproduce this problem without modifying php itself :-/\nfor ($i = 0; $i < 10; $i++) {\n    $senderSocketPath = '/tmp/' . substr(md5(rand()), 0, rand(8, 16)) . '.sock';\n    $senderSocket = socket_create(AF_UNIX, SOCK_DGRAM, 0);\n    socket_bind($senderSocket, $senderSocketPath);\n    $receiverSocketPath = '/tmp/' . substr(md5(rand()), 0, rand(8, 16)) . '.sock';\n    $receiverSocket = socket_create(AF_UNIX, SOCK_DGRAM, 0);\n    socket_bind($receiverSocket, $receiverSocketPath);\n    // Send message from sender socket to receiver socket\n    socket_sendto($senderSocket, 'Ping!', 5, 0, $receiverSocketPath);\n    // Receive message on receiver socket\n    $from = '';\n    $message = '';\n    socket_recvfrom($receiverSocket, $message, 65535, 0, $from);\n    echo \"Received '$message'\\n\";\n    // Respond to the sender using the 'from' address from socket_recvfrom\n    socket_sendto($receiverSocket, 'Pong!', 5, 0, $from);\n    echo \"Responded to sender with 'Pong!'\\n\";\n    socket_close($receiverSocket);\n    unlink($receiverSocketPath);\n    socket_close($senderSocket);\n    unlink($senderSocketPath);\n}\n?>")).toMatchSnapshot();
  });
});
