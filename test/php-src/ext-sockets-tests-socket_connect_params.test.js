// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_connect_params.phpt
  it("ext/sockets - socket_connect - test with empty parameters", function () {
    expect(parser.parseCode("<?php\n$s_c = socket_create_listen(0);\nsocket_getsockname($s_c, $addr, $port);\n// wrong parameter count\ntry {\n    socket_connect($s_c);\n} catch (\\ArgumentCountError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    socket_connect($s_c, '0.0.0.0');\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n$s_w = socket_connect($s_c, '0.0.0.0', $port);\nsocket_close($s_c);\n?>")).toMatchSnapshot();
  });
});
