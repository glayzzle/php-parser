// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/bug80723.phpt
  it("Bug #80723: Different sockets compare as equal (regression in 8.0)", function () {
    expect(parser.parseCode("<?php\n$socket_1 = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);\n$socket_2 = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);\nvar_dump($socket_1 == $socket_1);\nvar_dump($socket_2 == $socket_2);\nvar_dump($socket_1 == $socket_2);\n$vector = array(1 => $socket_1, 2 => $socket_2);\nvar_dump(array_search($socket_1, $vector));\nvar_dump(array_search($socket_2, $vector));\n?>")).toMatchSnapshot();
  });
});
