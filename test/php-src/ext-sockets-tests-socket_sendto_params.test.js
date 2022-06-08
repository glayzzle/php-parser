// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_sendto_params.phpt
  it("ext/sockets - socket_sendto - test with incorrect parameters", function () {
    expect(parser.parseCode("<?php\n    $s_c = socket_create_listen(0);\n    try {\n        $s_w = socket_sendto($s_c, \"foo\", -1, MSG_OOB, '127.0.0.1');\n    } catch (\\ValueError $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n    socket_close($s_c);\n?>")).toMatchSnapshot();
  });
});
