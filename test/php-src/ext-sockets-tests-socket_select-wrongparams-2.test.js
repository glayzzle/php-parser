// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_select-wrongparams-2.phpt
  it("Test parameter handling in socket_select().", function () {
    expect(parser.parseCode("<?php\n$sockets = null;\n$write   = null;\n$except  = null;\n$time    = 0;\ntry {\n    socket_select($sockets, $write, $except, $time);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
