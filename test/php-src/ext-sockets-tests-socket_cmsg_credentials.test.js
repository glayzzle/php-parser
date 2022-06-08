// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_cmsg_credentials.phpt
  it("recvmsg(): receive SCM_CREDENTIALS messages", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__.\"/mcast_helpers.php.inc\";\n$path = __DIR__ . \"/socket_cmsg_credentials.sock\";\n@unlink($path);\necho \"creating send socket\\n\";\n$sends1 = socket_create(AF_UNIX, SOCK_DGRAM, 0) or die(\"err\");\nvar_dump($sends1);\nsocket_set_nonblock($sends1) or die(\"Could not put in non-blocking mode\");\necho \"creating receive socket\\n\";\n$s = socket_create(AF_UNIX, SOCK_DGRAM, 0) or die(\"err\");\nvar_dump($s);\n$br = socket_bind($s, $path) or die(\"err\");\nvar_dump($br);\nsocket_set_nonblock($s) or die(\"Could not put in non-blocking mode\");\nsocket_set_option($s, SOL_SOCKET, SO_PASSCRED, 1) or die(\"could not set SO_PASSCRED\");\n//$r = socket_sendmsg($sends1, [\n//  \"iov\" => [\"test \", \"thing\", \"\\n\"],\n//], 0);\n$r = socket_sendto($sends1, $msg = \"dread\", strlen($msg), 0, $path);\nvar_dump($r);\nchecktimeout($s, 500);\n$data = [\n    \"name\" => [],\n    \"buffer_size\" => 2000,\n    \"controllen\" => socket_cmsg_space(SOL_SOCKET, SCM_CREDENTIALS)\n];\nif (!socket_recvmsg($s, $data, 0)) die(\"recvmsg\");\nprint_r($data);\n$pid = getmypid();\nvar_dump($data['control'][0]['data']['pid'] === $pid);\n?>")).toMatchSnapshot();
  });
});
