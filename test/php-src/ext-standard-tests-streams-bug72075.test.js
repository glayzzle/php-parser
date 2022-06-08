// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug72075.phpt
  it("Bug #72075 (Referencing socket resources breaks stream_select)", function () {
    expect(parser.parseCode("<?php\n$r = [stream_socket_server(\"tcp://127.0.0.1:0\", $errno, $errStr)];\n$w = NULL;\n$e = NULL;\n// Without this line, all is well:\n$dummy =& $r[0];\nprint stream_select($r, $w, $e, 0.5);\n?>")).toMatchSnapshot();
  });
});
