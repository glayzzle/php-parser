// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_set_nonblock-retval.phpt
  it("Test socket_set_nonblock return values", function () {
    expect(parser.parseCode("<?php\n$socket = socket_create_listen(0);\nvar_dump(socket_set_nonblock($socket));\nsocket_close($socket);\n$socket2 = socket_create_listen(0);\nsocket_close($socket2);\ntry {\n    var_dump(socket_set_nonblock($socket2));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
