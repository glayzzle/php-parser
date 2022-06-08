// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_abstract_path.phpt
  it("Support for paths in the abstract namespace (bind, connect)", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__.\"/mcast_helpers.php.inc\";\n$path = \"\\x00/foo_bar\";\necho \"creating server socket\\n\";\n$servers = socket_create(AF_UNIX, SOCK_STREAM, 0) or die(\"err\");\nsocket_bind($servers, $path) or die(\"Could not bind\");\nsocket_listen($servers) or die(\"Could not listen\");\nsocket_set_nonblock($servers) or die(\"Could not put in non-blocking mode\");\necho \"creating client socket\\n\";\n$clients = socket_create(AF_UNIX, SOCK_STREAM, 0) or die(\"err\");\nsocket_connect($clients, $path) or die(\"Error connecting\");\n$conns = socket_accept($servers) or die(\"Could not accept connection\");\n$r = socket_sendmsg($clients, [\n    //\"name\" => [ \"addr\" => $path, ],\n    \"iov\" => [\"test \", \"thing\", \"\\n\"],\n], 0);\nvar_dump($r);\nchecktimeout($conns, 500);\nif (!socket_recv($conns, $buf, 20, 0)) die(\"recv\");\nprint_r($buf);\n?>")).toMatchSnapshot();
  });
});
