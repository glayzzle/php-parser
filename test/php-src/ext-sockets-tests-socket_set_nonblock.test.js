// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_set_nonblock.phpt
  it("ext/sockets - socket_set_block - basic test", function () {
    expect(parser.parseCode("<?php\n    $s_c_l = socket_create_listen(0);\n    socket_set_nonblock($s_c_l);\n    var_dump($s_c_l);\n    //socket_accept($s_c_l);\n    socket_close($s_c_l);\n?>")).toMatchSnapshot();
  });
});
