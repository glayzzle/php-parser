// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_select_error.phpt
  it("socket_select() error conditions", function () {
    expect(parser.parseCode("<?php\n$r = $w = $e = ['no resource'];\ntry {\n    socket_select($r, $w, $e, 1);\n} catch (TypeError $ex) {\n    echo $ex->getMessage(), PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
