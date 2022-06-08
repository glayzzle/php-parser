// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_read_params.phpt
  it("ext/sockets - socket_read- test with incorrect parameter", function () {
    expect(parser.parseCode("<?php\n    $s_c_l = socket_create_listen(0);\n    $s_c = socket_read($s_c_l, 25);\n    socket_close($s_c_l);\n?>")).toMatchSnapshot();
  });
});
