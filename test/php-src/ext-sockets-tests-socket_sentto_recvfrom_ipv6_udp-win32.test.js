// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_sentto_recvfrom_ipv6_udp-win32.phpt
  it("Test if socket_recvfrom() receives data sent by socket_sendto() via IPv6 UDP (Win32)", function () {
    expect(parser.parseCode("<?php\n    $socket = socket_create(AF_INET6, SOCK_DGRAM, SOL_UDP);\n    if (!$socket) {\n        die('Unable to create AF_INET6 socket');\n    }\n    if (!socket_set_nonblock($socket)) {\n        die('Unable to set nonblocking mode for socket');\n    }\n    socket_recvfrom($socket, $buf, 12, 0, $from, $port); // cause warning\n    $address = '::1';\n    if (!socket_bind($socket, $address, 1223)) {\n        die(\"Unable to bind to $address:1223\");\n    }\n    $msg = \"Ping!\";\n    $len = strlen($msg);\n    $bytes_sent = socket_sendto($socket, $msg, $len, 0, $address, 1223);\n    if ($bytes_sent == -1) {\n        die('An error occurred while sending to the socket');\n    } else if ($bytes_sent != $len) {\n        die($bytes_sent . ' bytes have been sent instead of the ' . $len . ' bytes expected');\n    }\n    $from = \"\";\n    $port = 0;\n    $bytes_received = socket_recvfrom($socket, $buf, 12, 0, $from, $port);\n    if ($bytes_received == -1) {\n        die('An error occurred while receiving from the socket');\n    } else if ($bytes_received != $len) {\n        die($bytes_received . ' bytes have been received instead of the ' . $len . ' bytes expected');\n    }\n    echo \"Received $buf from remote address $from and remote port $port\" . PHP_EOL;\n    socket_close($socket);\n?>")).toMatchSnapshot();
  });
});
